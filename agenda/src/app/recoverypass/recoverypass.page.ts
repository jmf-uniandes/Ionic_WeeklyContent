import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
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
  NavController,
} from '@ionic/angular/standalone';
import { AccesoService } from '../servicios/acceso.service';

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
    IonItemDivider,
  ],
})
export class RecoverypassPage implements OnInit {
  @ViewChild('securityAnswerInput', { static: false }) securityAnswerInput!: ElementRef;

  inputEmail: string = '';
  inputSecurityAnswer: string = '';
  securityQuestion: string = '';
  securityAnswer: string = '';
  validUser: string="";
  validPassword: string="";

  constructor(
    private navCtrl: NavController,
    private servicio: AccesoService
  ) {}

  ngOnInit() {}

  async getRecoverInfo() {
    let datos = {
      op: 'recoverAccount',
      correo_persona: this.inputEmail,
    };

    try {
      const res: any = await this.servicio.postData(datos);
      if (res.success) {
        this.securityQuestion = res.data.secretQuestions;
        this.securityAnswer= res.data.secret_answer;
        this.validUser= res.data.ci_persona;
        this.validPassword = res.data.clave_persona;
        console.log('validUser decode from server: '+ JSON.stringify(res))
      } else {
        this.servicio.showToast(res.message, 2000);
      }
    } catch (error) {}
  }

  cancelar() {
    this.navCtrl.navigateBack('/home');
  }

  focusSecurityAnswerInput() {
 
    if (this.securityAnswerInput && this.securityAnswerInput.nativeElement) {
      this.securityAnswerInput.nativeElement.focus(); 
    }
  }

  validateAccount(){
    if(this.inputSecurityAnswer == this.securityAnswer){
      this.servicio.showToast('La respuesta es correcta', 2000);
      this.loginRecover();
    }else{
      this.servicio.showToast('La respuesta es incorrecta', 2000);
    }
  }

  async loginRecover() {
    let datos = {
      op: 'login',
      ci_persona: this.validUser,
      clave_persona: this.validPassword,
    };
    console.log('datos to login: ' + JSON.stringify(datos));

    try {
      const res: any = await this.servicio.postData(datos);
      if (res.success) {
        //create session info with all data
        this.servicio.createSession('identificationUser', res.data.ci_persona);
        this.servicio.createSession('nameUser', res.data.nom_persona);
        this.servicio.createSession('surenameUser', res.data.ape_persona);
        this.servicio.createSession('emailUser', res.data.correo_persona);
        this.servicio.createSession('passwordUser', res.data.clave_persona);
        this.servicio.showToast("Por favor actualice su datos", 2000);
        this.navCtrl.navigateForward('/edit-profile');
      } else {
        this.servicio.showToast(res.message, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }





}
