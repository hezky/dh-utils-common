import { assert } from "chai";
import { utilsBoolean } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("boolean : method checkTypes", () => {
  it("result ... true", () => {
    const bool1 = true;
    const bool2 = false;
    const bool3 = true;
    assert.isTrue(
      utilsBoolean.checkTypes(bool1, bool2, bool3),
      "checkTypes(true,false,true) === true"
    );
  });
  it("result ... throw error", () => {
    const bool1 = true;
    const bool2 = false;
    const bool3 = 2;
    assert.throws(
      function () {
        utilsBoolean.checkTypes(bool1, bool2, bool3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
