import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year2021Component } from './year2021.component';

const routes: Routes = [
  {
    path: '',
    component: Year2021Component,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      {
        path: '1',
        loadChildren: () =>
          import('./day1/day1.module').then((m) => m.Day1Module),
      },
      {
        path: '3',
        loadChildren: () =>
          import('./day3/day3.module').then((m) => m.Day3Module),
      },
      {
        path: '5',
        loadChildren: () =>
          import('./day5/day5.module').then((m) => m.Day5Module),
      },
      {
        path: '11',
        loadChildren: () =>
          import('./day11/day11.module').then((m) => m.Day11Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Year2021RoutingModule {}
