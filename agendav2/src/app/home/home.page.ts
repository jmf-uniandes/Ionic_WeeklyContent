import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,  ModalController, NavController } from '@ionic/angular/standalone';
import { AccesoService } from './../servicio/acceso.service';
import { RclavePage } from '../rclave/rclave.page';
import { CuentaPage } from '../cuenta/cuenta.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NavController],
})
export class HomePage {
  txt_usuario:string="";
txt_clave:string="";
  constructor( public servicio:AccesoService,
    public navCtrl: NavController,
    public modalCtrl: ModalController)
     {}

     loggin()
     {
       let datos={
         accion:'loggin',
         usuario:this.txt_usuario,
         clave:this.txt_clave
       }
       this.servicio.postData(datos).subscribe((res:any)=>{
         if(res.estado==true)
         {
           this.servicio.createSession('cod_persona',res.persona[0].codigo);
           this.servicio.createSession('nombre_persona',res.persona[0].nombre);
           this.servicio.showToast(res.mensaje);
           this.navCtrl.navigateRoot(['/menu']);
         }
         else
         {
           this.servicio.showToast(res.mensaje);
         }
       });
      
      
     }
     async crear(){
       const modal= await this.modalCtrl.create({
         component:CuentaPage
       });
       return await modal.present();
     }
     async recuperar()
     {
       const modal= await this.modalCtrl.create({
         component:RclavePage
       });
       return await modal.present();
     }
      

}
