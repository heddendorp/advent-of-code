import { Routes } from '@angular/router';

export const ROUTES_2024: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./year2024.component').then((m) => m.Year2024Component),
    children: [
      { path: '', pathMatch: 'full', redirectTo: '10' },
      {
        path: '10',
        loadComponent: () =>
          import('./day-10/day-10.component').then((m) => m.Day10Component),
      },
    ],
  },
];
