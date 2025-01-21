import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccesoService {
  server: string = 'http://localhost//WSAgenda/agenda.php';
  constructor(public ToastCtrl: ToastController, public http: HttpClient) {}

  postData(body: any) {
    let head = new HttpHeaders({
      'Content-Type': 'application/json, charset:utf8',
    });
    let options ={
      headers:head
    }
    return this.http.post(this.server, JSON.stringify(body), options);
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
