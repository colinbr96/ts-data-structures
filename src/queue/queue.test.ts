import { Queue, QueueNode } from "./queue";

describe("Queue", () => {
  describe("Constructing", () => {
    it("constructs", () => {
      const queue = new Queue();
      expect(queue.front).toBe(null);
      expect(queue.back).toBe(null);
    });

    it("constructs with front node param", () => {
      const queue = new Queue(new QueueNode(1, new QueueNode(2, new QueueNode(3))));
      expect(queue.front?.val).toBe(1);
      expect(queue.front?.next?.val).toBe(2);
      expect(queue.front?.next?.next?.val).toBe(3);
      expect(queue.front?.next?.next?.next).toBe(null);
      expect(queue.back?.val).toBe(3);
      expect(queue.back?.next).toBe(null);
    });

    it("constructs from an array", () => {
      const queue = Queue.fromArray([1, 2, 3]);
      expect(queue.front?.val).toBe(1);
      expect(queue.front?.next?.val).toBe(2);
      expect(queue.front?.next?.next?.val).toBe(3);
      expect(queue.front?.next?.next?.next).toBe(null);
      expect(queue.back?.val).toBe(3);
      expect(queue.back?.next).toBe(null);
    });

    it("constructs from an empty array", () => {
      const queue = Queue.fromArray([]);
      expect(queue.front).toBe(null);
      expect(queue.back).toBe(null);
    });
  });

  describe("toArray", () => {
    it("returns empty queue as empty array", () => {
      const queue = new Queue();
      expect(queue.toArray()).toEqual([]);
    });

    it("returns queue as array", () => {
      const queue = Queue.fromArray([1, 2, 3]);
      expect(queue.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe("toString", () => {
    it('returns "null" for empty queue', () => {
      expect(new Queue().toString()).toBe("null");
    });
    it("returns diagram for 1 item queue", () => {
      expect(Queue.fromArray([1]).toString()).toBe("1 -> null");
    });
    it("returns diagram for 3 item queue", () => {
      expect(Queue.fromArray([1, 2, 3]).toString()).toBe("1 -> 2 -> 3 -> null");
    });
  });

  describe("enqueue", () => {
    it("enqueues to an empty queue", () => {
      const queue = new Queue();
      queue.enqueue(1);
      expect(queue.toArray()).toEqual([1]);
      expect(queue.front?.val).toBe(1);
      expect(queue.back?.val).toBe(1);
    });

    it("enqueues to a 1 item queue", () => {
      const queue = Queue.fromArray([1]);
      queue.enqueue(2);
      expect(queue.toArray()).toEqual([1, 2]);
      expect(queue.front?.val).toBe(1);
      expect(queue.back?.val).toBe(2);
    });
    it("enqueues to a 2 item queue", () => {
      const queue = Queue.fromArray([1, 2]);
      queue.enqueue(3);
      expect(queue.toArray()).toEqual([1, 2, 3]);
      expect(queue.front?.val).toBe(1);
      expect(queue.back?.val).toBe(3);
    });
  });

  describe("dequeue", () => {
    it("throws an error when dequeueing an empty queue", () => {
      const queue = new Queue();
      expect(() => queue.dequeue()).toThrow();
    });

    it("dequeues from a 1 item queue", () => {
      const queue = Queue.fromArray([1]);
      queue.dequeue();
      expect(queue.toArray()).toEqual([]);
      expect(queue.front).toBe(null);
      expect(queue.back).toBe(null);
    });
    it("dequeues from a 4 item queue", () => {
      const queue = Queue.fromArray([1, 2, 3, 4]);
      queue.dequeue();
      expect(queue.toArray()).toEqual([2, 3, 4]);
      expect(queue.front?.val).toBe(2);
      expect(queue.back?.val).toBe(4);
    });
  });

  describe("isEmpty", () => {
    it("returns true for empty queue", () => {
      const queue = new Queue();
      expect(queue.isEmpty()).toBe(true);
    });

    it("returns false for non-empty queue", () => {
      const queue = Queue.fromArray([1, 2, 3]);
      expect(queue.isEmpty()).toBe(false);
    });
  });
});
