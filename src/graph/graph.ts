import { Queue } from "../queue/queue";

export class GraphNode<T> {
  val: T;
  adjacentNodes: GraphNode<T>[];

  constructor(val: T, adjacentNodes: GraphNode<T>[] = []) {
    this.val = val;
    this.adjacentNodes = adjacentNodes;
  }
}

/**
 * Directed, unweighted graph
 */
export class Graph<T> {
  nodes: GraphNode<T>[];

  constructor(nodes: GraphNode<T>[] = []) {
    this.nodes = nodes;
  }

  static fromAdjacencyList(adjacencyList: { [key: string]: string[] }): Graph<string> {
    const nodes = new Map<string, GraphNode<string>>();
    for (const [key, adjacentKeys] of Object.entries(adjacencyList)) {
      const node = new GraphNode(key);
      nodes.set(key, node);
      for (const adjacentKey of adjacentKeys) {
        node.adjacentNodes.push(nodes.get(adjacentKey) || new GraphNode(adjacentKey));
      }
    }
    return new Graph(Array.from(nodes.values()));
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
    const queue = new Queue(startingNode || this.nodes[0]);
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
