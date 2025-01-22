import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccesoService {
  server: string =
    'http://localhost/WS_AG2425/controllers/persona.controller.php?';
  constructor(public ToastCtrl: ToastController, public http: HttpClient) {}

   async postData(body: any) {
    let head = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    let options = {
      headers: head,
    };
    
    try {
      const response = await firstValueFrom(
        this.http.post(this.server, JSON.stringify(body), options)
      );
      //console.log('Respuesta Servidor JM:', JSON.stringify(response));
      return response;
    } catch (error) {
      return error;
    }
  }

  async showToast(msg: string, showtime: number) {
    const toast = await this.ToastCtrl.create({
      message: msg,
      duration: showtime,
      position: 'top',
    });
    toast.present();
  }

  async createSession(id: string, valor: string) {
    await Preferences.set({ key: id, value: valor });
  }

  async getSession(id: string) {
    const { value } = await Preferences.get({ key: id });
    return value;
  }

  async removeSession(id: string) {
    await Preferences.remove({ key: id });
  }

  async clearSession() {
    await Preferences.clear();
  }
}
