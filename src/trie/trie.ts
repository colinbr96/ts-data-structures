export class TrieNode {
  val: string | null;
  children: Record<string, TrieNode> = {};
  end: string | null = null;

  constructor(val?: string) {
    this.val = val ?? null;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let curr = this.root;
    for (const ch of word) {
      if (!curr.children[ch]) {
        curr.children[ch] = new TrieNode(ch);
      }
      curr = curr.children[ch];
    }
    curr.end = word;
  }

  search(word: string) {
    let curr = this.root;
    for (const ch of word) {
      if (!curr.children[ch]) {
        return false;
      }
      curr = curr.children[ch];
    }
    return curr.end !== null;
  }

  startsWith(prefix: string) {
    let curr = this.root;
    for (const ch of prefix) {
      if (!curr.children[ch]) {
        return false;
      }
      curr = curr.children[ch];
    }
    return true;
  }
}
