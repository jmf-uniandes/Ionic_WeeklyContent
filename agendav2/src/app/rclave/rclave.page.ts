import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,ModalController  } from '@ionic/angular/standalone';
import { AccesoService } from './../servicio/acceso.service';

@Component({
  selector: 'app-rclave',
  templateUrl: './rclave.page.html',
  styleUrls: ['./rclave.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RclavePage implements OnInit {
  txt_cedula:string="";
txt_correo:string="";
txt_clave:string="";
txt_cclave:string="";
mensaje:string="";

  constructor(
    public modalCtrl:ModalController,
    public servicio:AccesoService
  ) { }

  ngOnInit() {
  }
  vclave()
  {
    if(this.txt_clave==this.txt_cclave)
    {
      this.mensaje="";
    }
    else
    {
      this.mensaje="Claves no coinciden";
    }
  }
  cclave()
  {
    if(this.mensaje!="")
    {
      this.servicio.showToast("Claves no coinciden");
    }
    else if( this.txt_cedula=="" || this.txt_correo=="" || this.txt_cclave=="")
    {
      this.servicio.showToast("Faltan datos");
    }
    else
    {
      let datos={
        "accion":"cambiarclave",
        "cedula":this.txt_cedula,
        "correo":this.txt_correo,
        "clave":this.txt_clave
      }
      this.servicio.postData(datos).subscribe((res:any)=>{
        if(res.estado==true)
        {
          this.modalCtrl.dismiss();
          this.servicio.showToast(res.mensaje);
        }
        else
        {
          this.servicio.showToast(res.mensaje);
        }
      });
    }
  }
  cancelar()
  {
    this.modalCtrl.dismiss();
  }
}
