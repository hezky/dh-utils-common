import { assert } from "chai";
import { utilsBigInt } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("bigInt : method checkTypes", () => {
  it("checkTypes ... true", () => {
    const num1 = 1n;
    const num2 = 2n;
    const num3 = 3n;
    assert.isTrue(
      utilsBigInt.checkTypes(num1, num2, num3),
      "checkTypes(1, 2, 3) === true"
    );
  });
  it("checkTypes ... throw error", () => {
    const num1 = 1n;
    const num2 = 2n;
    const num3 = {};
    assert.throws(
      function () {
        utilsBigInt.checkTypes(num1, num2, num3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
