import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from './data.json';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-day1',
  imports: [CommonModule],
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day1Component {
  public input$ = new BehaviorSubject<string>(data.example);
  public elves$ = this.input$.pipe(map((input) => input.split('\n\n')));
  public perElve$ = this.elves$.pipe(
    map((elves) =>
      elves.map((input) =>
        input
          .split('\n')
          .map((text) => Number(text))
          .reduce((prev, curr) => prev + curr, 0),
      ),
    ),
  );
  public sortedElves$ = this.perElve$.pipe(
    map((elves) => elves.sort((a, b) => b - a)),
  );
  public maxCalories$ = this.perElve$.pipe(map((elves) => Math.max(...elves)));
  public topThreeSum$ = this.sortedElves$.pipe(
    map((elves) => elves.slice(0, 3).reduce((prev, curr) => prev + curr, 0)),
  );

  loadFullRiddle() {
    this.input$.next(data.riddle);
  }
}
