import { Queue } from "../queue/queue";

export class GraphNode<T> {
  val: T;
  adjacentNodes: GraphNode<T>[];

  constructor(val: T, adjacentNodes: GraphNode<T>[] = []) {
    this.val = val;
    this.adjacentNodes = adjacentNodes;
  }
}

export class Graph<T> {
  nodes: GraphNode<T>[];

  constructor(nodes: GraphNode<T>[] = []) {
    this.nodes = nodes;
  }

  depthFirstSearch(onVisit: (node: GraphNode<T>) => void, startingNode?: GraphNode<T>): void {
    if (!startingNode && this.nodes.length === 0) {
      return;
    }
    const seen = new Set();
    function dfs(node: GraphNode<T>) {
      onVisit(node);
      seen.add(node);
      for (const adjacentNode of node.adjacentNodes) {
        if (!seen.has(adjacentNode)) {
          dfs(adjacentNode);
        }
      }
    }
    dfs(startingNode || this.nodes[0]);
  }

  breadthFirstSearch(onVisit: (node: GraphNode<T>) => void, startingNode?: GraphNode<T>): void {
    if (!startingNode && this.nodes.length === 0) {
      return;
    }
    const queue: Queue<GraphNode<T>> = Queue.fromArray([startingNode || this.nodes[0]]);
    const seen: Set<GraphNode<T>> = new Set();

    while (!queue.isEmpty()) {
      const next = queue.dequeue();
      onVisit(next);

      for (const adjacentNode of next.adjacentNodes) {
        if (!seen.has(adjacentNode)) {
          seen.add(adjacentNode);
          queue.enqueue(adjacentNode);
        }
      }
    }
  }
}
