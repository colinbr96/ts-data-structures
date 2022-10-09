class QueueNode<T> {
  val: T;
  next: QueueNode<T> | null;

  constructor(val: T, next: QueueNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class Queue<T> {
  front: QueueNode<T> | null = null;
  back: QueueNode<T> | null = null;

  constructor(val?: T) {
    if (val !== undefined) {
      this.front = new QueueNode<T>(val);
      this.back = this.front;
    }
  }

  static fromArray<T>(arr: T[]): Queue<T> {
    if (arr.length === 0) {
      return new Queue<T>();
    }
    if (arr.length === 1) {
      return new Queue<T>(arr[0]);
    }

    const queue = new Queue<T>(arr[arr.length - 1]);
    let curr = queue.back;

    for (let i = arr.length - 2; i >= 0; i--) {
      const node = new QueueNode(arr[i]);
      node.next = curr;
      curr = node;
    }
    queue.front = curr;
    return queue;
  }

  toArray(): T[] {
    let arr = [];
    let curr: QueueNode<T> | null = this.front;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  toString(): string {
    let s = "";
    let curr: QueueNode<T> | null = this.front;
    while (curr) {
      s += `${curr.val} -> `;
      curr = curr.next;
    }
    s += "null";
    return s;
  }

  enqueue(val: T): void {
    const node = new QueueNode(val);
    if (!this.front) {
      this.front = node;
    } else if (this.back) {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue(): T {
    if (!this.front) {
      throw Error("Can't dequeue an empty Queue");
    }
    const temp = this.front.val;
    if (this.front === this.back) {
      this.front = this.back = null;
    } else {
      this.front = this.front.next;
    }
    return temp;
  }

  isEmpty(): boolean {
    return !this.front;
  }
}
