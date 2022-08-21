export const minHeapComparator = (a: number, b: number) => a < b;
export const maxHeapComparator = (a: number, b: number) => a > b;

export class Heap<T> {
  heap: T[] = [];
  private comparator;

  constructor(arr: T[] = [], comparator = (a: T, b: T) => a < b) {
    this.comparator = comparator;
    for (const el of arr) {
      this.push(el);
    }
  }

  private static parentOf = (i: number) => Math.floor((i - 1) / 2);
  private static leftChildOf = (i: number) => 2 * i + 1;
  private static rightChildOf = (i: number) => 2 * i + 2;

  peek(): T | undefined {
    return this.heap[0];
  }

  get size(): number {
    return this.heap.length;
  }

  push(el: T) {
    this.heap.push(el);
    this.siftUp();
  }

  pop(): T {
    if (!this.size) {
      throw Error("Can't pop an empty Heap");
    }
    // Swap root with last node
    const temp = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = this.heap[0];
    this.heap[0] = temp;

    const result = this.heap.pop() as T;
    this.siftDown();
    return result;
  }

  popMultiple(count: number) {
    const topN = [];
    for (let i = 0; i < count; i++) {
      topN.push(this.pop());
    }
    return topN;
  }

  private siftUp() {
    let i = this.heap.length - 1;
    while (i > 0 && this.comparator(this.heap[i], this.heap[Heap.parentOf(i)])) {
      const parent = Heap.parentOf(i);

      // Swap
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[i];
      this.heap[i] = temp;
      i = parent;
    }
  }

  private siftDown() {
    let i = 0;
    while (
      (Heap.leftChildOf(i) < this.size &&
        this.comparator(this.heap[Heap.leftChildOf(i)], this.heap[i])) ||
      (Heap.rightChildOf(i) < this.size &&
        this.comparator(this.heap[Heap.rightChildOf(i)], this.heap[i]))
    ) {
      let childToSwap = Heap.leftChildOf(i);
      if (
        Heap.rightChildOf(i) < this.size &&
        this.comparator(this.heap[Heap.rightChildOf(i)], this.heap[Heap.leftChildOf(i)])
      ) {
        childToSwap = Heap.rightChildOf(i);
      }

      // Swap
      const temp = this.heap[childToSwap];
      this.heap[childToSwap] = this.heap[i];
      this.heap[i] = temp;
      i = childToSwap;
    }
  }
}
