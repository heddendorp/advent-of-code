export class Point {
  private readonly _x: number;
  private readonly _y: number;

  constructor(
    x: string,
    y: string,
    id: string | null = null,
    mark = Marker.None,
    starting = false,
  ) {
    this._x = parseInt(x, 10);
    this._y = parseInt(y, 10);
    if (id) {
      this._id = id;
    }
    this._mark = mark;
    this._starting = starting;
  }

  private _starting: boolean;

  get starting(): boolean {
    return this._starting;
  }

  set starting(value: boolean) {
    this._starting = value;
  }

  private _mark: Marker;

  get mark(): Marker {
    return this._mark;
  }

  set mark(value: Marker) {
    this._mark = value;
  }

  get x(): number {
    return this._x;
  }

  private _id;

  get id(): string {
    return this._id!;
  }

  get y(): number {
    return this._y;
  }
}

export enum Marker {
  None,
  Discard,
  Solution,
  Ignore,
  Safe,
}
