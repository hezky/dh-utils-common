import { assert } from "chai";
import { utilsNull } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("null : method checkTypes", () => {
  it("result ... true", () => {
    const null1 = null;
    const null2 = null;
    const null3 = null;
    assert.isTrue(
      utilsNull.checkTypes(null1, null2, null3),
      'checkTypes("A","B","C") === true'
    );
  });
  it("result ... throw error", () => {
    const null1 = null;
    const null2 = null;
    const null3 = 2;
    assert.throws(
      function () {
        utilsNull.checkTypes(null1, null2, null3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
