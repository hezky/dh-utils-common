import { assert } from "chai";
import { utilsString } from "";

describe("string : method isEmpty", () => {
  it("isEmpty : true", () => {
    assert.isTrue(utilsString.isEmpty(""));
  });
  it("isEmpty : false", () => {
    assert.isFalse(utilsString.isEmpty("123"));
  });
});
