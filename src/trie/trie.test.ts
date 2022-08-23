import { Trie } from "./trie";

describe("Trie", () => {
  it("constructs", () => {
    const trie = new Trie();
    expect(trie.root.val).toBe(null);
  });

  it("inserts the first string", () => {
    const trie = new Trie();
    trie.insert("abcd");
    expect(trie.root.end).toBe(null);
    expect(trie.root.children.a?.val).toBe("a");
    expect(trie.root.children.a?.end).toBe(null);
    expect(trie.root.children.a?.children.b?.val).toBe("b");
    expect(trie.root.children.a?.children.b?.end).toBe(null);
    expect(trie.root.children.a?.children.b?.children.c?.val).toBe("c");
    expect(trie.root.children.a?.children.b?.children.c?.end).toBe(null);
    expect(trie.root.children.a?.children.b?.children.c?.children.d?.val).toBe("d");
    expect(trie.root.children.a?.children.b?.children.c?.children.d?.end).toBe("abcd");
  });
});
