import { assert } from "chai";
import { utilsArray } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("array : method checkTypes", () => {
  it("result ... true", () => {
    const arr1 = ["1", "2", "3", "4"];
    const arr2 = ["1", "2", "3", "4"];
    const arr3 = ["1", "2", "3", "4"];
    assert.isTrue(
      utilsArray.checkTypes(arr1, arr2, arr3),
      "checkTypes(['1','2','3','4'],['1','2','3','4'],['1','2','3','4']) === true"
    );
  });
  it("result ... throw error", () => {
    const arr1 = ["1", "2", "3", "4"];
    const arr2 = ["1", "2", "3", "4"];
    const arr3 = 2;
    assert.throws(
      function () {
        utilsArray.checkTypes(arr1, arr2, arr3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
