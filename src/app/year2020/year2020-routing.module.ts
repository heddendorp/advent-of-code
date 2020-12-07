import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Year2020Component } from './year2020.component';

const routes: Routes = [
  {
    path: '',
    component: Year2020Component,
    children: [
      {
        path: '1',
        loadChildren: () =>
          import('./day1/day1.module').then((m) => m.Day1Module),
      },
      {
        path: '6',
        loadChildren: () =>
          import('./day6/day6.module').then((m) => m.Day6Module),
      },
      {
        path: '7',
        loadChildren: () =>
          import('./day7/day7.module').then((m) => m.Day7Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Year2020RoutingModule {}
