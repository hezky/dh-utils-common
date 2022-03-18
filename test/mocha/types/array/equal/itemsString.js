import { assert } from "chai";
import { utilsArray } from "";

describe("array : method equal (items string)", () => {
  it("result ... true", () => {
    const a1 = ["1", "2", "3", "4"];
    const a2 = ["1", "2", "3", "4"];
    assert.isTrue(
      utilsArray.equal(a1, a2),
      "equal(['1','2','3','4'],['1','2','3','4']) === true"
    );
  });
  it("result ... false", () => {
    const a1 = ["1", "2", "2", "4"];
    const a2 = ["1", "2", "3", "4"];
    assert.isFalse(
      utilsArray.equal(a1, a2),
      "equal(['1','2','2','4'],['1','2','3','4']) === false"
    );
  });
});
