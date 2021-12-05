import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day5Component } from './day5.component';

const routes: Routes = [{ path: '', component: Day5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Day5RoutingModule {}
