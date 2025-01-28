import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
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
