export class Shana {
  #arr: string[] = [];

  constructor() {
    this.#arr.push("🍎");
    this.#arr.push("🍯");
  }

  tova(): string {
    return this.#arr.join(" ➕ ");
  }
}
