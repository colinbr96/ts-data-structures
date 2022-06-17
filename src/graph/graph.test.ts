import { Graph, GraphNode } from "./graph";

// Mock Data
const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");
const d = new GraphNode("d");
const e = new GraphNode("e");
const f = new GraphNode("f");
a.adjacentNodes.push(b, e, f);
b.adjacentNodes.push(d, e);
c.adjacentNodes.push(b);
d.adjacentNodes.push(c, e);
const MOCK_GRAPH = new Graph([a, b, c, d, e, f]);

// Tests
describe("Graph", () => {
  describe("Constructing", () => {
    it("constructs", () => {
      const graph = new Graph();
      expect(graph.nodes).toEqual([]);
    });

    it("constructs from an adjacency list", () => {
      const graph = Graph.fromAdjacencyList({
        a: ["b", "e", "f"],
        b: ["d", "e"],
        c: ["b"],
        d: ["c", "e"],
        e: [],
        f: [],
      });
      expect(graph.nodes.map((node) => node.val)).toEqual(["a", "b", "c", "d", "e", "f"]);
      expect(graph.nodes[0].adjacentNodes.map((node) => node.val)).toEqual(["b", "e", "f"]);
      expect(graph.nodes[1].adjacentNodes.map((node) => node.val)).toEqual(["d", "e"]);
      expect(graph.nodes[2].adjacentNodes.map((node) => node.val)).toEqual(["b"]);
      expect(graph.nodes[3].adjacentNodes.map((node) => node.val)).toEqual(["c", "e"]);
      expect(graph.nodes[4].adjacentNodes).toEqual([]);
      expect(graph.nodes[5].adjacentNodes).toEqual([]);
    });
  });

  describe("Depth First Search", () => {
    it("searches an empty graph", () => {
      const graph = new Graph();
      const onVisit = jest.fn();
      graph.depthFirstSearch(onVisit);
      expect(onVisit).not.toBeCalled();
    });

    it("searches a more complex graph", () => {
      const onVisit = jest.fn();
      MOCK_GRAPH.depthFirstSearch(onVisit);
      expect(onVisit).toHaveBeenCalledTimes(6);
      expect(onVisit).toHaveBeenNthCalledWith(1, a);
      expect(onVisit).toHaveBeenNthCalledWith(2, b);
      expect(onVisit).toHaveBeenNthCalledWith(3, d);
      expect(onVisit).toHaveBeenNthCalledWith(4, c);
      expect(onVisit).toHaveBeenNthCalledWith(5, e);
      expect(onVisit).toHaveBeenNthCalledWith(6, f);
    });
  });

  describe("Breadth First Search", () => {
    it("searches an empty graph", () => {
      const graph = new Graph();
      const onVisit = jest.fn();
      graph.breadthFirstSearch(onVisit);
      expect(onVisit).not.toBeCalled();
    });

    it("searches a more complex graph", () => {
      const onVisit = jest.fn();
      MOCK_GRAPH.breadthFirstSearch(onVisit);
      expect(onVisit).toHaveBeenCalledTimes(6);
      expect(onVisit).toHaveBeenNthCalledWith(1, a);
      expect(onVisit).toHaveBeenNthCalledWith(2, b);
      expect(onVisit).toHaveBeenNthCalledWith(3, e);
      expect(onVisit).toHaveBeenNthCalledWith(4, f);
      expect(onVisit).toHaveBeenNthCalledWith(5, d);
      expect(onVisit).toHaveBeenNthCalledWith(6, c);
    });
  });
});
