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
} from '@ionic/angular/standalone';

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
  mensaje: string = '';

  constructor() {}

  ngOnInit() {}

  vclave() {}
  registrar() {}
  cancelar() {}
}
