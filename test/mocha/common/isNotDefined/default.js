import { assert } from "chai";
import { isNotDefined } from "";

describe("common : method isNotDefined", () => {
  it("isNotDefined ... false", () => {
    assert.isFalse(isNotDefined([]), "isNotDefined([]) === false");
    assert.isFalse(isNotDefined([1, 2, 3]), "isNotDefined([1,2,3]) === false");
    assert.isFalse(
      isNotDefined(new Array()),
      "isNotDefined(new Array()) === false"
    );
    assert.isFalse(isNotDefined(true), "isNotDefined(true) === false");
    assert.isFalse(isNotDefined(false), "isNotDefined(false) === false");
    assert.isFalse(
      isNotDefined(new Date("1995-12-17T03:24:00")),
      "isNotDefined(new Date('1995-12-17T03:24:00')) === false"
    );
    assert.isFalse(
      isNotDefined(() => 1),
      "isNotDefined(() => 1) === false"
    );
    assert.isFalse(isNotDefined(3), "isNotDefined(3) === false");
    assert.isFalse(isNotDefined({}), "isNotDefined({}) === false");
    assert.isFalse(isNotDefined(/ab+c/), "isNotDefined(/ab+c/) === false");
    assert.isFalse(isNotDefined("ABC"), "isNotDefined('ABC') === false");
    assert.isFalse(isNotDefined("true"), "isNotDefined('true') === false");
    assert.isFalse(isNotDefined(Symbol()), "isNotDefined(Symbol()) === false");
    assert.isFalse(
      isNotDefined(Symbol(42)),
      "isNotDefined(Symbol(42)) === false"
    );
    assert.isFalse(
      isNotDefined(Symbol("foo")),
      "isNotDefined(Symbol('foo')) === false"
    );
    assert.isFalse(isNotDefined(NaN), "isNotDefined(NaN) === false");
  });
  it("isNotDefined ... true", () => {
    assert.isTrue(isNotDefined(null), "isNotDefined(null) === true");
    assert.isTrue(isNotDefined(undefined), "isNotDefined(undefined) === true");
    assert.isTrue(isNotDefined(), "isNotDefined() === true");
  });
});
