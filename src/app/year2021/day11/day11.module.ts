import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day11RoutingModule } from './day11-routing.module';
import { Day11Component } from './day11.component';

@NgModule({
  declarations: [Day11Component],
  imports: [CommonModule, Day11RoutingModule],
})
export class Day11Module {}
