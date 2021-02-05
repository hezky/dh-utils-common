import { assert } from "chai";
import {
  compare,
  compareReferences,
  copy,
  equal,
  isArray,
  isBoolean,
  isDate,
  isDefined,
  isEmpty,
  isFunction,
  isNotArray,
  isNotDefined,
  isNotEmpty,
  isNotNull,
  isNumber,
  isNull,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isUndefined,
  notEqual,
  utilsNumber,
  utilsString,
} from "";

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
    assert.equal(compare(a1, a2), 0, "compare(array,array) === 0");
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
    const _comp = function (a, b) {
      return a.model.localeCompare(b.model);
    };
    const utilsAirplane = {
      _class: "airplane",
      compare: _comp,
      is: function (someAirplane) {
        return someAirplane.type === "airplane";
      },
    };
    const utilsCar = {
      _class: "car",
      compare: _comp,
      is: function (someCar) {
        return someCar.type === "car";
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

describe("compareReferences : method compareReferences", () => {
  it("compareReferences : === 0", () => {
    const a = { prop: 5 };
    const b = a;
    assert.equal(compareReferences(a, b), 0, "compareReferences  0");
  });
  it("compareReferences : !== 0", () => {
    const a = { prop: 5 };
    const b = { prop: 5 };
    assert.equal(compareReferences(a, b), -1, "compareReferences -1");
  });
});

describe("common : method copy", () => {
  it("copy : simple type", () => {
    const a = 5;
    const b = copy(a);
    assert.equal(a, b, "number");
    assert.equal(copy(5), 5, "number");
    assert.equal(copy("5"), "5", "string");
    assert.equal(copy(null), null, "null");
    assert.notStrictEqual(copy("5"), 5, '"5" !== 5');
    assert.notEqual(copy(6), 5, "6 !== 5");
  });
  it("copy : function type", () => {
    const a = (item) => item;
    const b = copy(a);
    assert.equal(a.toString(), b.toString(), "copy function");
  });
  it("copy : object type", () => {
    const a = {};
    const b = copy(a);
    assert.isFalse(a === b, "check reference");
    assert.deepEqual(a, b, "empty object");
    assert.deepEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }, "object");
  });
  it("copy : array type", () => {
    const a = [];
    const b = copy(a);
    assert.isFalse(a === b, "check reference");
    assert.deepEqual(a, b, "empty array");
    assert.deepEqual(copy([1, 2, 3]), [1, 2, 3], "array");
  });
  it("copy : date type", () => {
    const a = new Date(2015, 5, 5);
    const b = copy(a);
    assert.isFalse(a === b, "check reference");
    assert.equal(a.valueOf(), b.valueOf(), "date");
  });
  it("copy : deep copy", () => {
    const a = {
      a: { v: { j: 1, k: 2, l: 3 }, w: () => {}, x: 1, y: 2, z: 3 },
      b: [1, [9, 8, 7], 3, 4],
      c: new Date(2015, 3, 5),
    };
    const b = copy(a);
    assert.isFalse(a === b, "check reference");
    assert.deepEqual(a, b, "deep copy");
  });
  it("copy : throw TypeError Unknown type", () => {
    assert.throws(
      () => {
        copy(0, []);
      },
      TypeError,
      "Unknown type"
    );
    assert.throws(
      () => {
        copy(0, [utilsString]);
      },
      TypeError,
      "Unknown type"
    );
    assert.doesNotThrow(
      () => {
        copy(0, [utilsNumber]);
      },
      TypeError,
      "Unknown type"
    );
  });
});

describe("common : method equal", () => {
  it("equal : simple type true", () => {
    assert.isTrue(equal(null, null), "null === null");
    assert.isTrue(equal(undefined, undefined), "undefined === undefined");
    assert.isTrue(equal(0, 0), "0 === 0");
    assert.isTrue(equal(5, 5), "5 === 5");
    assert.isTrue(equal(5.5, 5.5), "5.5 === 5.5");
    assert.isTrue(equal(-32, -32), "-32 === -32");
    assert.isTrue(equal("ahoj", "ahoj"), '"ahoj" === "ahoj"');
    assert.isTrue(equal(false, false), "false === false");
    assert.isTrue(equal(true, true), "true === true");
    assert.isTrue(
      equal(new Date(2015, 1, 1), new Date(2015, 1, 1)),
      "date === date"
    );
    assert.isTrue(equal(/\w+/, /\w+/), "regExp === regExp");
  });
  it("equal : simple type false", () => {
    assert.isFalse(equal(null, 5));
    assert.isFalse(equal(null, 0));
    assert.isFalse(equal(undefined, 5));
    assert.isFalse(equal(undefined, 0));
    assert.isFalse(equal(0, 2));
    assert.isFalse(equal(5, -5));
    assert.isFalse(equal(-32, -30));
    assert.isFalse(equal("ahoj", "ahj"));
    assert.isFalse(equal(false, true));
    assert.isFalse(equal(false, 0));
    assert.isFalse(equal(new Date(2015, 1, 2), new Date(2015, 1, 1)));
  });
  it("equal : array, object type true", () => {
    assert.isTrue(equal([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]));
    assert.isTrue(equal([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]));
    assert.isTrue(equal([0, 1, 2, 3, [0, 1, 2]], [0, 1, 2, 3, [0, 1, 2]]));
    assert.isTrue(equal({ a: 5, b: 1, c: 2 }, { a: 5, b: 1, c: 2 }));
    assert.isTrue(equal({ a: 0, b: 1, c: 2 }, { c: 2, b: 1, a: 0 }));
    assert.isTrue(
      equal(
        { d: { a: 1, b: 1 }, a: 0, b: 1 },
        { a: 0, b: 1, d: { a: 1, b: 1 } }
      )
    );
    assert.isTrue(
      equal(
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }],
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }]
      )
    );
  });
  it("equal : array, object type false", () => {
    assert.isFalse(equal([0, 1, 2, 3], [0, 1, 2, 3, 4]));
    assert.isFalse(equal({ a: 0, b: 1, c: 2 }, { a: 0, b: 0, c: 2 }));
    assert.isFalse(
      equal(
        { d: { a: 2, b: 1 }, a: 0, b: 1 },
        { a: 0, b: 1, d: { a: 1, b: 1 } }
      )
    );
    assert.isFalse(
      equal(
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }],
        [0, 1, 2, 3, { a: 0, b: 3, c: 2 }]
      )
    );
  });
  it("equal throw TypeError Unknown type", () => {
    assert.throws(
      () => {
        equal(0, 0, []);
      },
      TypeError,
      "Unknown type"
    );
    assert.throws(
      () => {
        equal(0, 0, [utilsString]);
      },
      TypeError,
      "Unknown type"
    );
    assert.doesNotThrow(
      () => {
        equal(0, 0, [utilsNumber]);
      },
      TypeError,
      "Unknown type"
    );
  });
});

describe("common : method isArray", () => {
  it("isArray : true", () => {
    assert.isTrue(isArray([]), "isArray true : empty array");
    assert.isTrue(isArray([1, 2, 3]), "isArray true : array");
    assert.isTrue(isArray(new Array()), "isArray true : empty array new");
  });
  it("isArray : false", () => {
    assert.isFalse(isArray(undefined), "");
    assert.isFalse(isArray(null));
    assert.isFalse(isArray("a"));
    assert.isFalse(isArray(3));
    assert.isFalse(isArray({}));
    assert.isFalse(isArray(new Object()));
    assert.isFalse(isArray(() => {}));
    assert.isFalse(isArray(false));
    assert.isFalse(isArray(true));
  });
});

describe("common : method isBoolean", () => {
  it("isBoolean : true", () => {
    assert.isTrue(isBoolean(true));
    assert.isTrue(isBoolean(false));
  });
  it("isBoolean : false", () => {
    assert.isFalse(isBoolean(undefined));
    assert.isFalse(isBoolean(null));
    assert.isFalse(isBoolean("a"));
    assert.isFalse(isBoolean(3));
    assert.isFalse(isBoolean({}));
    assert.isFalse(isBoolean([]));
    assert.isFalse(isBoolean(() => {}));
  });
});

describe("common : method isDate", () => {
  it("isDate : true", () => {
    assert.isTrue(isDate(new Date()));
  });
  it("isDate : false", () => {
    assert.isFalse(isDate(undefined));
    assert.isFalse(isDate(null));
    assert.isFalse(isDate(3));
    assert.isFalse(isDate("a"));
    assert.isFalse(isDate(""));
    assert.isFalse(isDate("11"));
    assert.isFalse(isDate({}));
    assert.isFalse(isDate([]));
    assert.isFalse(isDate(() => {}));
    assert.isFalse(isDate(false));
    assert.isFalse(isDate(true));
  });
});

describe("common : method isDefined", () => {
  it("isDefined : true", () => {
    assert.isFalse(isDefined(null));
    assert.isFalse(isDefined(undefined));
  });
  it("isDefined : false", () => {
    assert.isTrue(isDefined(1));
    assert.isTrue(isDefined(""));
    assert.isTrue(isDefined([]));
    assert.isTrue(isDefined({}));
    assert.isTrue(isDefined(true));
    assert.isTrue(isDefined(false));
    assert.isTrue(isDefined(() => {}));
  });
});

describe("common : method isEmpty", () => {
  it("isEmpty : true", () => {
    assert.isTrue(isEmpty(null));
    assert.isTrue(isEmpty(undefined));
    assert.isTrue(isEmpty([]));
    assert.isTrue(isEmpty(new Array()));
    assert.isTrue(isEmpty({}));
    assert.isTrue(isEmpty(new Object()));
    assert.isTrue(isEmpty(""));
  });
  it("isEmpty : false", () => {
    assert.isFalse(isEmpty([1, 2]));
    assert.isFalse(isEmpty(new Array(1, 2)));
    assert.isFalse(isEmpty({ prop: "1" }));
    assert.isFalse(isEmpty("ahoj"));
    assert.isFalse(isEmpty(5));
    assert.isFalse(isEmpty(true));
    assert.isFalse(isEmpty(0));
    assert.isFalse(isEmpty(false));
    assert.isFalse(isEmpty(new Date(2020, 5, 5)));
  });
});

describe("common : method isFunction", () => {
  it("isFunction : true", () => {
    const test = function () {};
    assert.isTrue(isFunction(test));
  });
  it("isFunction : false", () => {
    assert.isFalse(isFunction(undefined));
    assert.isFalse(isFunction(null));
    assert.isFalse(isFunction("a"));
    assert.isFalse(isFunction(3));
    assert.isFalse(isFunction({}));
    assert.isFalse(isFunction(new Object()));
    assert.isFalse(isFunction([]));
    assert.isFalse(isFunction(new Array()));
    assert.isFalse(isFunction(false));
    assert.isFalse(isFunction(true));
  });
});

describe("common : method isNotArray", () => {
  it("isNotArray : true", () => {
    assert.isTrue(isNotArray({}));
    assert.isTrue(isNotArray(null));
  });
  it("isNotArray : false", () => {
    assert.isFalse(isNotArray([]));
    assert.isFalse(isNotArray([1, 2, 3, 4]));
  });
});

describe("common : method isNotDefined", () => {
  it("isNotDefined : true", () => {
    assert.isTrue(isNotDefined(null));
    assert.isTrue(isNotDefined(undefined));
  });
  it("isNotDefined : false", () => {
    assert.isFalse(isNotDefined(1));
    assert.isFalse(isNotDefined(""));
    assert.isFalse(isNotDefined([]));
    assert.isFalse(isNotDefined({}));
    assert.isFalse(isNotDefined(true));
    assert.isFalse(isNotDefined(false));
    assert.isFalse(isNotDefined(() => {}));
  });
});

describe("common : method isNotEmpty", () => {
  it("isNotEmpty : false", () => {
    assert.isFalse(isNotEmpty(null));
    assert.isFalse(isNotEmpty(undefined));
    assert.isFalse(isNotEmpty([]));
    assert.isFalse(isNotEmpty(new Array()));
    assert.isFalse(isNotEmpty({}));
    assert.isFalse(isNotEmpty(new Object()));
    assert.isFalse(isNotEmpty(""));
  });
  it("isNotEmpty : true", () => {
    assert.isTrue(isNotEmpty([1, 2]));
    assert.isTrue(isNotEmpty(new Array(1, 2)));
    assert.isTrue(isNotEmpty({ prop: "1" }));
    assert.isTrue(isNotEmpty("ahoj"));
    assert.isTrue(isNotEmpty(5));
    assert.isTrue(isNotEmpty(true));
    assert.isTrue(isNotEmpty(0));
    assert.isTrue(isNotEmpty(false));
  });
});

describe("common : method isNotNull", () => {
  it("isNotNull : false", () => {
    assert.isFalse(isNotNull(null));
  });
  it("isNotNull : true", () => {
    assert.isTrue(isNotNull(undefined));
    assert.isTrue(isNotNull(""));
    assert.isTrue(isNotNull(true));
    assert.isTrue(isNotNull(false));
    assert.isTrue(isNotNull({}));
    assert.isTrue(isNotNull([]));
    assert.isTrue(isNotNull(0));
    assert.isTrue(isNotNull(() => {}));
  });
});

describe("common : method isNumber", () => {
  it("isNumber : true", () => {
    assert.isTrue(isNumber(0));
    assert.isTrue(isNumber(3));
    assert.isTrue(isNumber(3.14));
    assert.isTrue(isNumber(0x11));
    assert.isTrue(isNumber(0b11));
    assert.isTrue(isNumber(0o11));
  });
  it("isNumber : false", () => {
    assert.isFalse(isNumber(undefined));
    assert.isFalse(isNumber(null));
    assert.isFalse(isNumber("a"));
    assert.isFalse(isNumber(""));
    assert.isFalse(isNumber("11"));
    assert.isFalse(isNumber({}));
    assert.isFalse(isNumber([]));
    assert.isFalse(isNumber(() => {}));
    assert.isFalse(isNumber(false));
    assert.isFalse(isNumber(true));
  });
});

describe("common : method isNull", () => {
  it("isNull : true", () => {
    assert.isTrue(isNull(null));
  });
  it("isNull : false", () => {
    assert.isFalse(isNull(undefined));
    assert.isFalse(isNull(""));
    assert.isFalse(isNull(true));
    assert.isFalse(isNull(false));
    assert.isFalse(isNull({}));
    assert.isFalse(isNull([]));
    assert.isFalse(isNull(0));
    assert.isFalse(isNull(() => {}));
  });
});

describe("common : method isObject", () => {
  it("isObject : true", () => {
    class ClassA {
      render() {}
    }
    let objectA = new ClassA();
    assert.isTrue(isObject(objectA));
    assert.isTrue(isObject(new Date()));
    assert.isTrue(isObject({}));
    assert.isTrue(isObject(new Object()));
    assert.isTrue(isObject({ a: "xxx" }));
    assert.isTrue(isObject({ a: "xxx" }));
  });
  it("isObject : false", () => {
    assert.isFalse(isObject(undefined));
    assert.isFalse(isObject(null));
    assert.isFalse(isObject("a"));
    assert.isFalse(isObject(3));
    assert.isFalse(isObject([]));
    assert.isFalse(isObject(new Array()));
    assert.isFalse(isObject(false));
    assert.isFalse(isObject(true));
    assert.isFalse(isObject(function () {}));
  });
});

describe("common : method isPrimitive", () => {
  it("isPrimitive : true", () => {
    assert.isTrue(isPrimitive(""));
    assert.isTrue(isPrimitive(true));
    assert.isTrue(isPrimitive(false));
    assert.isTrue(isPrimitive(0));
  });
  it("isPrimitive : false", () => {
    assert.isFalse(isPrimitive(null));
    assert.isFalse(isPrimitive({}));
    assert.isFalse(isPrimitive([]));
    assert.isFalse(isPrimitive(() => {}));
  });
});

describe("common : method isRegExp", () => {
  it("isRegExp : true", () => {
    assert.isTrue(isRegExp(/ab+c/));
  });
  it("isRegExp : false", () => {
    assert.isFalse(isRegExp(9));
    assert.isFalse(isRegExp("aaa"));
    assert.isFalse(isRegExp([]));
    assert.isFalse(isRegExp(() => {}));
  });
});

describe("common : method isString", () => {
  it("isString : true", () => {
    assert.isTrue(isString(""));
    assert.isTrue(isString("a"));
  });
  it("isString : false", () => {
    assert.isFalse(isBoolean(undefined));
    assert.isFalse(isBoolean(null));
    assert.isFalse(isBoolean(3));
    assert.isFalse(isBoolean({}));
    assert.isFalse(isBoolean([]));
    assert.isFalse(isBoolean(() => {}));
    assert.isFalse(isArray(false));
    assert.isFalse(isArray(true));
  });
});

describe("common : method isUndefined", () => {
  it("isUndefined : true", () => {
    assert.isTrue(isUndefined(undefined));
  });
  it("isUndefined : false", () => {
    assert.isFalse(isUndefined(null));
    assert.isFalse(isUndefined(""));
    assert.isFalse(isUndefined(true));
    assert.isFalse(isUndefined(false));
    assert.isFalse(isUndefined({}));
    assert.isFalse(isUndefined([]));
    assert.isFalse(isUndefined(0));
    assert.isFalse(isUndefined(() => {}));
  });
});

describe("common : method not equal", () => {
  it("notEqual : symple type - false", () => {
    assert.isFalse(notEqual(null, null), "null === null");
    assert.isFalse(notEqual(undefined, undefined), "undefined === undefined");
    assert.isFalse(notEqual(0, 0), "0 === 0");
    assert.isFalse(notEqual(5, 5), "5 === 5");
    assert.isFalse(notEqual(5.5, 5.5), "5.5 === 5.5");
    assert.isFalse(notEqual(-32, -32), "-32 === -32");
    assert.isFalse(notEqual("ahoj", "ahoj"), '"ahoj" === "ahoj"');
    assert.isFalse(notEqual(false, false), "false === false");
    assert.isFalse(notEqual(true, true), "true === true");
    assert.isFalse(
      notEqual(new Date(2015, 1, 1), new Date(2015, 1, 1)),
      "date === date"
    );
    assert.isFalse(notEqual(/\w+/, /\w+/), "regExp === regExp");
  });
  it("notEqual : symple type - true", () => {
    assert.isTrue(notEqual(null, 5));
    assert.isTrue(notEqual(null, 0));
    assert.isTrue(notEqual(undefined, 5));
    assert.isTrue(notEqual(undefined, 0));
    assert.isTrue(notEqual(0, 2));
    assert.isTrue(notEqual(5, -5));
    assert.isTrue(notEqual(-32, -30));
    assert.isTrue(notEqual("ahoj", "ahj"));
    assert.isTrue(notEqual(false, true));
    assert.isTrue(notEqual(false, 0));
    assert.isTrue(notEqual(new Date(2015, 1, 2), new Date(2015, 1, 1)));
  });
  it("notEqual : array, object type - true", () => {
    assert.isFalse(notEqual([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]));
    assert.isFalse(notEqual([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]));
    assert.isFalse(notEqual([0, 1, 2, 3, [0, 1, 2]], [0, 1, 2, 3, [0, 1, 2]]));
    assert.isFalse(notEqual({ a: 5, b: 1, c: 2 }, { a: 5, b: 1, c: 2 }));
    assert.isFalse(notEqual({ a: 0, b: 1, c: 2 }, { c: 2, b: 1, a: 0 }));
    assert.isFalse(
      notEqual(
        { d: { a: 1, b: 1 }, a: 0, b: 1 },
        { a: 0, b: 1, d: { a: 1, b: 1 } }
      )
    );
    assert.isFalse(
      notEqual(
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }],
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }]
      )
    );
  });
  it("notEqual : array, object type - false", () => {
    assert.isTrue(notEqual([0, 1, 2, 3], [0, 1, 2, 3, 4]));
    assert.isTrue(notEqual({ a: 0, b: 1, c: 2 }, { a: 0, b: 0, c: 2 }));
    assert.isTrue(
      notEqual(
        { d: { a: 2, b: 1 }, a: 0, b: 1 },
        { a: 0, b: 1, d: { a: 1, b: 1 } }
      )
    );
    assert.isTrue(
      notEqual(
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }],
        [0, 1, 2, 3, { a: 0, b: 3, c: 2 }]
      )
    );
  });
});
