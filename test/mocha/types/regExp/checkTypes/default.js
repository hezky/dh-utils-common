import { assert } from "chai";
import { utilsRegExp } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("regExp : method checkTypes", () => {
  it("result ... true", () => {
    const regExp1 = /\w+/;
    const regExp2 = new RegExp(/ab+c/, "i");
    assert.isTrue(
      utilsRegExp.checkTypes(regExp1, regExp2),
      'checkTypes("A","B","C") === true'
    );
  });
  it("result ... throw error", () => {
    const regExp1 = /\w+/;
    const regExp2 = 2;
    assert.throws(
      function () {
        utilsRegExp.checkTypes(regExp1, regExp2);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
