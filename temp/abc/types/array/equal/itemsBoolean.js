import { assert } from "chai";
import { utilsArray } from "";

describe("array : method equal (items boolean)", () => {
  it("result ... true", () => {
    const a1 = [true, false];
    const a2 = [true, false];
    assert.isTrue(
      utilsArray.equal(a1, a2),
      "equal([true, false],[true, false]) === true (boolean)"
    );
  });

  it("result ... false", () => {
    const a1 = [true, false];
    const a2 = [true, true];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "equal([true, false],[true, true]) === false (boolean)"
    );
  });
});
