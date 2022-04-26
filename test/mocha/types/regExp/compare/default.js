import { assert } from "chai";
import { utilsRegExp } from "";

describe("regExp : method compare", () => {
  it("compare : -1", () => {
    assert.equal(
      utilsRegExp.compare(/a\d+bcd/, /w\d+xyz/),
      -1,
      "compare(regExp, regExp) === -1"
    );
  });
  it("compare : 0", () => {
    assert.equal(
      utilsRegExp.compare(/\d+/, /\d+/),
      0,
      "compare(regExp, regExp) === 0"
    );
  });
  it("compare : 1", () => {
    assert.equal(
      utilsRegExp.compare(/w\d+xyz/, /a\d+bcd/),
      1,
      "compare(regExp, regExp) === 1"
    );
  });
});
