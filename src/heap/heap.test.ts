import { Heap, maxHeapComparator } from "./heap";

describe("Heap", () => {
  it("can heapify a min-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9]);
    expect(heap.peek()).toEqual(1);
    expect(heap.heap).toEqual([1, 2, 4, 3, 6, 10, 8, 7, 5, 9]);
  });

  it("can heapify a max-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9], maxHeapComparator);
    expect(heap.peek()).toEqual(10);
    expect(heap.heap).toEqual([10, 9, 8, 7, 6, 4, 3, 2, 1, 5]);
  });

  it("doesn't modify input array", () => {
    const arr = [3, 5, 4, 2, 6, 10, 8, 7, 1, 9];
    new Heap(arr);
    expect(arr).toEqual([3, 5, 4, 2, 6, 10, 8, 7, 1, 9]);
  });

  it("can heap-sort a min-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9]);
    expect(heap.popMultiple(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("can heap-sort a max-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9], maxHeapComparator);
    expect(heap.popMultiple(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it("can peek an empty heap", () => {
    const heap = new Heap([]);
    expect(heap.peek()).toBe(undefined);
  });

  it("can pop", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9]);
    expect(heap.size).toBe(10);
    expect(heap.pop()).toBe(1);
    expect(heap.size).toBe(9);
  });

  it("can push", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9]);
    expect(heap.size).toBe(10);
    heap.push(0);
    expect(heap.size).toBe(11);
    expect(heap.peek()).toBe(0);
  });

  it("can't pop an empty heap", () => {
    const heap = new Heap();
    expect(heap.pop).toThrow();
  });

  it("can use generic objects as values", () => {
    interface KeyValue {
      key: string;
      val: number;
    }
    const heap = new Heap<KeyValue>(
      [
        { key: "Y", val: 2 },
        { key: "X", val: 1 },
        { key: "Z", val: 3 },
      ],
      (a: KeyValue, b: KeyValue) => a.val < b.val
    );

    expect(heap.peek()).toEqual({ key: "X", val: 1 });
    heap.push({ key: "W", val: 0 });
    expect(heap.peek()).toEqual({ key: "W", val: 0 });
    heap.pop();
    heap.pop();
    expect(heap.peek()).toEqual({ key: "Y", val: 2 });
  });
});
