import { Routes } from '@angular/router';

export const ROUTES_2022: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./year2022.component').then((mod) => mod.Year2022Component),
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      {
        path: '1',
        loadComponent: () =>
          import('./day1/day1.component').then((mod) => mod.Day1Component),
      },
      {
        path: '2',
        loadComponent: () =>
          import('./day2/day2.component').then((mod) => mod.Day2Component),
      },
    ],
  },
];
