import { mergeSort } from "./array";

describe("Array", () => {
  describe("Merge Sort", () => {
    it("sorts an empty array", () => {
      expect(mergeSort([])).toEqual([]);
    });

    it("sorts 10 items", () => {
      expect(mergeSort([8, 4, 6, 9, 1, 2, 5, 3, 10, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("sorts 1000 items", () => {
      const unsorted: number[] = [];
      for (let i = 0; i < 1000; i++) {
        unsorted.push(Math.floor(Math.random() * 1000));
      }
      expect(mergeSort(unsorted)).toEqual(unsorted.sort((a, b) => a - b));
    });

    it("sorts duplicate items", () => {
      expect(mergeSort([2, 3, 1, 4, 5, 3, 4, 2, 5, 1])).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
    });
  });
});
