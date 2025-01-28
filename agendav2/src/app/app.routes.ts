import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'rclave',
    loadComponent: () => import('./rclave/rclave.page').then( m => m.RclavePage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then( m => m.ContactoPage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./contactos/contactos.page').then( m => m.ContactosPage)
  },
  {
    path: 'mcontacto',
    loadComponent: () => import('./mcontacto/mcontacto.page').then( m => m.McontactoPage)
  },
  {
    path: 'econtacto',
    loadComponent: () => import('./econtacto/econtacto.page').then( m => m.EcontactoPage)
  },
];
