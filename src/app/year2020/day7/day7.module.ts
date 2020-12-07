import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day7RoutingModule } from './day7-routing.module';
import { Day7Component } from './day7.component';

@NgModule({
  declarations: [Day7Component],
  imports: [CommonModule, Day7RoutingModule],
})
export class Day7Module {}
