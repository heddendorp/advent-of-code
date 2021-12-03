import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Year2021RoutingModule } from './year2021-routing.module';
import { Year2021Component } from './year2021.component';

@NgModule({
  declarations: [Year2021Component],
  imports: [CommonModule, Year2021RoutingModule],
})
export class Year2021Module {}
