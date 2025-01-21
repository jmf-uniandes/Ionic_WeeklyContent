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
  constructor(
    private loadingCtrl: LoadingController,
    private servicio: AccesoService
  ) {}

  login() {
    let datos = {
      accion: 'login',
      usuario: this.txt_usuario,
      clave: this.txt_clave,
    };
    this.servicio.postData(datos).subscribe(
      (res: any) => {
        //   if(response['success']==true){
        //     this.servicio.showToast(response['msg'],2000);
        //     this.servicio.createSession('usuario',response['usuario']);
        //     this.servicio.createSession('nombre',response['nombre']);
        //     this.servicio.createSession('correo',response['correo']);
        //   }else{
        //     this.servicio.showToast(response['msg'],2000);
        //   }
        if (res.estado) {
          this.servicio.showToast('Encontro persona', 3000);
        } else {
          this.servicio.showToast('No existe persona', 3000);
        }
      },
      (error) => {
        console.log(error);
      }
    );
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
