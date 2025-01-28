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
  IonList,
  IonNote,
  IonItemGroup,
  IonItemDivider,
  NavController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-recoverypass',
  templateUrl: './recoverypass.page.html',
  styleUrls: ['./recoverypass.page.scss'],
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
    IonItemGroup,
    IonItemDivider
  ],
})
export class RecoverypassPage implements OnInit {
  inputEmail: string = '';
  inputSecurityAnswer: string = '';
  constructor(
    private navCtrl: NavController
  ) {}

  ngOnInit() {}


  validateAccount(){}
  cancelar(){
    this.navCtrl.navigateBack('/home');
  }








}
