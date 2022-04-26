import { assert } from "chai";
import { utilsSymbol } from "";

describe("symbol : method copy", () => {
  it("copy", () => {
    const a = Symbol("a");
    const b = utilsSymbol.copy(a);
    assert.isFalse(a === b, "copy(a) !== a");
  });
});
