export class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null;

  constructor(head: ListNode<T> | null = null) {
    this.head = head;
  }

  static fromArray<T>(arr: T[]): LinkedList<T> {
    let curr: ListNode<T> | null = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      const temp: ListNode<T> = new ListNode(arr[i], curr);
      curr = temp;
    }
    return new LinkedList(curr);
  }

  toArray(): T[] {
    const arr: T[] = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  /**
   * Removes the first node that matches the given value
   * @returns Whether the node was found and removed
   */
  removeFirstOccurrence(val: T): boolean {
    let curr = this.head;
    if (curr && curr.val === val) {
      this.head = curr.next || null;
      return true;
    }
    while (curr?.next) {
      if (curr.next.val === val) {
        curr.next = curr.next.next;
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  reverse() {
    if (!this.head || !this.head.next) return;

    let prev: ListNode<T> | null = null;
    let curr: ListNode<T> | null = this.head;

    while (curr) {
      const next: ListNode<T> | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  toString(): string {
    let s = "";
    let curr = this.head;
    while (curr) {
      s += `${curr.val} -> `;
      curr = curr.next;
    }
    s += "null";
    return s;
  }
}
