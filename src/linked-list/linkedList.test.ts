import { LinkedList, ListNode } from "./linkedList";

describe("Linked List", () => {
  describe("Constructing", () => {
    it("constructs", () => {
      const list = new LinkedList();
      expect(list.head).toBe(null);
    });

    it("constructs with head node param", () => {
      const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));
      expect(list.head?.val).toBe(1);
      expect(list.head?.next?.val).toBe(2);
      expect(list.head?.next?.next?.val).toBe(3);
      expect(list.head?.next?.next?.next).toBe(null);
    });

    it("constructs from an array", () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      expect(list.head?.val).toBe(1);
      expect(list.head?.next?.val).toBe(2);
      expect(list.head?.next?.next?.val).toBe(3);
      expect(list.head?.next?.next?.next).toBe(null);
    });
  });

  describe("toArray", () => {
    it("returns empty list as empty array", () => {
      const list = new LinkedList();
      expect(list.toArray()).toEqual([]);
    });

    it("returns list as array", () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe("toString", () => {
    it('returns "null" for empty list', () => {
      expect(new LinkedList().toString()).toBe("null");
    });

    it("returns diagram for 1 item list", () => {
      expect(LinkedList.fromArray([1]).toString()).toBe("1 -> null");
    });

    it("returns diagram for 3 item list", () => {
      expect(LinkedList.fromArray([1, 2, 3]).toString()).toBe("1 -> 2 -> 3 -> null");
    });
  });

  describe("removeFirstOccurrence", () => {
    it("returns false for empty list", () => {
      const list = new LinkedList();
      expect(list.removeFirstOccurrence(1)).toBe(false);
      expect(list.toArray()).toEqual([]);
    });

    it("removes single node", () => {
      const list = new LinkedList(new ListNode(1));
      expect(list.removeFirstOccurrence(1)).toBe(true);
      expect(list.toArray()).toEqual([]);
    });

    it("removes head node", () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      expect(list.removeFirstOccurrence(1)).toBe(true);
      expect(list.toArray()).toEqual([2, 3]);
    });

    it("removes node in the middle of the list", () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      expect(list.removeFirstOccurrence(2)).toBe(true);
      expect(list.toArray()).toEqual([1, 3]);
    });

    it("removes tail node", () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      expect(list.removeFirstOccurrence(3)).toBe(true);
      expect(list.toArray()).toEqual([1, 2]);
    });

    it("returns false with no match", () => {
      const list = LinkedList.fromArray([1, 2, 3]);
      expect(list.removeFirstOccurrence(4)).toBe(false);
      expect(list.toArray()).toEqual([1, 2, 3]);
    });

    it("only removes first occurrence", () => {
      const list = LinkedList.fromArray([1, 1, 1]);
      expect(list.removeFirstOccurrence(1)).toBe(true);
      expect(list.toArray()).toEqual([1, 1]);
    });

    it("handles undefined as search value", () => {
      const list = LinkedList.fromArray([]);
      expect(list.removeFirstOccurrence(undefined)).toBe(false);
      expect(list.toArray()).toEqual([]);
    });
  });
});
