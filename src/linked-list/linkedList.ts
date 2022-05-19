export class ListNode {
  val: any = null;
  next: ListNode | null = null;

  constructor(val: any, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export class LinkedList {
  head: ListNode | null;

  constructor(head: ListNode | null = null) {
    this.head = head;
  }

  static fromArray(arr: any[]) {
    let curr: ListNode | null = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      const temp: ListNode = new ListNode(arr[i], curr);
      curr = temp;
    }
    return new LinkedList(curr);
  }

  toArray() {
    const arr = [];
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
  removeFirstOccurrence(val: any): boolean {
    if (!this.head) {
      return false;
    }
    if (this.head && this.head.val === val) {
      this.head = this.head.next;
      return true;
    }
    let curr = this.head;
    while (curr.next && curr.next.val !== val) {
      curr = curr.next;
    }
    if (!curr.next) {
      return false;
    }
    curr.next = curr.next?.next || null;
    return true;
  }

  toString() {
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
