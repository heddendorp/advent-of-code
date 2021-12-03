import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year2021Component } from './year2021.component';

const routes: Routes = [
  {
    path: '',
    component: Year2021Component,
    children: [
      {
        path: '3',
        loadChildren: () =>
          import('./day3/day3.module').then((m) => m.Day3Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Year2021RoutingModule {}
