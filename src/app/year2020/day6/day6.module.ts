import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day6RoutingModule } from './day6-routing.module';
import { Day6Component } from './day6.component';

@NgModule({
  declarations: [Day6Component],
  imports: [CommonModule, Day6RoutingModule],
})
export class Day6Module {}
