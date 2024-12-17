import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-day-11',
  imports: [],
  templateUrl: './day-11.component.html',
  styles: ``,
})
export class Day11Component {
  protected canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private active = true;
}
