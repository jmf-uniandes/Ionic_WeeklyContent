import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ContactoPage implements OnInit {
  txt_nombre:string="";
txt_apellido:string="";
txt_telefono:string="";
txt_email:string="";
mensaje:string="";
cod_persona:string="";

constructor(protected navCtrl: NavController, protected servicio:AccesoService)
{
  this.servicio.getSession('cod_persona').then((res:any)=>{
    this.cod_persona=res;
  });
}

    ngOnInit() {
    }
    verificartelefonoemail() 
    {
      let datos={
      "accion":"vtelefono",
      "cod_persona":this.cod_persona,
      "telefono":this.txt_telefono,
      "email":this.txt_email
      };
      this.servicio.postData(datos).subscribe((res:any)=>{
        if(res.estado)
        {
          this.mensaje=res.mensaje;
        }
        else
        {
          this.mensaje=res.mensaje;
        }
      });
    }
      guardar()
      {
        let datos={
          "accion":"nuevoc",
          "cod_persona":this.cod_persona,
          "nombre":this.txt_nombre,
          "apellido":this.txt_apellido,
          "telefono":this.txt_telefono,
          "email":this.txt_email
        };
        this.servicio.postData(datos).subscribe((res:any)=>{
          if(res.estado==true)
          {
            this.servicio.showToast(res.mensaje);
            this.navCtrl.back();
          }
          else
          {
            this.servicio.showToast(res.mensaje);
          }
        });
      }
      cancelar()
      {
        this.navCtrl.navigateRoot(['/contactos']);
      }
   
   
  }

}
