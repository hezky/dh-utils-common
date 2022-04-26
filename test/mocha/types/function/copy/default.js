import { assert } from "chai";
import { utilsFunction } from "";

describe("function : method copy", () => {
  it("copy", () => {
    const fceA = function () {
      return "helllooo";
    };
    const fceB = utilsFunction.copy(fceA);
    assert.isTrue(fceA === fceB, "copy");
  });
});
