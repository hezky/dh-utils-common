import { assert } from "chai";
import { utilsArray } from "";

describe("array : method equal (items regexp)", () => {
  it("result ... true", () => {
    const a1 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    const a2 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    assert.isTrue(utilsArray.equal(a1, a2), "equal array with regexp");
  });
  it("result ... false", () => {
    const a1 = [/ab+c/, /ab+e/, /ab+e/, /ab+f/];
    const a2 = [/ab+c/, /ab+d/, /ab+e/, /ab+f/];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "does not equal array with regexp"
    );
  });
});
