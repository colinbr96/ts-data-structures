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

  describe("search", () => {
    let trie = new Trie();

    beforeAll(() => {
      trie.insert("tea");
      trie.insert("ted");
      trie.insert("ten");
      trie.insert("inn");
    });

    it("finds an existing word", () => {
      expect(trie.search("tea")).toBe(true);
    });

    it("doesn't find a non-existent word", () => {
      expect(trie.search("te")).toBe(false);
      expect(trie.search("tep")).toBe(false);
      expect(trie.search("teas")).toBe(false);
    });
  });

  describe("startsWith", () => {
    let trie = new Trie();

    beforeAll(() => {
      trie.insert("tea");
      trie.insert("ted");
      trie.insert("ten");
      trie.insert("inn");
    });

    it("finds an existing prefix", () => {
      expect(trie.startsWith("te")).toBe(true);
      expect(trie.startsWith("tea")).toBe(true);
    });

    it("doesn't find a non-existent prefix", () => {
      expect(trie.startsWith("tep")).toBe(false);
    });
  });
});
