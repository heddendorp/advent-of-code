import { Routes } from '@angular/router';

export const ROUTES_2020: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./year2020.component').then((mod) => mod.Year2020Component),
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
        path: '6',
        loadComponent: () =>
          import('./day6/day6.component').then((mod) => mod.Day6Component),
      },
      {
        path: '7',
        loadComponent: () =>
          import('./day7/day7.component').then((mod) => mod.Day7Component),
      },
      {
        path: '8',
        loadComponent: () =>
          import('./day8/day8.component').then((mod) => mod.Day8Component),
      },
    ],
  },
];
