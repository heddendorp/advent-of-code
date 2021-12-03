import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day3RoutingModule } from './day3-routing.module';
import { Day3Component } from './day3.component';

@NgModule({
  declarations: [Day3Component],
  imports: [CommonModule, Day3RoutingModule],
})
export class Day3Module {}
