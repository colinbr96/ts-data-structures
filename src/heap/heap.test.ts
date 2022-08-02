import { Heap } from "./heap";

describe("Heap", () => {
  it("can heapify a min-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9]);
    expect(heap.peek()).toEqual(1);
    expect(heap.heap).toEqual([1, 2, 4, 3, 6, 10, 8, 7, 5, 9]);
  });

  it("can heapify a max-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9], true);
    expect(heap.peek()).toEqual(10);
    expect(heap.heap).toEqual([10, 9, 8, 5, 7, 4, 6, 2, 1, 3]);
  });

  it("can heap-sort a min-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9]);
    expect(heap.popMultiple(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("can heap-sort a max-heap", () => {
    const heap = new Heap([3, 5, 4, 2, 6, 10, 8, 7, 1, 9], true);
    expect(heap.popMultiple(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it("can peek an empty heap", () => {
    const heap = new Heap([]);
    expect(heap.peek()).toBe(null);
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
});
