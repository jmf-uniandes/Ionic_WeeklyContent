import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonButton,
    FormsModule
],
})
export class HomePage {
  constructor(
    private navCtrl: NavController
  ) {}
  GoPage2_NC() {
    this.navCtrl.navigateForward('/page2');
  }
 
  GoPage2_R() {}
}
