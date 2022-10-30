import { assert } from "chai";
import { utilsString } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";
import checkTypes from "utils/checkTypes";

describe("utils : checkTypes", () => {
  it("checkTypes ... true", () => {
    const str1 = "A";
    const str2 = "B";
    const str3 = "C";
    assert.isTrue(
      checkTypes([str1, str2, str3], utilsString.is),
      'checkTypes("A","B","C", fceIs) === true'
    );
  });
  it("checkTypes ... throw error", () => {
    const str1 = "A";
    const str2 = "B";
    const str3 = 2;
    assert.throws(
      function () {
        utilsString.checkTypes([str1, str2, str3], utilsString.is);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
