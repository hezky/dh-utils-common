import { assert } from "chai";
import { utilsString } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("string : method checkTypes", () => {
  it("checkTypes ... true", () => {
    const str1 = "A";
    const str2 = "B";
    const str3 = "C";
    assert.isTrue(
      utilsString.checkTypes(str1, str2, str3),
      'checkTypes("A","B","C") === true'
    );
  });
  it("checkTypes ... throw error", () => {
    const str1 = "A";
    const str2 = "B";
    const str3 = 2;
    assert.throws(
      function () {
        utilsString.checkTypes(str1, str2, str3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
