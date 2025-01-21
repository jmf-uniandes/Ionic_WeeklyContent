import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonButton,
  IonButtons,
  IonModal,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Page2Page } from '../page2/page2.page';

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
    IonButtons,
    FormsModule,
    IonModal,
  ],
})
export class HomePage {
  isModalOpen = true;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController
  ) {}
  GoPage2_NC() {
    this.navCtrl.navigateForward('/page2');
  }

  GoPage2_R() {
    this.router.navigate(['/page2']);
  }

  async loadModal() {
    const modal = await this.modalCtrl.create({
      component: Page2Page,
    });
    return await modal.present();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
