import { Routes } from '@angular/router';
import { Admin } from './admin';
import { AdminUsers } from './admin-users/admin-users';
import { AdminCocktails } from './admin-cocktails/admin-cocktails';

export const routes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      {
        path: 'users',
        component: AdminUsers,
      },
      {
        path: 'cocktails',
        loadChildren: async () => (await import('./admin-cocktails/views/admin-cocktails.routes')).routes,
      },
      {
        path: '',
        redirectTo: 'cocktails',
        pathMatch: 'full',
      },
    ],
  },
];