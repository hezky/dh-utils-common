import { assert } from "chai";
import { utilsSymbol } from "";

describe("symbol : method compare", () => {
  it("compare : -1", () => {
    const a = Symbol();
    const b = Symbol();
    assert.equal(
      utilsSymbol.compare(a, b),
      -1,
      "compare(symbol, symbol) === -1"
    );
  });
  it("compare : 0", () => {
    const a = Symbol.for("a");
    const b = Symbol.for("a");
    assert.equal(utilsSymbol.compare(a, b), 0, "compare(symbol, symbol) === 0");
  });
});
