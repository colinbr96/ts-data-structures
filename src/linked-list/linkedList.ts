class ListNode {
  val: any = null;
  next: ListNode | null = null;

  constructor(val: any, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode | null = null;

  constructor(head: ListNode | null = null) {
    this.head = head;
  }

  static fromArray(arr: any[]) {
    const linkedList = new LinkedList();
    let curr: ListNode | null = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      const temp: ListNode = new ListNode(arr[i], curr);
      curr = temp;
    }
    linkedList.head = curr;
    return linkedList;
  }

  /**
   * Removes the first node that matches the given value
   * @returns Whether the value was found
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
