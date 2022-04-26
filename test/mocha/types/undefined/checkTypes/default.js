import { assert } from "chai";
import { utilsUndefined } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("undefined : method checkTypes", () => {
  it("checkTypes : true", () => {
    const undefined1 = undefined;
    const undefined2 = undefined;
    const undefined3 = undefined;
    assert.isTrue(
      utilsUndefined.checkTypes(undefined1, undefined2, undefined3),
      "checkTypes(undefined, undefined, undefined) === true"
    );
  });
  it("checkTypes : throw error", () => {
    const undefined1 = undefined;
    const undefined2 = undefined;
    const undefined3 = 2;
    assert.throws(
      function () {
        utilsUndefined.checkTypes(undefined1, undefined2, undefined3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
