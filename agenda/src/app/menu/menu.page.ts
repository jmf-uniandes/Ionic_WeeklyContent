import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonLabel,
  IonItem,
  IonButton,
  NavController
} from '@ionic/angular/standalone';
import { AccesoService } from '../servicios/acceso.service';





@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenu,
    IonMenuButton,
    IonLabel,
    IonItem,
    IonMenu,
    IonButton
  ],
})



export class MenuPage implements OnInit {
  user_name: string = '';
  constructor(protected servicio: AccesoService,
     private navCtrl: NavController
  ) {}

  ngOnInit() {
     this.servicio.getSession('nameUser').then(res => {
      this.user_name = res || 'Usuario desconocido'; // Valor predeterminado
    });
  }
  
  returnToHome(){
    //this.navCtrl.navigateRoot('/home');
    window.location.href = '/home';
    this.servicio.clearSession();
  }
  gotoEditProfile(){
    this.navCtrl.navigateForward('/edit-profile');
  }
}
