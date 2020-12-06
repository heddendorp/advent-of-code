import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Year2020RoutingModule } from './year2020-routing.module';
import { Year2020Component } from './year2020.component';

@NgModule({
  declarations: [Year2020Component],
  imports: [CommonModule, Year2020RoutingModule],
})
export class Year2020Module {}
