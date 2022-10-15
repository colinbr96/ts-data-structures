class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(val: T) {
    this.val = val;
  }
}

export class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;
  size = 0;

  public search(val: T): boolean {
    let node = this.root;
    while (node) {
      if (val < node.val) {
        node = node.left;
      } else if (val > node.val) {
        node = node.right;
      } else {
        return true;
      }
    }
    return !!node;
  }

  /**
   * Inserts the given value in the correct place in the BST
   * Fails if the given value is already in the BST (non-unique)
   * @param val
   * @returns Whether the insertion succeeded
   */
  public insert(val: T): boolean {
    const newNode = new TreeNode(val);

    // If tree is empty, set root to val
    if (this.root === null) {
      this.root = newNode;
      this.size++;
      return true;
    }

    // Traverse the tree, looking for where to insert
    let node = this.root;

    while (true) {
      if (val < node.val) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = newNode;
          this.size++;
          return true;
        }
      } else if (val > node.val) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = newNode;
          this.size++;
          return true;
        }
      } else {
        return false;
      }
    }
  }
}
