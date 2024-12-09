import { ChangeDetectionStrategy, Component } from '@angular/core';
import data from './data.json';

@Component({
    selector: 'app-day3',
    templateUrl: './day3.component.html',
    styleUrls: ['./day3.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Day3Component {
  public exampleInput = data.example;
  public lines = this.exampleInput.split('\n');
  public characters = this.lines.map((line) => line.split(''));
  public commonPerColumn = [...Array(this.characters[0].length).keys()]
    .map((column) => this.characters.map((line) => line[column]))
    .map((column) =>
      column.filter((char) => char === '0').length >= column.length / 2
        ? '0'
        : '1'
    );
  public correctNumber1 = parseInt(this.commonPerColumn.join(''), 2);
  public correctNumber2 = parseInt(
    this.commonPerColumn.map((char) => (char === '1' ? '0' : '1')).join(''),
    2
  );
  public solutionStep1 = data.input.split('\n').map((line) => line.split(''));
  public solutionStep2 = [...Array(this.solutionStep1[0].length).keys()]
    .map((column) => this.solutionStep1.map((line) => line[column]))
    .map((column) =>
      column.filter((char) => char === '0').length >= column.length / 2
        ? '0'
        : '1'
    );
  public solutionNumber1 = parseInt(this.solutionStep2.join(''), 2);
  public solutionNumber2 = parseInt(
    this.solutionStep2.map((char) => (char === '1' ? '0' : '1')).join(''),
    2
  );
  public solution = this.solutionNumber1 * this.solutionNumber2;
}
