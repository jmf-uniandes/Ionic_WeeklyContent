import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  LoadingController,
  IonLoading,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AccesoService } from '../servicios/acceso.service';
AccesoService;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel,
    IonItem,
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonLoading,
    FormsModule,
  ],
})
export class HomePage {
  txt_usuario: string = '';
  txt_clave: string = '';
  msgWS: string='';
  constructor(
    private loadingCtrl: LoadingController,
    private servicio: AccesoService
  ) {}

  async login() {
    let datos = {
      op: 'login',
      cod_persona: this.txt_usuario,
      clave_persona: this.txt_clave,
    };
    try {
      const res: any = await this.servicio.postData(datos);
      this.msgWS=res.data.correo_persona.toString();

      if (res.success) {
        this.servicio.showToast(res.msg, 2000);
        this.servicio.createSession('usuario', res.data.ci_persona);
        this.servicio.createSession('nombre', res.data.nom_persona);
         this.servicio.createSession('correo', res.data.correo_persona);
      } else {
        this.servicio.showToast(res.msg, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  createUser() {}
  recoverPassword() {}
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }
}
