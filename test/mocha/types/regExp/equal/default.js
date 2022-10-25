import { assert } from "chai";
import { utilsRegExp } from "";

describe("regExp : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(
      utilsRegExp.equal(/\d+/, /\d+/),
      "equal(regExp,regExp) === true"
    );
    assert.isTrue(
      utilsRegExp.equal(new RegExp(/\d+/), /\d+/),
      "equal(regExp,regExp) === true"
    );
  });
  it("equal : false", () => {
    assert.isFalse(
      utilsRegExp.equal(/\d+/, /fooBar/gi),
      "equal(regExp,regExp) === false"
    );
  });
});
