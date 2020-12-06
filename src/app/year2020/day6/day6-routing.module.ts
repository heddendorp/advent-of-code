import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day6Component } from './day6.component';

const routes: Routes = [{ path: '', component: Day6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day6RoutingModule {}
