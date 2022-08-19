import { binaryInsert, binarySearch, iterativeMergeSort, mergeSort } from "./array";

describe("Array", () => {
  describe("Merge Sort", () => {
    it("sorts an empty array", () => {
      expect(mergeSort([])).toEqual([]);
    });

    it("sorts 1 item", () => {
      expect(mergeSort([1])).toEqual([1]);
    });

    it("sorts 10 items", () => {
      expect(mergeSort([8, 4, 6, 9, 1, 2, 5, 3, 10, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("sorts non-sequential items", () => {
      expect(mergeSort([12, 78, 56, 5, 75, 74, 69, 55, 26, 71])).toEqual([
        5, 12, 26, 55, 56, 69, 71, 74, 75, 78,
      ]);
    });

    it("sorts duplicate items", () => {
      expect(mergeSort([2, 3, 1, 4, 5, 3, 4, 2, 5, 1])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
  });

  describe("Iterative Merge Sort", () => {
    it("sorts an empty array", () => {
      expect(iterativeMergeSort([])).toEqual([]);
    });

    it("sorts 1 item", () => {
      expect(iterativeMergeSort([1])).toEqual([1]);
    });

    it("sorts 10 items", () => {
      expect(iterativeMergeSort([8, 4, 6, 9, 1, 2, 5, 3, 10, 7])).toEqual([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ]);
    });

    it("sorts non-sequential items", () => {
      expect(iterativeMergeSort([12, 78, 56, 5, 75, 74, 69, 55, 26, 71])).toEqual([
        5, 12, 26, 55, 56, 69, 71, 74, 75, 78,
      ]);
    });

    it("sorts duplicate items", () => {
      expect(iterativeMergeSort([2, 3, 1, 4, 5, 3, 4, 2, 5, 1])).toEqual([
        1, 1, 2, 2, 3, 3, 4, 4, 5, 5,
      ]);
    });
  });

  describe("Binary Search", () => {
    it("searches an empty array", () => {
      expect(binarySearch([], 1)).toBe(-1);
    });

    it("finds an existent value in an odd-count array", () => {
      expect(binarySearch([10, 11, 16, 29, 32, 57, 67, 68, 85], 29)).toBe(3);
    });

    it("finds an existent value in an even-count array", () => {
      expect(binarySearch([15, 25, 39, 42, 53, 54, 61, 72, 88, 94], 94)).toBe(9);
    });

    it("doesn't find a non-existent value in an odd-count array", () => {
      expect(binarySearch([10, 11, 16, 29, 32, 57, 67, 68, 85], 17)).toBe(-1);
    });

    it("doesn't find a non-existent value in an even-count array", () => {
      expect(binarySearch([15, 25, 39, 42, 53, 54, 61, 72, 88, 94], 63)).toBe(-1);
    });
  });

  describe("Binary Insert", () => {
    it("inserts to an empty array", () => {
      const arr: number[] = [];
      binaryInsert(arr, 5);
      expect(arr).toEqual([5]);
    });

    it("inserts in the middle", () => {
      const arr = [1, 3, 5, 7, 9];
      binaryInsert(arr, 4);
      expect(arr).toEqual([1, 3, 4, 5, 7, 9]);
      binaryInsert(arr, 8);
      expect(arr).toEqual([1, 3, 4, 5, 7, 8, 9]);
      binaryInsert(arr, 2);
      expect(arr).toEqual([1, 2, 3, 4, 5, 7, 8, 9]);
      binaryInsert(arr, 6);
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("inserts at the leftmost index", () => {
      const arr = [1, 3, 5, 7, 9];
      binaryInsert(arr, -1);
      expect(arr).toEqual([-1, 1, 3, 5, 7, 9]);
    });

    it("inserts at the rightmost index", () => {
      const arr = [1, 3, 5, 7, 9];
      binaryInsert(arr, 11);
      expect(arr).toEqual([1, 3, 5, 7, 9, 11]);
    });
  });
});
