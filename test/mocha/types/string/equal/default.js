import { assert } from "chai";
import { utilsString } from "";

describe("string : method equal", () => {
  it("equal : true", () => {
    assert.isTrue(utilsString.equal("ABC", "ABC"), "equal(ABC,ABC) === true");
  });
  it("equal : false", () => {
    assert.isFalse(utilsString.equal("ABC", "XYZ"), "equal(ABC,XYZ) === false");
  });
});
