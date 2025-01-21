import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

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
    IonLabel,
    IonInput,
    FormsModule,
  ],
})
export class HomePage {
  txtNumber1: string='';
  txtNumber2: string='';
  txtResult: string='';
  constructor() {}
  f_add(){
    this.txtResult = (parseFloat(this.txtNumber1) + parseFloat(this.txtNumber2)).toString();
  }
  f_subtract(){
    this.txtResult = (parseFloat(this.txtNumber1) - parseFloat(this.txtNumber2)).toString();
  }
f_multiply(){
  this.txtResult = (parseFloat(this.txtNumber1) * parseFloat(this.txtNumber2)).toString();
}
f_divide(){
  this.txtResult = (parseFloat(this.txtNumber1) / parseFloat(this.txtNumber2)).toString();
}
f_clear(){
  this.txtNumber1 = '';
  this.txtNumber2 = '';
  this.txtResult = '';
}
}
