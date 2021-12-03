import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day8RoutingModule } from './day8-routing.module';
import { Day8Component } from './day8.component';

@NgModule({
  declarations: [Day8Component],
  imports: [CommonModule, Day8RoutingModule],
})
export class Day8Module {}
