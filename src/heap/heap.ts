const parentOf = (i: number) => Math.floor((i - 1) / 2);
const leftChildOf = (i: number) => 2 * i + 1;
const rightChildOf = (i: number) => 2 * i + 2;

export class Heap {
  heap: number[] = [];
  private comparator: (a: number, b: number) => boolean;

  constructor(arr: number[], isMaxHeap = false) {
    if (isMaxHeap) {
      this.comparator = (a, b) => a > b;
    } else {
      this.comparator = (a, b) => a < b;
    }

    this.heapify(arr);
  }

  peek(): number | null {
    return this.heap[0] || null;
  }

  get size(): number {
    return this.heap.length;
  }

  extract() {
    // Swap root with last node
    const temp = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = this.heap[0];
    this.heap[0] = temp;

    const result = this.heap.pop();
    this.siftDown();
    return result;
  }

  extractTopN(n: number) {
    const topN = [];
    for (let i = 0; i < n; i++) {
      topN.push(this.extract());
    }
    return topN;
  }

  private heapify(arr: number[]): number[] {
    this.heap = [];
    for (const el of arr) {
      this.heap.push(el);
      this.siftUp();
    }
    return this.heap;
  }

  private siftUp() {
    let i = this.heap.length - 1;
    while (i > 0 && this.comparator(this.heap[i], this.heap[parentOf(i)])) {
      const parent = parentOf(i);

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
      (leftChildOf(i) < this.size && this.comparator(this.heap[leftChildOf(i)], this.heap[i])) ||
      (rightChildOf(i) < this.size && this.comparator(this.heap[rightChildOf(i)], this.heap[i]))
    ) {
      let childToSwap = leftChildOf(i);
      if (
        rightChildOf(i) < this.size &&
        this.comparator(this.heap[rightChildOf(i)], this.heap[leftChildOf(i)])
      ) {
        childToSwap = rightChildOf(i);
      }

      // Swap
      const temp = this.heap[childToSwap];
      this.heap[childToSwap] = this.heap[i];
      this.heap[i] = temp;
      i = childToSwap;
    }
  }
}
