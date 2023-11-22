import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'iframe',
    loadComponent: () => import('./iframe/iframe.page').then( m => m.IframePage)
  },
];
