import { Component } from '@angular/core';
import {
  BehaviorSubject,
  interval,
  Subject,
  switchMap,
  takeWhile,
  tap,
  withLatestFrom,
} from 'rxjs';
import data from './data.json';
import { NgClass, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-day8',
    templateUrl: './day8.component.html',
    styleUrls: ['./day8.component.scss'],
    imports: [NgClass, AsyncPipe]
})
export class Day8Component {
  public state$ = new BehaviorSubject<{
    acc: number;
    next: number;
  }>({ acc: 0, next: 0 });
  public executed = new BehaviorSubject<number[]>([]);
  public instructions: Array<[string, number]>;
  private exampleInput = data.example;
  private start = new Subject();

  constructor() {
    this.instructions = this.exampleInput
      .split('\n')
      .map((line) => line?.match(/(\w\w\w) ([+-]\d+)/i)?.splice(1) ?? [])
      .map(([instr, arg]) => [instr, parseInt(arg, 10)]);
    this.start
      .pipe(switchMap(() => interval(1000)))
      .pipe(
        withLatestFrom(this.state$, this.executed),
        tap(console.log),
        takeWhile(([_, state, executed]) => !executed.includes(state.next))
      )
      .subscribe(
        ([_, state, executed]: [
          unknown,
          { next: number; acc: number },
          number[]
        ]) => {
          this.executed.next([...executed, state.next]);
          const [instr, arg] = this.instructions[state.next];
          switch (instr) {
            case 'nop':
              this.state$.next({ ...state, next: state.next + 1 });
              break;
            case 'jmp': {
              this.state$.next({ ...state, next: state.next + arg });
              break;
            }
            case 'acc': {
              this.state$.next({
                ...state,
                acc: state.acc + arg,
                next: state.next + 1,
              });
              break;
            }
          }
        }
      );
  }

  startExecution(): void {
    this.start.next(true);
  }
}
