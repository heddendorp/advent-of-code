import {
  BehaviorSubject,
  interval,
  Observable,
  range,
  ReplaySubject,
} from 'rxjs';
import { map, mapTo, share, switchMap, take } from 'rxjs/operators';
import { Marker, Point } from './point';

export class PointGrid {
  private _points: Point[] = [];
  private _discarded = new Set();

  constructor(endX: number, endY: number) {
    const grid: any = {};
    for (let row = 0; row <= endY; row++) {
      grid[row] = {};
      for (let column = 0; column <= endX; column++) {
        const point = new Point(column.toString(), row.toString(), 'lightgrey');
        grid[row][column] = point;
        this._point$.next(point);
      }
    }
    this._grid.next(grid);
    console.log(grid);
  }

  private _point$: ReplaySubject<Point> = new ReplaySubject();

  get point$(): Observable<Point> {
    return this._point$.asObservable();
  }

  private _grid: BehaviorSubject<{
    [row: number]: { [column: number]: Point };
  }> = new BehaviorSubject({});

  get grid(): Observable<{ id: string; mark: Marker }[][]> {
    return this._grid.asObservable().pipe(map(this.transformGrid));
  }

  get width() {
    return Object.keys(this._grid.value[0]).length;
  }

  get height() {
    return Object.keys(this._grid.value).length;
  }

  addPoint(point: Point) {
    const newGrid = this._grid.value;
    newGrid[point.y][point.x] = point;
    this._grid.next(newGrid);
    this._point$.next(point);
    if (point.starting) {
      this._points.push(point);
    }
  }

  fillInGrid(): Observable<number> {
    const width = Object.keys(this._grid.value[0]).length;
    const height = Object.keys(this._grid.value).length;
    const counter = interval(50).pipe(
      take(height),
      switchMap((y) => range(0, width).pipe(map((x) => [x, y]))),
      share(),
    );
    counter.subscribe(([pointX, pointY]) => {
      if (this._points.find((p) => p.x === pointX && p.y === pointY)) {
        return;
      }
      let currentClosest,
        currentDistance = Number.MAX_SAFE_INTEGER,
        undecided = false;
      this._points.forEach((point) => {
        const distance = this.manhattan(pointX, pointY, point);
        if (currentDistance < distance) {
          return false;
        } else if (currentDistance === distance) {
          undecided = true;
          return true;
        }
        currentDistance = distance;
        currentClosest = point;
        undecided = false;
        return false;
      });
      if (!undecided) {
        this.addPoint(
          new Point(pointX.toString(), pointY.toString(), currentClosest!.id),
        );
      } else {
        this.addPoint(
          new Point(
            pointX.toString(),
            pointY.toString(),
            'grey',
            Marker.Ignore,
          ),
        );
      }
    });
    return counter.pipe(map(([x, y]) => x * y));
  }

  markEdgeNodes(): Observable<number> {
    const width = Object.keys(this._grid.value[0]).length;
    const height = Object.keys(this._grid.value).length;
    const edgeLength = width * 2 + height * 2 - 4;
    const counter = interval(0).pipe(take(edgeLength), share());
    counter.subscribe((index) => {
      const grid = this._grid.value;
      if (index < width) {
        const point = grid[0][index];
        if (point.mark === Marker.Ignore) {
          return;
        }
        point.mark = Marker.Discard;
        point.starting = false;
        this._discarded.add(point.id);
        this.addPoint(point);
      } else if (index >= edgeLength - width) {
        const point = grid[height - 1][(index + 2) % width];
        if (point.mark === Marker.Ignore) {
          return;
        }
        point.mark = Marker.Discard;
        point.starting = false;
        this._discarded.add(point.id);
        this.addPoint(point);
      } else {
        const point =
          grid[Math.floor((index + 2 - width) / 2)][
            ((index - width) % 2) * (width - 1)
          ];
        if (point.mark === Marker.Ignore) {
          return;
        }
        point.mark = Marker.Discard;
        point.starting = false;
        this._discarded.add(point.id);
        this.addPoint(point);
      }
    });
    return counter;
  }

  findSolution(): Observable<any> {
    const width = Object.keys(this._grid.value[0]).length;
    const height = Object.keys(this._grid.value).length;
    const counter = range(0, width * height);
    const areas: any = {};
    counter.subscribe((pointIndex) => {
      const pointX = pointIndex % width;
      const pointY = Math.floor(pointIndex / width);
      const point = this._grid.value[pointY][pointX];
      if (!this._discarded.has(point.id)) {
        if (areas[point.id]) {
          areas[point.id]++;
        } else {
          areas[point.id] = 1;
        }
      }
    });
    const biggestArea = Math.max(
      ...Object.keys(areas).map((key) => areas[key]),
    );
    const winningId = Object.keys(areas).find(
      (key: any) => areas[key] === biggestArea,
    );
    const counter2 = range(0, width * height).pipe(share());
    counter2.subscribe((pointIndex) => {
      const pointX = pointIndex % width;
      const pointY = Math.floor(pointIndex / width);
      const point = this._grid.value[pointY][pointX];
      if (point.id === winningId) {
        point.mark = Marker.Solution;
        point.starting = false;
        setTimeout(() => this.addPoint(point));
      }
    });
    return counter2.pipe(mapTo({ biggestArea, winningId }));
  }

  resetMarkers() {
    const finder = range(0, this.height).pipe(
      switchMap((y) => range(0, this.width).pipe(map((x) => [x, y]))),
      share(),
    );
    finder.subscribe(([x, y]) => {
      const point = this._grid.value[y][x];
      point.mark = Marker.None;
      point.starting = false;
      this.addPoint(point);
    });
    return finder;
  }

  findSafePoints(maxDistance: number) {
    const safePoints: any[] = [];
    const finder = range(0, this.height).pipe(
      switchMap((y) => range(0, this.width).pipe(map((x) => [x, y]))),
      share(),
    );
    finder.subscribe(([x, y]) => {
      const point = this._grid.value[y][x];
      const distance = this._points.reduce((previousValue, currentValue) => {
        return previousValue + this.manhattan(x, y, currentValue);
      }, 0);
      if (distance < maxDistance) {
        point.mark = Marker.Safe;
        point.starting = false;
        safePoints.push(point);
        setTimeout(() => this.addPoint(point));
      }
    });
    return finder.pipe(mapTo(safePoints));
  }

  private transformGrid(grid: {
    [row: number]: { [column: number]: Point };
  }): { id: string; mark: Marker }[][] {
    const result: { id: string; mark: Marker }[][] = [];
    Object.keys(grid).forEach((row: any) => {
      result.push([]);
      Object.keys(grid[row]).forEach((column: any) => {
        result[row].push({
          id: grid[row][column].id,
          mark: grid[row][column].mark,
        });
      });
    });
    return result;
  }

  private manhattan(x: number, y: number, point: Point) {
    return Math.abs(x - point.x) + Math.abs(y - point.y);
  }
}
