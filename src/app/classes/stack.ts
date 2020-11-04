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
    if (this.length === this.capacity) {
      throw new Error('Cannot push more because stack is full!');
    }
    this.stack[this.length++] = char;
  }

  pop(): string {
    if (this.length === 0) {
      throw new Error('Nothing to pop because stack is empty!');
    }
    return this.stack[--this.length];
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
