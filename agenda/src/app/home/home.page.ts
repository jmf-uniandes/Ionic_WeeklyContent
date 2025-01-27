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
  NavController,
  ModalController
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { AccesoService } from '../servicios/acceso.service';
import {AccountPage} from '../account/account.page';


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
    private servicio: AccesoService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  async login() {
    let datos = {
      op: 'login',
      ci_persona: this.txt_usuario,
      clave_persona: this.txt_clave,
    };
    console.log('datos to login: ' + JSON.stringify(datos));

    try {
      const res: any = await this.servicio.postData(datos);
        if (res.success) {
        //this.servicio.showToast("conexion satisfactoria", 2000);
        this.servicio.createSession('usuario', res.data.ci_persona);
        this.servicio.createSession('nombre', res.data.nom_persona);
         this.servicio.createSession('correo', res.data.correo_persona);
         this.navCtrl.navigateForward('/menu')
      } else {
        this.servicio.showToast(res.message, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

 async createUser() {
  console.log('createUser');
    const modal = await this.modalCtrl.create({
      component: AccountPage,
    });
    return await modal.present();
  }

  recoverPassword() {}
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    loading.present();
  }
}
