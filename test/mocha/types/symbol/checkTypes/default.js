import { assert } from "chai";
import { utilsSymbol } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("symbol : method checkTypes", () => {
  it("checkTypes ... true", () => {
    const sym1 = Symbol("A");
    const sym2 = Symbol("B");
    const sym3 = Symbol("C");
    assert.isTrue(
      utilsSymbol.checkTypes(sym1, sym2, sym3),
      "checkTypes(symbol,symbol,symbol) === true"
    );
  });
  it("checkTypes ... throw error", () => {
    const sym1 = Symbol("A");
    const sym2 = Symbol("B");
    const sym3 = 2;
    assert.throws(
      function () {
        utilsSymbol.checkTypes(sym1, sym2, sym3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
