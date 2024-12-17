import { flatten, range } from 'lodash-es';

export class VentLine {
  private x1: number;
  private y1: number;
  private x2: number;
  private y2: number;
  private color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  constructor(public segment: string) {
    const [x1, y1, x2, y2] = flatten(
      segment.split(' -> ').map((coords) => coords.split(',')),
    ).map(Number);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  get maxX(): number {
    return Math.max(this.x1, this.x2);
  }

  get minX(): number {
    return Math.min(this.x1, this.x2);
  }

  get maxY(): number {
    return Math.max(this.y1, this.y2);
  }

  get minY(): number {
    return Math.min(this.y1, this.y2);
  }

  get isDiagonal(): boolean {
    return this.x1 !== this.x2 && this.y1 !== this.y2;
  }

  get slope(): number {
    return (this.y2 - this.y1) / (this.x2 - this.x1);
  }

  get pointsPassed(): { x: number; y: number; key: string }[] {
    // console.log(this);
    if (this.isDiagonal) {
      return range(Math.abs(this.x2 - this.x1) + 1).map((step) => ({
        x: this.minX + step,
        y: (this.slope > 0 ? this.minY : this.maxY) + step * this.slope,
        key: `${this.minX + step},${
          (this.slope > 0 ? this.minY : this.maxY) + step * this.slope
        }`,
      }));
    } else if (this.x1 === this.x2) {
      return range(Math.abs(this.y2 - this.y1) + 1).map((step) => ({
        x: this.x1,
        y: this.minY + step,
        key: `${this.x1},${this.minY + step}`,
      }));
    } else {
      return range(Math.abs(this.x2 - this.x1) + 1).map((step) => ({
        x: this.minX + step,
        y: this.y1,
        key: `${this.minX + step},${this.y1}`,
      }));
    }
  }

  public passesPoint(x: number, y: number): boolean {
    return (
      this.passesHorizontal(x, y) ||
      this.passesVertical(x, y) ||
      this.passesDiagonal(x, y)
    );
  }

  public draw(ctx: CanvasRenderingContext2D, scale: number): void {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = Math.min(scale, 3);
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.moveTo(this.x1 * scale, this.y1 * scale);
    ctx.lineTo(this.x2 * scale, this.y2 * scale);
    ctx.stroke();
  }

  private passesHorizontal(x: number, y: number): boolean {
    return (
      this.y1 === this.y2 && y === this.y1 && x >= this.minX && x <= this.maxX
    );
  }

  private passesVertical(x: number, y: number): boolean {
    return (
      this.x1 === this.x2 && x === this.x1 && y >= this.minY && y <= this.maxY
    );
  }

  private passesDiagonal(x: number, y: number): boolean {
    if (!this.isDiagonal) {
      return false;
    }
    if (
      !(x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY)
    ) {
      return false;
    }
    if (this.slope === 1) {
      return x - this.minX === y - this.minY;
    } else {
      return y - this.minY === this.maxX - x;
    }
  }
}
