import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import data from './data.json';
import { BehaviorSubject, interval, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-day11',
  templateUrl: './day11.component.html',
  styleUrls: ['./day11.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day11Component implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement> | undefined;

  public currentStep = new BehaviorSubject<number>(1);
  public simProgress$ = new BehaviorSubject<number>(0);
  public simStep$ = new BehaviorSubject<number>(0);
  public flashes$ = new BehaviorSubject<number>(0);
  public fullFlash$ = new BehaviorSubject<number>(0);

  private ctx: CanvasRenderingContext2D | null = null;
  private grid: number[][] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.canvas) {
      this.ctx = this.canvas.nativeElement.getContext('2d');
    }
  }

  loadInput(data: string) {
    this.simProgress$.next(0);
    this.simStep$.next(0);
    this.flashes$.next(0);
    this.fullFlash$.next(0);
    this.grid = [];
    const input = data.split('\n').map((line) => line.split('').map(Number));
    console.log(input);
    const ctx = this.ctx;
    const size = 30;
    if (ctx) {
      ctx.clearRect(0, 0, 300, 300);
      ctx.font = '20px Arial';
      ctx.fillStyle = 'white';
      input.forEach((row, y) => {
        row.forEach((cell, x) => {
          ctx.fillText(String(cell), x * size, y * size);
        });
      });
    }
    this.currentStep.next(2);
    this.grid = input;
  }

  loadExample() {
    this.loadInput(data.example);
  }

  loadRiddle() {
    this.loadInput(data.riddle);
  }

  startSimulation() {
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }
    const grid = new Map();
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        grid.set(`${x},${y}`, this.grid[y][x]);
      }
    }
    interval(300)
      .pipe(
        takeWhile(() => this.fullFlash$.value === 0),
        tap((step) => {
          this.simStep$.next(step + 1);
        })
      )
      .subscribe((step) => {
        const progress = this.simProgress$.getValue();
        if (progress < 100) {
          this.simProgress$.next(progress + 1);
        }
        const size = 30;
        ctx.clearRect(0, 0, 300, 300);
        ctx.font = '20px Arial';
        const flashes: string[] = [];
        const flashers = new Set();
        grid.forEach((cell, key) => {
          if (cell === 9) {
            flashes.push(key);
            if (step < 100) {
              this.flashes$.next(this.flashes$.value + 1);
            }
            flashers.add(key);
          }
          grid.set(key, (cell + 1) % 10);
        });
        this.drawGrid(grid);
        const cascade = (items: string[]) => {
          const newFlashes: string[] = [];
          items.forEach((item) => {
            const [x, y] = item.split(',').map(Number);
            if (x > 0) {
              const newValue = (grid.get(`${x - 1},${y}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x - 1},${y}`)) {
                newFlashes.push(`${x - 1},${y}`);
                flashers.add(`${x - 1},${y}`);
              }
              grid.set(`${x - 1},${y}`, newValue);
            }
            if (x < 9) {
              const newValue = (grid.get(`${x + 1},${y}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x + 1},${y}`)) {
                newFlashes.push(`${x + 1},${y}`);
                flashers.add(`${x + 1},${y}`);
              }
              grid.set(`${x + 1},${y}`, newValue);
            }
            if (y > 0) {
              const newValue = (grid.get(`${x},${y - 1}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x},${y - 1}`)) {
                newFlashes.push(`${x},${y - 1}`);
                flashers.add(`${x},${y - 1}`);
              }
              grid.set(`${x},${y - 1}`, newValue);
            }
            if (y < 9) {
              const newValue = (grid.get(`${x},${y + 1}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x},${y + 1}`)) {
                newFlashes.push(`${x},${y + 1}`);
                flashers.add(`${x},${y + 1}`);
              }
              grid.set(`${x},${y + 1}`, newValue);
            }
            if (x > 0 && y > 0) {
              const newValue = (grid.get(`${x - 1},${y - 1}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x - 1},${y - 1}`)) {
                newFlashes.push(`${x - 1},${y - 1}`);
                flashers.add(`${x - 1},${y - 1}`);
              }
              grid.set(`${x - 1},${y - 1}`, newValue);
            }
            if (x > 0 && y < 9) {
              const newValue = (grid.get(`${x - 1},${y + 1}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x - 1},${y + 1}`)) {
                newFlashes.push(`${x - 1},${y + 1}`);
                flashers.add(`${x - 1},${y + 1}`);
              }
              grid.set(`${x - 1},${y + 1}`, newValue);
            }
            if (x < 9 && y > 0) {
              const newValue = (grid.get(`${x + 1},${y - 1}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x + 1},${y - 1}`)) {
                newFlashes.push(`${x + 1},${y - 1}`);
                flashers.add(`${x + 1},${y - 1}`);
              }
              grid.set(`${x + 1},${y - 1}`, newValue);
            }
            if (x < 9 && y < 9) {
              const newValue = (grid.get(`${x + 1},${y + 1}`) + 1) % 10;
              if (newValue === 0 && !flashers.has(`${x + 1},${y + 1}`)) {
                newFlashes.push(`${x + 1},${y + 1}`);
                flashers.add(`${x + 1},${y + 1}`);
              }
              grid.set(`${x + 1},${y + 1}`, newValue);
            }
          });
          this.drawGrid(grid);
          if (newFlashes.length > 0) {
            if (step < 100) {
              this.flashes$.next(this.flashes$.value + newFlashes.length);
            }
            requestAnimationFrame(() => {
              cascade(newFlashes);
            });
          } else {
            if (flashers.size === 100 && this.fullFlash$.value === 0) {
              this.fullFlash$.next(step + 1);
            }
            flashers.forEach((key) => {
              grid.set(key, 0);
            });
          }
        };
        requestAnimationFrame(() => {
          cascade(flashes);
        });
      });
  }

  drawGrid(grid: Map<string, number>) {
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }
    const size = 30;
    ctx.clearRect(0, 0, 300, 300);
    ctx.font = '20px Arial';
    grid.forEach((cell, key) => {
      const [x, y] = key.split(',').map(Number);
      if (cell === 0) {
        ctx.fillStyle = 'white';
      } else {
        ctx.fillStyle = 'gray';
      }
      ctx.fillText(String(cell), x * size, y * size);
    });
  }
}
