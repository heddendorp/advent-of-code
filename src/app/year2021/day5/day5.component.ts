import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { VentLine } from './ventLine';
import { BehaviorSubject } from 'rxjs';
import data from './data.json';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day5Component implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement> | undefined;

  public currentStep = new BehaviorSubject<number>(1);
  public intersectionCount = new BehaviorSubject<number>(0);
  private ctx: CanvasRenderingContext2D | null = null;
  private lines = new BehaviorSubject<VentLine[]>([]);
  private scale = new BehaviorSubject<number>(1);
  private workingArea: { x: number; y: number } | null = null;

  ngOnInit(): void {
    if (this.canvas) {
      this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    this.lines.subscribe((lines) => {
      this.drawLines(lines);
    });
  }

  ngOnDestroy() {
    this.lines.complete();
  }

  public drawLines(lines: VentLine[]) {
    if (!this.canvas) {
      return;
    }
    if (!this.ctx) {
      return;
    }
    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.clientWidth,
      this.canvas.nativeElement.clientHeight
    );
    const lineIterator = lines[Symbol.iterator]();
    const drawLine = () => {
      const nextLine = lineIterator.next();
      if (nextLine.done) {
        return;
      }
      if (this.ctx) {
        nextLine.value.draw(this.ctx, this.scale.value);
      }
      requestAnimationFrame(drawLine);
    };
    drawLine();
    // of(...lines)
    //   .pipe(observeOn(animationFrameScheduler))
    //   .subscribe((line) => {
    //     if (this.ctx) {
    //       line.draw(this.ctx, this.scale.value);
    //     }
    //   });
    // lines.forEach((line) => {
    //   if (this.ctx) {
    //     line.draw(this.ctx, this.scale.value);
    //   }
    // });
  }

  loadExample() {
    this.loadLines(data.example);
  }

  loadRiddle() {
    this.loadLines(data.riddle);
  }

  removeDiagonals() {
    this.lines.next(this.lines.value.filter((line) => !line.isDiagonal));
    this.currentStep.next(3);
  }

  checkOverlap() {
    const pointsWithMoreLines = new Set<string>();
    const pointsWithLine = new Set<string>();
    this.lines.value.forEach((line) => {
      line.pointsPassed.forEach((point) => {
        // console.log(point);
        if (pointsWithLine.has(point.key)) {
          if (pointsWithMoreLines.has(point.key)) {
            return;
          } else {
            pointsWithMoreLines.add(point.key);
          }
        } else {
          pointsWithLine.add(point.key);
        }
      });
    });
    this.intersectionCount.next(pointsWithMoreLines.size);
    this.currentStep.next(4);
    const points = pointsWithMoreLines.values();
    const drawPoint = () => {
      requestAnimationFrame(() => {
        const point = points.next();
        if (point.value) {
          const [x, y] = point.value.split(',').map(Number);
          if (this.ctx) {
            this.ctx.fillStyle = 'red';
            this.ctx.rect(
              x * this.scale.value - 2,
              y * this.scale.value - 2,
              4,
              4
            );
            this.ctx.fill();
          }
          drawPoint();
        }
      });
    };
    drawPoint();
    /*for (let x = 0; x <= (this.workingArea?.x ?? 0); x++) {
      for (let y = 0; y <= (this.workingArea?.y ?? 0); y++) {
        const lines = this.lines.value.filter((line) => line.passesPoint(x, y));
        if (lines.length > 1) {
          pointsWithMoreLines.push({ x, y, lines });
        }
      }
    }*/
    // pointsWithMoreLines.forEach((point) => {
    //
    // });
  }

  private loadLines(input: string) {
    const lines = input.split('\n').map((coords) => new VentLine(coords));
    const maxX = Math.max(...lines.map((line) => line.maxX));
    const maxY = Math.max(...lines.map((line) => line.maxY));
    const xScale = (this.canvas?.nativeElement?.clientWidth ?? 0) / maxX;
    const yScale = (this.canvas?.nativeElement?.clientHeight ?? 0) / maxY;
    const scale = Math.min(xScale, yScale);
    this.workingArea = {
      x: maxX,
      y: maxY,
    };
    if (this.canvas?.nativeElement) {
      this.canvas.nativeElement.height = maxY * scale;
      this.canvas.nativeElement.width = maxX * scale;
    }
    this.scale.next(scale);
    this.lines.next(lines);
    this.currentStep.next(2);
  }
}
