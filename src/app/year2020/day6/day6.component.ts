import { ChangeDetectionStrategy, Component } from '@angular/core';
import data from './data.json';
import { flatten, intersection, uniq } from 'lodash-es';

@Component({
    selector: 'app-day6',
    templateUrl: './day6.component.html',
    styleUrls: ['./day6.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Day6Component {
  steps1: { data: string[]; operation: string }[] = [];
  steps2: { data: string[]; operation: string }[] = [];
  private exampleInput = data.example;
  private riddleInput = data.riddle;

  constructor() {
    this.steps1.push({ data: [this.exampleInput], operation: 'input = ' });
    this.steps1.push({
      data: this.exampleInput.split('\n\n'),
      operation: `.split('\\n\\n')`,
    });
    this.steps1.push({
      data: this.steps1[1].data.map((s) => s.replace(/\n/g, '')),
      operation: `.map((s) => s.replace(/\\n/g, ''))`,
    });
    this.steps1.push({
      data: this.steps1[2].data.map((s) => uniq(s.split('')).join('')),
      operation: `.map(chars => _.uniq(chars))`,
    });
    this.steps1.push({
      data: this.steps1[3].data.map((s) => s.length.toString()),
      operation: '.map(chars => chars.length)',
    });
    this.steps1.push({
      data: [
        this.steps1[4].data
          .reduce((acc, curr) => acc + parseInt(curr, 10), 0)
          .toString(),
      ],
      operation: `.reduce((a, i) => a + i, 0)`,
    });

    this.steps2.push({ data: [this.exampleInput], operation: 'input = ' });
    this.steps2.push({
      data: this.exampleInput.split('\n\n'),
      operation: `.split('\\n\\n')`,
    });
    this.steps2.push({
      data: flatten(this.steps2[1].data.map((s) => s.split('\n'))),
      operation: `.map((group) => group.split('\\n'))`,
    });
    this.steps2.push({
      data: this.steps2[2].data.map((s) => s.split('').toString()),
      operation: `.map((line) => line.split(''))`,
    });
    this.steps2.push({
      data: this.steps2[1].data.map((s) =>
        intersection(...s.split('\n').map((a) => a.split(''))).toString()
      ),
      operation: '.map(group => _.intersection(group))',
    });
    this.steps2.push({
      data: this.steps2[1].data.map((s) =>
        intersection(...s.split('\n').map((a) => a.split(''))).length.toString()
      ),
      operation: '.map(intersection => intersection.length)',
    });
    this.steps2.push({
      data: [
        this.steps2[5].data
          .reduce((acc, curr) => acc + parseInt(curr, 10), 0)
          .toString(),
      ],
      operation: `.reduce((a, i) => a + i, 0)`,
    });
    console.log(
      this.exampleInput
        .split('\n\n')
        .map(
          (s) => intersection(...s.split('\n').map((a) => a.split(''))).length
        )
        .reduce((acc, curr) => acc + curr, 0)
    );
    console.log(
      this.riddleInput
        .split('\n\n')
        .map((s) => uniq(s.replace(/\n/g, '').split('')).length)
        .reduce((acc, curr) => acc + curr, 0)
    );
    console.log(
      this.riddleInput
        .split('\n\n')
        .map(
          (s) => intersection(...s.split('\n').map((a) => a.split(''))).length
        )
        .reduce((acc, curr) => acc + curr, 0)
    );
  }
}
