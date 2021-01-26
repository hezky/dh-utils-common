import { assert } from "chai";
import { compare, utilsNumber, utilsString } from "";

describe("common : method compare", () => {
  it("compare : simple types === 0", () => {
    assert.equal(compare(null, null), 0, "compare(null,null) === 0");
    let u1, u2;
    assert.equal(compare(u1, u2), 0, "compare(undefined,undefined) === 0");
    assert.equal(compare(0, 0), 0, "compare(0,0) === 0");
    assert.equal(compare(5, 5), 0, "compare(5,5) === 0");
    assert.equal(compare(5.5, 5.5), 0, "compare(5.5,5.5) === 0");
    assert.equal(compare(-32, -32), 0, "compare(-32,-32) === 0");
    assert.equal(compare("a", "a"), 0, 'compare("a","a") === 0');
    assert.equal(compare(false, false), 0, "compare(false,false) === 0");
    assert.equal(compare(true, true), 0, "compare(true,true) === 0");
    const d1 = new Date(2015, 1, 1);
    const d2 = new Date(2015, 1, 1);
    assert.equal(compare(d1, d2), 0, "compare(date,date) === 0");
    assert.equal(compare(/\w+/, /\w+/), 0, "compare(regexp,regexp) === 0");
  });

  it("compare : simple type === -1/1", () => {
    assert.equal(compare(null, 5), -1, "compare(null,5) === -1");
    assert.equal(compare(null, 0), -1, "compare(null,0) === -1");
    assert.equal(compare(undefined, 5), 1, "compare(undefined,5) === -1");
    assert.equal(compare(undefined, 0), 1, "compare(undefined,0) === -1");
    assert.equal(compare(0, 2), -1, "compare(0,2) === -1");
    assert.equal(compare(5, -5), 1, "compare(5,-5) === 1");
    assert.equal(compare(-32, -30), -1, "compare(-32,-30) === -1");
    assert.equal(compare("aa", "ab"), -1, 'compare("aa","ab") === 1');
    assert.equal(compare("ab", "aa"), 1, 'compare("aa","ab") === 1');
    assert.equal(compare(false, true), -1, "compare(false,true) === -1");
    assert.equal(compare(false, 0), -1, "compare(false,0) === -1");
    const d1 = new Date(2015, 1, 2);
    const d2 = new Date(2015, 1, 1);
    assert.equal(compare(d1, d2), 1, "compare(date,date) === 1");
  });

  it("compare : array, object === 0", () => {
    let a1, a2;
    let o1, o2;
    assert.equal(compare([], []), 0, "compare(array,array) === 0");
    a1 = [0, 1, 2, 3, 4];
    a2 = a1;
    assert.equal(compare([], []), 0, "compare(array,array) === 0");
    a1 = [0, 1, 2, 3, 4];
    a2 = [0, 1, 2, 3, 4];
    assert.equal(compare(a1, a2), 0, "compare(array,array) === 0");
    a1 = [0, 1, 2, 3, [0, 1, 2]];
    a2 = [0, 1, 2, 3, [0, 1, 2]];
    assert.equal(compare(a1, a2), 0, "compare(array,array) === 0");
    o1 = { a: 5, b: 1, c: 2 };
    o2 = { a: 5, b: 1, c: 2 };
    assert.equal(compare(o1, o2), 0, "compare(object,object) === 0");
    o1 = { a: 0, b: 1, c: 2 };
    o2 = { c: 2, b: 1, a: 0 };
    assert.equal(compare(o1, o2), 0, "compare(object,object) === 0");
    o1 = { d: { a: 1, b: 1 }, a: 0, b: 1 };
    o2 = { a: 0, b: 1, d: { a: 1, b: 1 } };
    assert.equal(compare(o1, o2), 0, "compare(object,object) === 0");
    a1 = [0, 1, 2, 3, { a: 0, b: 1, c: 2 }];
    a2 = [0, 1, 2, 3, { a: 0, b: 1, c: 2 }];
    assert.equal(compare(a1, a2), 0, "compare(array,array) === 0");
  });

  it("compare : array, object !== 0", () => {
    let a1, a2;
    let o1, o2;
    a1 = [0, 1, 2, 3];
    a2 = [0, 1, 2, 3, 4];
    assert.equal(compare(a1, a2), -1, "compare(array,array) === -1");
    o1 = { a: 0, b: 1, c: 2 };
    o2 = { a: 0, b: 0, c: 2 };
    assert.equal(compare(o1, o2), 1, "compare(object,object) === 1");
    o1 = { d: { a: 2, b: 1 }, a: 0, b: 1 };
    o2 = { a: 0, b: 1, d: { a: 1, b: 1 } };
    assert.equal(compare(o1, o2), 1, "compare(object,object) === 1");
    a1 = [0, 1, 2, 3, { a: 0, b: 1, c: 2 }];
    a2 = [0, 1, 2, 3, { a: 0, b: 3, c: 2 }];
    assert.equal(compare(a1, a2), -1, "compare(array,array) === -1");
  });

  it("compare : throw TypeError Unknown type", () => {
    let f;
    f = function () {
      compare(0, 0, []);
    };
    assert.throws(f, TypeError, "Unknown type");
    f = function () {
      compare(0, 0, [utilsString]);
    };
    assert.throws(f, TypeError, "Unknown type");
    f = function () {
      compare(0, 0, [utilsNumber]);
    };
    assert.doesNotThrow(f, TypeError, "Unknown type");
  });

  it("compare : throw TypeError Specific type", () => {
    const utilsAirplane = {
      _class: "Airplane",
      compare: function (a, b) {
        return a.model.localeCompare(b.model);
      },
      is: function (a) {
        return a.type === "airplane";
      },
    };
    const utilsCar = {
      _class: "Car",
      compare: function (a, b) {
        return a.model.localeCompare(b.model);
      },
      is: function (a) {
        return a.type === "car";
      },
    };
    const ClassAirplane = class Airplane {
      constructor(model) {
        this.type = "airplane";
        this.model = model || "empty";
      }
    };
    const ClassCar = class Car {
      constructor(model) {
        this.type = "car";
        this.model = model || "empty";
      }
    };

    const a = new ClassAirplane("Iljusin");
    const c = new ClassCar("Suzuki");
    const l = [utilsAirplane, utilsCar];

    assert.equal(compare(a, c, l), -1, "compare(airplane,car,list) === -1");

    let c1, c2;
    c1 = new ClassCar("Honda");
    c2 = new ClassCar("Suzuki");
    assert.equal(compare(c1, c2, l), -1, "compare(airplane,car,list) === -1");

    c1 = new ClassCar("Honda");
    c2 = new ClassCar("Honda");
    assert.equal(compare(c1, c2, l), 0, "compare(airplane,car,list) === -1");

    c1 = new ClassAirplane("Honda");
    c2 = new ClassCar("Honda");
    assert.equal(compare(c1, c2, l), -1, "compare(airplane,car,list) === -1");
  });
});
