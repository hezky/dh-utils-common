import { assert } from "chai";
import { utilsObject } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("boolean : method checkTypes", () => {
  it("checkTypes ... true", () => {
    const obj1 = {};
    const obj2 = {};
    const obj3 = {};
    assert.isTrue(
      utilsObject.checkTypes(obj1, obj2, obj3),
      "checkTypes({},{},{}) === true"
    );
  });
  it("checkTypes ... throw error", () => {
    const obj1 = {};
    const obj2 = {};
    const obj3 = 2;
    assert.throws(
      function () {
        utilsObject.checkTypes(obj1, obj2, obj3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
