import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Day7Component } from './day7.component';

const routes: Routes = [{ path: '', component: Day7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day7RoutingModule {}
