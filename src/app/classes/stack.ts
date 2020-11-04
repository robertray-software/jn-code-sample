export class Stack {

  private readonly capacity: number;
  private length: number;

  private readonly stack: string[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.stack = new Array<string>(capacity);
    this.length = 0;
  }

  push(char: string): void {
    this.stack[this.length++] = char;
  }

  pop(): string {
    return this.stack[--this.length];
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
