import { assert } from "chai";
import { utilsFunction } from "";
import { TYPE_ERROR_MESSAGE } from "common/constants";

describe("function : method checkTypes", () => {
  it("result ... true", () => {
    const function1 = function () {};
    const function2 = function () {};
    const function3 = function () {};
    assert.isTrue(
      utilsFunction.checkTypes(function1, function2, function3),
      "checkTypes(function, function, function) === true"
    );
  });
  it("result ... throw error", () => {
    const function1 = function () {};
    const function2 = function () {};
    const function3 = 2;
    assert.throws(
      function () {
        utilsFunction.checkTypes(function1, function2, function3);
      },
      Error,
      TYPE_ERROR_MESSAGE
    );
  });
});
