import { assert } from "chai";
import { utilsString } from "";

describe("string : method compare", () => {
  it("compare : -1", () => {
    assert.equal(
      utilsString.compare("ABC", "ZXY"),
      -1,
      "compare(ABC, ZXY) === -1"
    );
  });
  it("compare : 0", () => {
    assert.equal(
      utilsString.compare("ABC", "ABC"),
      0,
      "compare(ABC, ABC) === 0"
    );
  });
  it("compare : 1", () => {
    assert.equal(
      utilsString.compare("ZXY", "ABC"),
      1,
      "compare(ZXY, ABC) === 1"
    );
  });
});
