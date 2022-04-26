import { assert } from "chai";
import { determineName } from "";

describe("common : method determineName", () => {
  it("determineName array", () => {
    assert.equal(determineName([]), "array", "determineName([]) === array");
    assert.equal(
      determineName([1, 2, 3]),
      "array",
      "determineName([1, 2, 3]) === array"
    );
  });

  it("determineName boolean", () => {
    assert.equal(
      determineName(true),
      "boolean",
      "determineName(true) === boolean"
    );
    assert.equal(
      determineName(false),
      "boolean",
      "determineName(false) === boolean"
    );
  });

  it("determineName date", () => {
    assert.equal(
      determineName(new Date("1995-12-17T03:24:00")),
      "date",
      'determineName(new Date("1995-12-17T03:24:00")) === date'
    );
  });

  it("determineName function", () => {
    assert.equal(
      determineName(function () {}),
      "function",
      "determineName(function () {}) === function"
    );
    assert.equal(
      determineName(() => {}),
      "function",
      "determineName(() => {}) === function"
    );
  });

  it("determineName null", () => {
    assert.equal(determineName(null), "null", "determineName(null) === null");
  });

  it("determineName number", () => {
    assert.equal(determineName(2), "number", "determineName(2) === number");
    assert.equal(
      determineName(3.14),
      "number",
      "determineName(3.14) === number"
    );
  });

  it("determineName object", () => {
    assert.equal(determineName({}), "object", "determineName({}) === object");
    assert.equal(
      determineName({ a: 1 }),
      "object",
      "determineName({ a: 1 }) === object"
    );
  });

  it("determineName regExp", () => {
    assert.equal(
      determineName(/ab+c/),
      "regExp",
      "determineName(/ab+c/) === regExp"
    );
  });

  it("determineName string", () => {
    assert.equal(
      determineName("abcd"),
      "string",
      'determineName("abcd") === string'
    );
    assert.equal(determineName(""), "string", 'determineName("") === string');
  });

  it("determineName symbol", () => {
    assert.equal(
      determineName(Symbol()),
      "symbol",
      "determineName(Symbol()) === symbol"
    );
  });

  it("determineName undefined", () => {
    assert.equal(
      determineName(undefined),
      "undefined",
      "determineName(undefined) === undefined"
    );
    assert.equal(determineName(), "undefined", "determineName() === undefined");
  });
});
