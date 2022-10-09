import { BinarySearchTree } from "./binarySearchTree";

describe("Binary Search Tree", () => {
  it("constructs", () => {
    const bst = new BinarySearchTree();
    expect(bst.root).toBe(null);
    expect(bst.size).toBe(0);
  });

  describe("insert", () => {
    it("inserts several values", () => {
      const bst = new BinarySearchTree();
      expect(bst.insert(8)).toBe(true);
      expect(bst.insert(3)).toBe(true);
      expect(bst.insert(10)).toBe(true);
      expect(bst.insert(14)).toBe(true);
      expect(bst.insert(6)).toBe(true);
      expect(bst.insert(4)).toBe(true);
      expect(bst.insert(1)).toBe(true);
      expect(bst.insert(13)).toBe(true);
      expect(bst.insert(7)).toBe(true);

      expect(bst.size).toBe(9);
      expect(bst.root?.val).toBe(8);
      expect(bst.root?.left?.val).toBe(3);
      expect(bst.root?.left?.left?.val).toBe(1);
      expect(bst.root?.left?.right?.val).toBe(6);
      expect(bst.root?.right?.val).toBe(10);
      expect(bst.root?.right?.left).toBe(null);
      expect(bst.root?.right?.right?.val).toBe(14);
    });

    it("doesn't insert duplicates", () => {
      const bst = new BinarySearchTree();
      expect(bst.insert(8)).toBe(true);
      expect(bst.insert(3)).toBe(true);
      expect(bst.insert(10)).toBe(true);
      expect(bst.insert(10)).toBe(false);
      expect(bst.insert(3)).toBe(false);
      expect(bst.insert(8)).toBe(false);
    });
  });

  describe("search", () => {
    const bst = new BinarySearchTree();

    beforeAll(() => {
      for (const i of [8, 3, 10, 14, 6, 4, 1, 13, 7]) {
        bst.insert(i);
      }
    });

    it("finds existing values", () => {
      expect(bst.search(8)).toBe(true);
      expect(bst.search(4)).toBe(true);
      expect(bst.search(10)).toBe(true);
      expect(bst.search(13)).toBe(true);
    });

    it("doesn't find non-existent values", () => {
      expect(bst.search(2)).toBe(false);
      expect(bst.search(9)).toBe(false);
      expect(bst.search(12)).toBe(false);
      expect(bst.search(5)).toBe(false);
    });
  });
});
