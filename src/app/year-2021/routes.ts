import { Routes } from '@angular/router';

export const ROUTES_2021: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./year2021.component').then((mod) => mod.Year2021Component),
    children: [
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
        path: '5',
        loadComponent: () =>
          import('./day5/day5.component').then((mod) => mod.Day5Component),
      },
      {
        path: '11',
        loadComponent: () =>
          import('./day11/day11.component').then((mod) => mod.Day11Component),
      },
    ],
  },
];
