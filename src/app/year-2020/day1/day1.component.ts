import { ChangeDetectionStrategy, Component } from '@angular/core';
import data from './data.json';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day1Component {
  steps1: { data: any[]; operation: string }[] = [];
  steps2: { data: string[]; operation: string }[] = [];
  private exampleInput = data.example;

  constructor() {
    this.steps1.push({ data: [this.exampleInput], operation: 'input = ' });
    this.steps1.push({
      data: this.exampleInput.split('\n').map((v) => parseInt(v, 10)),
      operation: `.split('\\n')`,
    });
    this.steps1.push({
      data: this.steps1[1].data.filter((v, i) =>
        this.steps1[1].data
          .filter((_, i2) => i !== i2)
          .find((v2) => v + v2 === 2020),
      ),
      operation: `.filter(v => input.find(i => i + v === 2020))`,
    });
    this.steps1.push({
      data: [this.steps1[2].data.reduce((a, v) => a * v, 1)],
      operation: `.reduce((a, v) => a * v, 1)`,
    });
  }
}
