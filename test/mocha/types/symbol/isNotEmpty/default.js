import { assert } from "chai";
import { utilsSymbol } from "";

describe("symbol : method isNotEmpty", () => {
  it("isNotEmpty : true", () => {
    assert.isTrue(
      utilsSymbol.isNotEmpty(Symbol("A")),
      "isNotEmpty(symbol) === true"
    );
  });
});
