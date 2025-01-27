import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonNote,
  NavController,
} from '@ionic/angular/standalone';
import { AccesoService } from '../servicios/acceso.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonNote,
  ],
})
export class EditProfilePage implements OnInit {
  identificationUser: string = '';
  inputName: string = '';
  inputSurename: string = '';
  inputEmail: string = '';
  inputPassword: string = '';
  inputCPassword: string = '';
  msg: string = '';

  constructor(
    protected servicio: AccesoService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadInfoUser();
  }

  loadInfoUser() {
    const res = this.servicio.getInfoUserSession().then((res) => {
       if (res) {
        this.identificationUser = res.identificationUser || '';
        this.inputName = res.nameUser || '';
        this.inputSurename = res.surenameUser || '';
        this.inputEmail = res.emailUser || '';
        this.inputPassword = res.passwordUser || '';
        this.inputCPassword = res.passwordUser || '';
      }
    });
  }


  vpassword() {
    if (this.inputPassword != this.inputCPassword) {
      this.msg = 'The password are diferent';
    } else {
      this.msg = '';
    }
  }

  cancel() {
    this.navCtrl.navigateBack('/menu');
  }

  updateInfo() {
    let datos = {
      op: 'update',
      ci_persona: this.identificationUser,
      nom_persona: this.inputName,
      ape_persona: this.inputSurename,
      correo_persona: this.inputEmail,
      clave_persona: this.inputPassword,
    };
    console.log('datos to update: ' + JSON.stringify(datos));
    this.servicio
      .postData(datos)
      .then(async (res) => {
        const data: any = res;
        if (data.success) {
          this.servicio.updateSession('nameUser', datos.nom_persona);
          this.servicio.updateSession('surenameUser', datos.ape_persona);
          this.servicio.updateSession('emailUser', datos.correo_persona);
          this.servicio.updateSession('passwordUser', datos.clave_persona);
          this.servicio.showToast(data.message, 2000);
          this.navCtrl.navigateBack('/menu');
        } else {
          this.servicio.showToast(data.message, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
      this.loadInfoUser();
  }

  //-----End
}
