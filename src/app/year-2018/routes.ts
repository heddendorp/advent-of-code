import { Routes } from '@angular/router';

export const ROUTES_2018: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./year2018.component').then((mod) => mod.Year2018Component),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '1',
      },
      {
        path: '1',
        loadComponent: () =>
          import('./day1/day1.component').then((mod) => mod.Day1Component),
      },
      {
        path: '3',
        loadComponent: () =>
          import('./day3/day3.component').then((mod) => mod.Day3Component),
      },
      {
        path: '6',
        loadComponent: () =>
          import('./day6/day6.component').then((mod) => mod.Day6Component),
      },
    ],
  },
];
