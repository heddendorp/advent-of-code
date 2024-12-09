import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Marker, Point } from './point';
import { interval, Observable } from 'rxjs';
import { PointGrid } from './pointGrid';
import { share, take } from 'rxjs/operators';

@Component({
  selector: 'app-day06',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.scss'],
  imports: [ReactiveFormsModule],
})
export class Day6Component implements OnInit {
  challengeInput = new FormControl(
    '1, 1\n1, 6\n8, 3\n3, 4\n5, 5\n8, 9',
    Validators.required,
  );
  distanceInput = new FormControl('32', Validators.required);
  currentStep = 0;
  grid$!: Observable<{ id: string; mark: Marker }[][]>;
  point$!: Observable<Point>;
  pointGrid!: PointGrid;
  working = false;
  working2 = false;
  winner: any;
  winner2: any;
  @ViewChild('canvas') canvas!: ElementRef;

  constructor() {}

  ngOnInit() {}

  async startAlgorithm() {
    this.working = true;
    this.challengeInput.disable();
    const rows = this.challengeInput
      .value!.split('\n')
      .map((p) => p.trim())
      .filter((p) => p);
    const cells = rows.map((r) => r.split(',').map((c) => c.trim()));
    const points = cells.map(
      (c, index) =>
        new Point(
          c[0],
          c[1],
          this.rainbow(cells.length, index),
          undefined,
          true,
        ),
    );
    const maxX = Math.max(1, ...points.map((p) => p.x));
    const maxY = Math.max(1, ...points.map((p) => p.y));
    console.log(maxX, maxY);
    this.pointGrid = new PointGrid(maxX, maxY);
    this.grid$ = this.pointGrid.grid;
    this.point$ = this.pointGrid.point$;
    this.setupDisplay();
    this.currentStep = 1;
    const counter = interval(50).pipe(take(points.length), share());
    counter.subscribe((index) => this.pointGrid.addPoint(points[index]));
    await counter.toPromise();
    this.currentStep = 2;
    await this.pointGrid.fillInGrid().toPromise();
    this.currentStep = 3;
    await this.pointGrid.markEdgeNodes().toPromise();
    this.currentStep = 4;
    this.winner = await this.pointGrid.findSolution().toPromise();
    this.currentStep = 5;
  }

  async continueAlgorithm() {
    this.working2 = true;
    this.distanceInput.disable();
    this.currentStep = 6;
    await this.pointGrid.resetMarkers().toPromise();
    this.currentStep = 7;
    const safePoints = await this.pointGrid
      .findSafePoints(Number(this.distanceInput.value!))
      .toPromise();
    this.currentStep = 8;
    this.winner2 = safePoints!.length;
  }

  loadChallenge() {
    this.challengeInput.setValue(`152, 292
163, 90
258, 65
123, 147
342, 42
325, 185
69, 45
249, 336
92, 134
230, 241
74, 262
241, 78
299, 58
231, 146
239, 87
44, 157
156, 340
227, 226
212, 318
194, 135
235, 146
171, 197
160, 59
218, 205
323, 102
290, 356
244, 214
174, 250
70, 331
288, 80
268, 128
359, 98
78, 249
221, 48
321, 228
52, 225
151, 302
183, 150
142, 327
172, 56
72, 321
225, 298
265, 300
86, 288
78, 120
146, 345
268, 181
243, 235
262, 268
40, 60`);
    this.distanceInput.setValue('10000');
  }

  private setupDisplay() {
    const canvas = this.canvas.nativeElement;
    const pointWidth = 10;
    const pointHeight = 10;
    const dataWidth = this.pointGrid.width * pointWidth;
    const dataHeight = this.pointGrid.height * pointHeight;
    const canvasWidth = canvas.clientWidth;
    const scaling = Math.min(2, canvasWidth / dataWidth);
    console.log(scaling);
    canvas.width = dataWidth * scaling;
    canvas.style.width = dataWidth * scaling + 'px';
    canvas.height = dataHeight * scaling;
    canvas.style.height = dataHeight * scaling + 'px';
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.font = '10px monospace';
    ctx.textBaseline = 'hanging';
    ctx.scale(scaling, scaling);
    console.log(ctx);
    this.point$.subscribe((point) => {
      ctx.clearRect(
        point.x * pointWidth - 1,
        point.y * pointHeight - 1,
        pointWidth - 2,
        pointHeight - 2,
      );
      switch (point.mark) {
        case Marker.Ignore:
          ctx.fillStyle = 'grey';
          ctx.fillRect(
            point.x * pointWidth,
            point.y * pointHeight,
            pointWidth / 2,
            pointHeight / 2,
          );
          break;
        case Marker.Discard:
          ctx.fillStyle = 'red';
          // ctx.fillRect((point.x) * pointWidth,
          //   (point.y) * pointHeight,
          //   pointWidth,
          //   pointHeight);
          ctx.fillText('X', point.x * pointWidth, point.y * pointHeight);
          break;
        case Marker.Safe:
          ctx.fillStyle = point.id;
          // ctx.fillRect((point.x) * pointWidth,
          //   (point.y) * pointHeight,
          //   pointWidth,
          //   pointHeight);
          ctx.fillText('#', point.x * pointWidth, point.y * pointHeight);
          break;
        case Marker.Solution:
          ctx.fillStyle = point.id;
          /*ctx.fillRect((point.x) * pointWidth + 1,
            (point.y) * pointHeight + 1,
            pointWidth - 2,
            pointHeight - 2);*/
          ctx.fillText('S', point.x * pointWidth, point.y * pointHeight);
          break;
        default:
          ctx.fillStyle = point.id;
          if (point.starting) {
            const minSquare = Math.min(pointWidth, pointHeight);
            const radius = minSquare / 2 - 1;
            ctx.beginPath();
            ctx.arc(
              point.x * pointWidth - 1 + radius,
              point.y * pointHeight - 1 + radius,
              radius,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          } else {
            ctx.fillRect(
              point.x * pointWidth - 1,
              point.y * pointHeight - 1,
              pointWidth - 2,
              pointHeight - 2,
            );
          }
      }
    });
  }

  private rainbow(numOfSteps: number, step: number) {
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    /* tslint:disable:no-bitwise */
    let r, g, b;
    const h = step / numOfSteps;
    const i = ~~(h * 6);
    const f = h * 6 - i;
    const q = 1 - f;
    switch (i % 6) {
      case 0:
        r = 1;
        g = f;
        b = 0;
        break;
      case 1:
        r = q;
        g = 1;
        b = 0;
        break;
      case 2:
        r = 0;
        g = 1;
        b = f;
        break;
      case 3:
        r = 0;
        g = q;
        b = 1;
        break;
      case 4:
        r = f;
        g = 0;
        b = 1;
        break;
      case 5:
        r = 1;
        g = 0;
        b = q;
        break;
    }
    return (
      '#' +
      ('00' + (~~(r! * 255)).toString(16)).slice(-2) +
      ('00' + (~~(g! * 255)).toString(16)).slice(-2) +
      ('00' + (~~(b! * 255)).toString(16)).slice(-2)
    );
    /* tslint:disable:no-bitwise */
  }
}
