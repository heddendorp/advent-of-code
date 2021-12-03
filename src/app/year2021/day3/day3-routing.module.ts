import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3Component } from './day3.component';

const routes: Routes = [{ path: '', component: Day3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day3RoutingModule {}
