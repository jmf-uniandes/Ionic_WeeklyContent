import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonInput,
  IonButton,
  IonItem,
  ModalController,
} from '@ionic/angular/standalone';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
    IonInput,
    IonButton,
    IonItem,
  ],
})
export class AccountPage implements OnInit {
  txt_cedula: string = '';
  txt_name: string = '';
  txt_surename: string = '';
  txt_correo: string = '';
  txt_clave: string = '';
  txt_cclave: string = '';
  msg: string = '';

  constructor(
    private servicio: AccesoService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  vclave() {
    if (this.txt_clave != this.txt_cclave) {
      this.msg = 'The password are diferent';
    } else {
      this.msg = '';
    }
  }

  async registrar() {
    if (
      this.txt_cedula !== '' &&
      this.txt_name !== '' &&
      this.txt_surename !== '' &&
      this.txt_correo !== '' &&
      this.txt_clave !== '' &&
      this.txt_cclave !== ''
    ) {
      let datos = {
        op: 'insert',
        ci_persona: this.txt_cedula,
        nom_persona: this.txt_name,
        ape_persona: this.txt_surename,
        correo_persona: this.txt_correo,
        clave_persona: this.txt_clave,
      };
      console.log('datos to insert: ' + JSON.stringify(datos));
      this.servicio
        .postData(datos)
        .then(async (result) => {
          const data: any = result;
          if (data.success) {
            this.servicio.showToast(data.message, 2000);
            this.modalCtrl.dismiss();
          } else {
            this.servicio.showToast(data.message, 2000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.servicio.showToast('All fields are required', 2000);
    }
  }
  cancelar() {
    this.modalCtrl.dismiss();
  }



  // verify in the bbdd if the id exist previously
  async exitsIDnumber() {
    let data = {
      op: 'exitsIDnumber',
      cod_persona: this.txt_cedula,
    };

    try {
      const res: any = await this.servicio.postData(data);
      //console.log('result message from server:' + res.msg.toString());
      if (res.success) {
        this.txt_cedula = '';
        console.log('result res.success:' + res.msg);
        this.servicio.showToast(res.message, 2000);
      }
    } catch (error) {
      //console.log( error.toString());
    }
  }
}
