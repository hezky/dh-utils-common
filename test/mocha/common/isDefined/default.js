import { assert } from "chai";
import { isDefined } from "";

describe("common : method isDefined", () => {
  it("isDefined ... true", () => {
    assert.isTrue(isDefined([]), "isDefined([]) === true");
    assert.isTrue(isDefined([1, 2, 3]), "isDefined([1,2,3]) === true");
    assert.isTrue(isDefined(new Array()), "isDefined(new Array()) === true");
    assert.isTrue(isDefined(true), "isDefined(true) === true");
    assert.isTrue(isDefined(false), "isDefined(false) === true");
    assert.isTrue(
      isDefined(new Date("1995-12-17T03:24:00")),
      "isDefined(new Date('1995-12-17T03:24:00')) === true"
    );
    assert.isTrue(
      isDefined(() => 1),
      "isDefined(() => 1) === true"
    );
    assert.isTrue(isDefined(3), "isDefined(3) === true");
    assert.isTrue(isDefined({}), "isDefined({}) === true");
    assert.isTrue(isDefined(/ab+c/), "isDefined(/ab+c/) === true");
    assert.isTrue(isDefined("ABC"), "isDefined('ABC') === true");
    assert.isTrue(isDefined("true"), "isDefined('true') === true");
    assert.isTrue(isDefined(Symbol()), "isDefined(Symbol()) === true");
    assert.isTrue(isDefined(Symbol(42)), "isDefined(Symbol(42)) === true");
    assert.isTrue(
      isDefined(Symbol("foo")),
      "isDefined(Symbol('foo')) === true"
    );
    assert.isTrue(isDefined(NaN), "isDefined(NaN) === true");
  });
  it("isDefined ... false", () => {
    assert.isFalse(isDefined(null), "isDefined(null) === false");
    assert.isFalse(isDefined(undefined), "isDefined(undefined) === false");
    assert.isFalse(isDefined(), "isDefined() === false");
  });
});
