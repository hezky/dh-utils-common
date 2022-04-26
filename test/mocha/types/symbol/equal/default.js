import { assert } from "chai";
import { utilsSymbol } from "";

describe("symbol : method equal", () => {
  it("equal : true", () => {
    const a = Symbol("a");
    const b = a;
    assert.isTrue(utilsSymbol.equal(a, b), "equal(symbol,symbol) === true");
    assert.isTrue(
      utilsSymbol.equal(Symbol.for("abc"), Symbol.for("abc")),
      'equal(Symbol.for("abc"),Symbol.for("abc")) === true'
    );
  });

  it("equal : false", () => {
    assert.isFalse(
      utilsSymbol.equal(Symbol("a"), Symbol("a")),
      "equal(symbol,symbol) === false"
    );
    assert.isFalse(
      utilsSymbol.equal(Symbol(), Symbol()),
      "equal(symbol,symbol) === false"
    );
  });
});
