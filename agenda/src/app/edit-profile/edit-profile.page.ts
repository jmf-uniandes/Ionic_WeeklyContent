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
  IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
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
    IonNote
  ],
})
export class EditProfilePage implements OnInit {
inputName: string = "";
inputSurename: string = "";
inputEmail: string = "";
inputPassword: string = "";
inputCPassword: string  = "";
msg: string="";


  constructor() {}

  ngOnInit() {}






  vpassword(){}
  Cancel(){}

  updateInfo(){}

cancel(){}



  //-----End
}
