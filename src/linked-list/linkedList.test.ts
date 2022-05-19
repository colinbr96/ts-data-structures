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
});
