import { assert } from "chai";
import { utilsObject } from "";

describe("object : method compare", () => {
  it("compare : -1", () => {
    assert.equal(
      utilsObject.compare({ prop1: "10" }, { prop2: "10" }),
      -1,
      "utilsObject.compare({prop1: '10'},{prop2: '10'})"
    );
    assert.equal(
      utilsObject.compare({ prop1: "10" }, { prop1: "11" }),
      -1,
      "utilsObject.compare({prop1: '10'},{prop1: '11'}"
    );
    assert.equal(
      utilsObject.compare({ prop1: "10" }, { prop1: "10", prop2: "10" }),
      -1,
      "utilsObject.compare({prop1: '10'},{prop1: '10',prop2: '10'})"
    );
  });
  it("compare : 0", () => {
    const a1 = {},
      b1 = a1;
    assert.equal(utilsObject.compare(a1, b1), 0);
    assert.equal(utilsObject.compare({ prop1: 10 }, { prop1: 10 }), 0);
  });
  it("compare : 1", () => {
    assert.equal(utilsObject.compare({ prop2: "10" }, { prop1: "10" }), 1);
    assert.equal(utilsObject.compare({ prop1: "11" }, { prop1: "10" }), 1);
    assert.equal(
      utilsObject.compare({ prop1: "10", prop2: "10" }, { prop1: "10" }),
      1
    );
  });
});
