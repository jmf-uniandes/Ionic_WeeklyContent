import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCheckbox,
  IonList,
  IonLabel,
  IonItem
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCheckbox,
    IonList,
    IonLabel,
    IonItem,
    FormsModule,
    CommonModule
  ],
})
export class HomePage {
  unitsOfTemperature = [
    { name: 'Celsius', checked: false },
    { name: 'Fahrenheit', checked: false },
    { name: 'Kelvin', checked: false },
  ];
  onCheckboxChange(index: number, event: any) {
    this.unitsOfTemperature[index].checked = event.detail.checked;
   
  }


  constructor() {}
}
