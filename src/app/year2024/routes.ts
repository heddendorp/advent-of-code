import { Routes } from '@angular/router';

export const ROUTES_2024: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./year2024.component').then((m) => m.Year2024Component),
  },
];
