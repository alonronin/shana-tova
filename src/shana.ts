export class Shana {
  _arr: string[] = [];

  constructor() {
    this._arr.push("🍎");
    this._arr.push("🍯");
  }

  tova(): string {
    return this._arr.join(" ➕ ");
  }
}
