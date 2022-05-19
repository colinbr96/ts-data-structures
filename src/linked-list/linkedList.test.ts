import { LinkedList, ListNode } from "./linkedList";

describe("Linked List", () => {
  it("constructs", () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
  });

  it("constructs with head node param", () => {
    const list = new LinkedList(
      new ListNode(1, new ListNode(2, new ListNode(3)))
    );
    expect(list.head?.val).toBe(1);
    expect(list.head?.next?.val).toBe(2);
    expect(list.head?.next?.next?.val).toBe(3);
  });

  it("constructs from an array", () => {
    const list = LinkedList.fromArray([1, 2, 3]);
    expect(list.head?.val).toBe(1);
    expect(list.head?.next?.val).toBe(2);
    expect(list.head?.next?.next?.val).toBe(3);
  });
});
