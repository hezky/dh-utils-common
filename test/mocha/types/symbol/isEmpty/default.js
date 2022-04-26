import { assert } from "chai";
import { utilsSymbol } from "";

describe("symbol : method isEmpty", () => {
  it("isEmpty : false", () => {
    assert.isFalse(
      utilsSymbol.isEmpty(Symbol("A")),
      "isEmpty(symbol) === false"
    );
  });
});
