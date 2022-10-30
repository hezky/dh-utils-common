import { assert } from "chai";
import { utilsNumber } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("number : method checkTypes", () => {
  it("checkTypes ... true", () => {
    const num1 = 1;
    const num2 = 2;
    const num3 = 3;
    assert.isTrue(
      utilsNumber.checkTypes(num1, num2, num3),
      "checkTypes(1, 2, 3) === true"
    );
  });
  it("checkTypes ... throw error", () => {
    const num1 = 1;
    const num2 = 2;
    const num3 = {};
    assert.throws(
      function () {
        utilsNumber.checkTypes(num1, num2, num3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
