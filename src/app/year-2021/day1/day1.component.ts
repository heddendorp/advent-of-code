import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import data from './data.json';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class Day1Component implements OnDestroy {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement> | undefined;

  public currentStep = new BehaviorSubject<number>(1);
  public increaseSteps: Observable<number>;
  public increaseSums: Observable<number>;

  private ctx: CanvasRenderingContext2D | null = null;
  private workingArea: { x: number; y: number } | null = null;
  private scale = new BehaviorSubject<number>(1);
  private depths$ = new BehaviorSubject<number[]>([]);

  constructor() {
    this.increaseSteps = this.depths$.pipe(
      map(
        (depths) =>
          depths.filter((depth, index) => {
            if (index === 0) {
              return false;
            }
            return depth > depths[index - 1];
          }).length,
      ),
    );
    this.increaseSums = this.depths$.pipe(
      map((depths) =>
        depths.map((depth, index) => {
          if (index > depths.length - 3) {
            return 0;
          }
          return depth + depths[index + 1] + depths[index + 2];
        }),
      ),
      map(
        (depths) =>
          depths.filter((depth, index) => {
            if (index === 0) {
              return false;
            }
            return depth > depths[index - 1];
          }).length,
      ),
    );
    afterNextRender(() => {
      if (this.canvas) {
        this.ctx = this.canvas.nativeElement.getContext('2d');
      }
      this.depths$.subscribe((depths) => this.drawDepth(depths));
    });
  }
  ngOnDestroy() {
    this.depths$.complete();
    this.scale.complete();
    this.currentStep.complete();
  }

  loadExample() {
    this.loadData(data.example);
  }

  loadRiddle() {
    this.loadData(data.riddle);
  }

  private loadData(data: string) {
    const depths = data.split('\n').map(Number);
    const maxY = Math.max(...depths) * 1.1;
    const maxX = (depths.length + 2) * 10;
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
    this.depths$.next(depths);
  }

  private drawDepth(depths: number[]) {
    const ctx = this.ctx;
    if (ctx) {
      ctx.strokeStyle = 'lightblue';
      ctx.lineWidth = Math.min(this.scale.value, 3);
      ctx.beginPath();
      depths.forEach((depth, index) => {
        const x = (index + 1) * 10 * this.scale.value;
        const y = (depth - 20) * this.scale.value;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          if (depths[index - 1] < depth) {
            ctx.strokeStyle = 'red';
          } else {
            ctx.strokeStyle = 'green';
          }
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    }
  }
}
