import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, shareReplay } from 'rxjs';
import data from './data.json';

const moveMap: Record<string, 'R' | 'P' | 'S'> = {
  A: 'R',
  B: 'P',
  C: 'S',
  X: 'R',
  Y: 'P',
  Z: 'S',
};

const recommendedMoveMap: Record<string, string> = {
  'A X': 'A C',
  'A Y': 'A A',
  'A Z': 'A B',
  'B X': 'B A',
  'B Y': 'B B',
  'B Z': 'B C',
  'C X': 'C B',
  'C Y': 'C C',
  'C Z': 'C A',
};

const moveScore: Record<'R' | 'P' | 'S', number> = {
  R: 1,
  P: 2,
  S: 3,
};

const gameScore = (a: 'R' | 'P' | 'S', b: 'R' | 'P' | 'S') => {
  switch (a) {
    case 'R':
      switch (b) {
        case 'R':
          return 3;
        case 'P':
          return 6;
        case 'S':
          return 0;
      }
    case 'P':
      switch (b) {
        case 'R':
          return 0;
        case 'P':
          return 3;
        case 'S':
          return 6;
      }
    case 'S':
      switch (b) {
        case 'R':
          return 6;
        case 'P':
          return 0;
        case 'S':
          return 3;
      }
  }
};
@Component({
    selector: 'app-day2',
    imports: [CommonModule],
    templateUrl: './day2.component.html',
    styleUrls: ['./day2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Day2Component {
  public input$ = new BehaviorSubject<string>(data.example);
  public rounds$ = this.input$.pipe(
    map((input) => input.split('\n')),
    shareReplay(1)
  );
  public recommendedRounds$ = this.rounds$.pipe(
    map((rounds) => rounds.map((round) => recommendedMoveMap[round]))
  );
  public moves$ = this.rounds$.pipe(
    map((rounds) =>
      rounds.map((round) => round.split(' ').map((move) => moveMap[move]))
    )
  );
  public recommendedMoves$ = this.recommendedRounds$.pipe(
    map((rounds) =>
      rounds.map((round) => round.split(' ').map((move) => moveMap[move]))
    )
  );
  public scores$ = this.moves$.pipe(
    map((moves) =>
      moves.map((move) => {
        const [a, b] = move;
        return gameScore(a, b) + moveScore[b];
      })
    )
  );
  public recommendedScores$ = this.recommendedMoves$.pipe(
    map((moves) =>
      moves.map((move) => {
        const [a, b] = move;
        return gameScore(a, b) + moveScore[b];
      })
    )
  );
  public scoreSum$ = this.scores$.pipe(
    map((scores) => scores.reduce((a, b) => a + b, 0))
  );
  public recommendedScoreSum$ = this.recommendedScores$.pipe(
    map((scores) => scores.reduce((a, b) => a + b, 0))
  );
  loadFullRiddle() {
    this.input$.next(data.riddle);
  }
}
