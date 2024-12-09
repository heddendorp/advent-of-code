import { Routes } from '@angular/router';
import { ROUTES_2022 } from './year-2022/routes';
import { ROUTES_2024 } from './year2024/routes';
import { ROUTES_2021 } from './year-2021/routes';
import { ROUTES_2020 } from './year2020/routes';
import { ROUTES_2018 } from './year-2018/routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./empty/empty.component').then((m) => m.EmptyComponent),
  },
  { path: '2018', children: ROUTES_2018 },
  { path: '2020', children: ROUTES_2020 },
  { path: '2021', children: ROUTES_2021 },
  { path: '2022', children: ROUTES_2022 },
  { path: '2024', children: ROUTES_2024 },
];
