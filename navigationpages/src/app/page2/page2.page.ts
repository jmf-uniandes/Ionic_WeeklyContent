import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton
} from '@ionic/angular/standalone';
 import { NavController } from '@ionic/angular';
 import { CommonModule } from '@angular/common';
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonButton,
    CommonModule,  
    FormsModule
  ],
})
export class Page2Page implements OnInit {
  constructor(
    private navCtrl: NavController  
  ) {}
  GoHome_NC() {
    this.navCtrl.navigateBack('/home');
  }
  ngOnInit() {}
  
}
