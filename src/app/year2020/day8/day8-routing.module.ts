import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day8Component } from './day8.component';

const routes: Routes = [{ path: '', component: Day8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day8RoutingModule {}
