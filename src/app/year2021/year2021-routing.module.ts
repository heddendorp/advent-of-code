import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Year2021Component } from './year2021.component';

const routes: Routes = [{ path: '', component: Year2021Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Year2021RoutingModule {}
