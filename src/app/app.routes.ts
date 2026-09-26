import { Routes } from '@angular/router';
import { Cocktails } from './views/cocktails/cocktails';
import { NotFound } from './views/not-found';

export const routes: Routes = [
  {
    path: 'cocktails',
    component: Cocktails,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cocktails',
  },
  {
    path: '**',
    component: NotFound,
  },
];