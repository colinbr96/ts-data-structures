export class QueueNode<T> {
  val: T;
  next: QueueNode<T> | null;

  constructor(val: T, next: QueueNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class Queue<T> {
  front: QueueNode<T> | null;
  back: QueueNode<T> | null;

  constructor(front: QueueNode<T> | null = null) {
    this.front = front;
    this.back = this.front;

    while (this.back?.next) {
      this.back = this.back.next;
    }
  }

  static fromArray<T>(arr: T[]) {
    if (!arr.length) {
      return new Queue<T>();
    }
    let curr = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      const node = new QueueNode(arr[i]);
      node.next = curr;
      curr = node;
    }
    return new Queue(curr);
  }

  toArray() {
    let arr = [];
    let curr: QueueNode<T> | null = this.front;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  toString() {
    let s = "";
    let curr: QueueNode<T> | null = this.front;
    while (curr) {
      s += `${curr.val} -> `;
      curr = curr.next;
    }
    s += "null";
    return s;
  }

  enqueue(val: T) {
    const node = new QueueNode(val);
    if (!this.front) {
      this.front = node;
    } else if (this.back) {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue() {
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

  isEmpty() {
    return !this.front;
  }
}
