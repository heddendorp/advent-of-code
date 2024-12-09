export class Area {
  constructor(x: number, y: number, width: number, height: number, id: string) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._id = id;
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _x: number;

  get x(): number {
    return this._x;
  }

  private _y: number;

  get y(): number {
    return this._y;
  }

  private _width: number;

  get width(): number {
    return this._width;
  }

  private _height: number;

  get height(): number {
    return this._height;
  }

  get xEnd(): number {
    return this._x + this._width;
  }

  get yEnd(): number {
    return this._y + this._height;
  }
}
