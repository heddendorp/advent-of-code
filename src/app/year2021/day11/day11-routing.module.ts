import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day11Component } from './day11.component';

const routes: Routes = [{ path: '', component: Day11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day11RoutingModule {}
