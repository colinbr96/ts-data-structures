import { BinarySearchTree } from "./binarySearchTree";

class AvlTreeNode<T> {
  val: T;
  left: AvlTreeNode<T> | null = null;
  right: AvlTreeNode<T> | null = null;
  balance = 0;

  constructor(val: T) {
    this.val = val;
  }
}

export class AvlTree<T> extends BinarySearchTree<T> {
  root: AvlTreeNode<T> | null = null;

  public insert(val: T): boolean {
    const newNode = new AvlTreeNode(val);

    // If tree is empty, set root to val
    if (this.root === null) {
      this.root = newNode;
      this.size++;
      return true;
    }

    // Traverse the tree, looking for where to insert
    let node = this.root;
    const path: AvlTreeNode<T>[] = [];

    while (true) {
      path.push(node);

      if (val < node.val) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = newNode;
          this.size++;
          break;
        }
      } else if (val > node.val) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = newNode;
          this.size++;
          break;
        }
      } else {
        return false;
      }
    }

    // Travel upwards to find the first unbalanced node
    let unbalancedNode = null;
    for (let i = path.length - 1; i >= 0; i--) {
      node = path[i];
      if (val < node.val) {
        node.balance--;
      } else {
        node.balance++;
      }
      if (Math.abs(node.balance) > 1) {
        unbalancedNode = node;
        break;
      }
    }

    // TODO: Do rotations

    return true;
  }
}
