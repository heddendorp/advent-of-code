import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day5RoutingModule } from './day5-routing.module';
import { Day5Component } from './day5.component';

@NgModule({
  declarations: [Day5Component],
  imports: [CommonModule, Day5RoutingModule],
})
export class Day5Module {}
