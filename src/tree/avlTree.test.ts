import { AvlTree } from "./avlTree";

describe("AVL Tree", () => {
  it("debugging", () => {
    const avlTree = new AvlTree();
    avlTree.insert(8);
    avlTree.insert(3);
    avlTree.insert(10);
    avlTree.insert(14);
    avlTree.insert(6);
    avlTree.insert(4);
  });
});
