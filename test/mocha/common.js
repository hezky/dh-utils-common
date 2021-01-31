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
  isStringEmpty,
  isStringNotEmpty,
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
    assert.notOk(a === b, "check reference");
    assert.deepEqual(a, b, "empty object");
    assert.deepEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }, "object");
  });
  it("copy : array type", () => {
    const a = [];
    const b = copy(a);
    assert.notOk(a === b, "check reference");
    assert.deepEqual(a, b, "empty array");
    assert.deepEqual(copy([1, 2, 3]), [1, 2, 3], "array");
  });
  it("copy : date type", () => {
    const a = new Date(2015, 5, 5);
    const b = copy(a);
    assert.notOk(a === b, "check reference");
    assert.ok((a.valueOf(), b.valueOf()), "date");
  });
  it("copy : deep copy", () => {
    const a = {
      a: { v: { j: 1, k: 2, l: 3 }, w: () => {}, x: 1, y: 2, z: 3 },
      b: [1, [9, 8, 7], 3, 4],
      c: new Date(2015, 3, 5),
    };
    const b = copy(a);
    assert.notOk(a === b, "check reference");
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
    assert.ok(equal(null, null), "null === null");
    assert.ok(equal(undefined, undefined), "undefined === undefined");
    assert.ok(equal(0, 0), "0 === 0");
    assert.ok(equal(5, 5), "5 === 5");
    assert.ok(equal(5.5, 5.5), "5.5 === 5.5");
    assert.ok(equal(-32, -32), "-32 === -32");
    assert.ok(equal("ahoj", "ahoj"), '"ahoj" === "ahoj"');
    assert.ok(equal(false, false), "false === false");
    assert.ok(equal(true, true), "true === true");
    assert.ok(
      equal(new Date(2015, 1, 1), new Date(2015, 1, 1)),
      "date === date"
    );
    assert.ok(equal(/\w+/, /\w+/), "regExp === regExp");
  });
  it("equal : simple type false", () => {
    assert.notOk(equal(null, 5));
    assert.notOk(equal(null, 0));
    assert.notOk(equal(undefined, 5));
    assert.notOk(equal(undefined, 0));
    assert.notOk(equal(0, 2));
    assert.notOk(equal(5, -5));
    assert.notOk(equal(-32, -30));
    assert.notOk(equal("ahoj", "ahj"));
    assert.notOk(equal(false, true));
    assert.notOk(equal(false, 0));
    assert.notOk(equal(new Date(2015, 1, 2), new Date(2015, 1, 1)));
  });
  it("equal : array, object type true", () => {
    assert.ok(equal([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]));
    assert.ok(equal([0, 1, 2, 3, 4], [0, 1, 2, 3, 4]));
    assert.ok(equal([0, 1, 2, 3, [0, 1, 2]], [0, 1, 2, 3, [0, 1, 2]]));
    assert.ok(equal({ a: 5, b: 1, c: 2 }, { a: 5, b: 1, c: 2 }));
    assert.ok(equal({ a: 0, b: 1, c: 2 }, { c: 2, b: 1, a: 0 }));
    assert.ok(
      equal(
        { d: { a: 1, b: 1 }, a: 0, b: 1 },
        { a: 0, b: 1, d: { a: 1, b: 1 } }
      )
    );
    assert.ok(
      equal(
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }],
        [0, 1, 2, 3, { a: 0, b: 1, c: 2 }]
      )
    );
  });
  it("equal : array, object type false", () => {
    assert.notOk(equal([0, 1, 2, 3], [0, 1, 2, 3, 4]));
    assert.notOk(equal({ a: 0, b: 1, c: 2 }, { a: 0, b: 0, c: 2 }));
    assert.notOk(
      equal(
        { d: { a: 2, b: 1 }, a: 0, b: 1 },
        { a: 0, b: 1, d: { a: 1, b: 1 } }
      )
    );
    assert.notOk(
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
    assert.ok(isArray([]), "isArray true : empty array");
    assert.ok(isArray([1, 2, 3]), "isArray true : array");
    assert.ok(isArray(new Array()), "isArray true : empty array new");
  });
  it("isArray : false", () => {
    assert.notOk(isArray(undefined), "");
    assert.notOk(isArray(null));
    assert.notOk(isArray("a"));
    assert.notOk(isArray(3));
    assert.notOk(isArray({}));
    assert.notOk(isArray(new Object()));
    assert.notOk(isArray(() => {}));
    assert.notOk(isArray(false));
    assert.notOk(isArray(true));
  });
});

describe("common : method isBoolean", () => {
  it("isBoolean : true", () => {
    assert.ok(isBoolean(true));
    assert.ok(isBoolean(false));
  });
  it("isBoolean : false", () => {
    assert.notOk(isBoolean(undefined));
    assert.notOk(isBoolean(null));
    assert.notOk(isBoolean("a"));
    assert.notOk(isBoolean(3));
    assert.notOk(isBoolean({}));
    assert.notOk(isBoolean([]));
    assert.notOk(isBoolean(() => {}));
  });
});

describe("common : method isDate", () => {
  it("isDate : true", () => {
    assert.ok(isDate(new Date()));
  });
  it("isDate : false", () => {
    assert.notOk(isDate(undefined));
    assert.notOk(isDate(null));
    assert.notOk(isDate(3));
    assert.notOk(isDate("a"));
    assert.notOk(isDate(""));
    assert.notOk(isDate("11"));
    assert.notOk(isDate({}));
    assert.notOk(isDate([]));
    assert.notOk(isDate(() => {}));
    assert.notOk(isDate(false));
    assert.notOk(isDate(true));
  });
});

describe("common : method isDefined", () => {
  it("isDefined : true", () => {
    assert.notOk(isDefined(null));
    assert.notOk(isDefined(undefined));
  });
  it("isDefined : false", () => {
    assert.ok(isDefined(1));
    assert.ok(isDefined(""));
    assert.ok(isDefined([]));
    assert.ok(isDefined({}));
    assert.ok(isDefined(true));
    assert.ok(isDefined(false));
    assert.ok(isDefined(() => {}));
  });
});

describe("common : method isEmpty", () => {
  it("isEmpty : true", () => {
    assert.ok(isEmpty(null));
    assert.ok(isEmpty(undefined));
    assert.ok(isEmpty([]));
    assert.ok(isEmpty(new Array()));
    assert.ok(isEmpty({}));
    assert.ok(isEmpty(new Object()));
    assert.ok(isEmpty(""));
  });
  it("isEmpty : false", () => {
    assert.notOk(isEmpty([1, 2]));
    assert.notOk(isEmpty(new Array(1, 2)));
    assert.notOk(isEmpty({ prop: "1" }));
    assert.notOk(isEmpty("ahoj"));
    assert.notOk(isEmpty(5));
    assert.notOk(isEmpty(true));
    assert.notOk(isEmpty(0));
    assert.notOk(isEmpty(false));
    assert.notOk(isEmpty(new Date(2020, 5, 5)));
  });
});

describe("common : method isFunction", () => {
  it("isFunction : true", () => {
    const test = function () {};
    assert.ok(isFunction(test));
  });
  it("isFunction : false", () => {
    assert.notOk(isFunction(undefined));
    assert.notOk(isFunction(null));
    assert.notOk(isFunction("a"));
    assert.notOk(isFunction(3));
    assert.notOk(isFunction({}));
    assert.notOk(isFunction(new Object()));
    assert.notOk(isFunction([]));
    assert.notOk(isFunction(new Array()));
    assert.notOk(isFunction(false));
    assert.notOk(isFunction(true));
  });
});

describe("common : method isNotArray", () => {
  it("isNotArray : true", () => {
    assert.ok(isNotArray({}));
    assert.ok(isNotArray(null));
  });
  it("isNotArray : false", () => {
    assert.notOk(isNotArray([]));
    assert.notOk(isNotArray([1, 2, 3, 4]));
  });
});

describe("common : method isNotDefined", () => {
  it("isNotDefined : true", () => {
    assert.ok(isNotDefined(null));
    assert.ok(isNotDefined(undefined));
  });
  it("isNotDefined : false", () => {
    assert.notOk(isNotDefined(1));
    assert.notOk(isNotDefined(""));
    assert.notOk(isNotDefined([]));
    assert.notOk(isNotDefined({}));
    assert.notOk(isNotDefined(true));
    assert.notOk(isNotDefined(false));
    assert.notOk(isNotDefined(() => {}));
  });
});

describe("common : method isNotEmpty", () => {
  it("isNotEmpty : false", () => {
    assert.notOk(isNotEmpty(null));
    assert.notOk(isNotEmpty(undefined));
    assert.notOk(isNotEmpty([]));
    assert.notOk(isNotEmpty(new Array()));
    assert.notOk(isNotEmpty({}));
    assert.notOk(isNotEmpty(new Object()));
    assert.notOk(isNotEmpty(""));
  });
  it("isNotEmpty : true", () => {
    assert.ok(isNotEmpty([1, 2]));
    assert.ok(isNotEmpty(new Array(1, 2)));
    assert.ok(isNotEmpty({ prop: "1" }));
    assert.ok(isNotEmpty("ahoj"));
    assert.ok(isNotEmpty(5));
    assert.ok(isNotEmpty(true));
    assert.ok(isNotEmpty(0));
    assert.ok(isNotEmpty(false));
  });
});

describe("common : method isNotNull", () => {
  it("isNotNull : false", () => {
    assert.notOk(isNotNull(null));
  });
  it("isNotNull : true", () => {
    assert.ok(isNotNull(undefined));
    assert.ok(isNotNull(""));
    assert.ok(isNotNull(true));
    assert.ok(isNotNull(false));
    assert.ok(isNotNull({}));
    assert.ok(isNotNull([]));
    assert.ok(isNotNull(0));
    assert.ok(isNotNull(() => {}));
  });
});

describe("common : method isNumber", () => {
  it("isNumber : true", () => {
    assert.ok(isNumber(0));
    assert.ok(isNumber(3));
    assert.ok(isNumber(3.14));
    assert.ok(isNumber(0x11));
    assert.ok(isNumber(0b11));
    assert.ok(isNumber(0o11));
  });
  it("isNumber : false", () => {
    assert.notOk(isNumber(undefined));
    assert.notOk(isNumber(null));
    assert.notOk(isNumber("a"));
    assert.notOk(isNumber(""));
    assert.notOk(isNumber("11"));
    assert.notOk(isNumber({}));
    assert.notOk(isNumber([]));
    assert.notOk(isNumber(() => {}));
    assert.notOk(isNumber(false));
    assert.notOk(isNumber(true));
  });
});

describe("common : method isNull", () => {
  it("isNull : true", () => {
    assert.ok(isNull(null));
  });
  it("isNull : false", () => {
    assert.notOk(isNull(undefined));
    assert.notOk(isNull(""));
    assert.notOk(isNull(true));
    assert.notOk(isNull(false));
    assert.notOk(isNull({}));
    assert.notOk(isNull([]));
    assert.notOk(isNull(0));
    assert.notOk(isNull(() => {}));
  });
});

describe("common : method isObject", () => {
  it("isObject : true", () => {
    class ClassA {
      render() {}
    }
    let objectA = new ClassA();
    assert.ok(isObject(objectA));
    assert.ok(isObject(new Date()));
    assert.ok(isObject({}));
    assert.ok(isObject(new Object()));
    assert.ok(isObject({ a: "xxx" }));
    assert.ok(isObject({ a: "xxx" }));
  });
  it("isObject : false", () => {
    assert.notOk(isObject(undefined));
    assert.notOk(isObject(null));
    assert.notOk(isObject("a"));
    assert.notOk(isObject(3));
    assert.notOk(isObject([]));
    assert.notOk(isObject(new Array()));
    assert.notOk(isObject(false));
    assert.notOk(isObject(true));
    assert.notOk(isObject(function () {}));
  });
});

describe("common : method isPrimitive", () => {
  it("isPrimitive : true", () => {
    assert.ok(isPrimitive(""));
    assert.ok(isPrimitive(true));
    assert.ok(isPrimitive(false));
    assert.ok(isPrimitive(0));
  });
  it("isPrimitive : false", () => {
    assert.notOk(isPrimitive(null));
    assert.notOk(isPrimitive({}));
    assert.notOk(isPrimitive([]));
    assert.notOk(isPrimitive(() => {}));
  });
});

describe("common : method isRegExp", () => {
  it("isRegExp : true", () => {
    assert.ok(isRegExp(/ab+c/));
  });
  it("isRegExp : false", () => {
    assert.notOk(isRegExp(9));
    assert.notOk(isRegExp("aaa"));
    assert.notOk(isRegExp([]));
    assert.notOk(isRegExp(() => {}));
  });
});

describe("common : method isString", () => {
  it("isString : true", () => {
    assert.ok(isString(""));
    assert.ok(isString("a"));
  });
  it("isString : false", () => {
    assert.notOk(isBoolean(undefined));
    assert.notOk(isBoolean(null));
    assert.notOk(isBoolean(3));
    assert.notOk(isBoolean({}));
    assert.notOk(isBoolean([]));
    assert.notOk(isBoolean(() => {}));
    assert.notOk(isArray(false));
    assert.notOk(isArray(true));
  });
});

describe("common : method isStringEmpty", () => {
  it("isStringEmpty : true", () => {
    assert.ok(isStringEmpty(""));
  });
  it("isStringEmpty : false", () => {
    assert.notOk(isStringEmpty(3));
    assert.notOk(isStringEmpty("123"));
    assert.notOk(isStringEmpty(null));
    assert.notOk(isStringEmpty(undefined));
    assert.notOk(isStringEmpty([]));
    assert.notOk(isStringEmpty({}));
  });
});

describe("common : method isStringNotEmpty", () => {
  it("isStringNotEmpty : true", () => {
    assert.ok(isStringNotEmpty("123"));
  });
  it("isStringNotEmpty : false", () => {
    assert.notOk(isStringNotEmpty(3));
    assert.notOk(isStringNotEmpty(""));
    assert.notOk(isStringNotEmpty(null));
    assert.notOk(isStringNotEmpty(undefined));
    assert.notOk(isStringNotEmpty([]));
    assert.notOk(isStringNotEmpty({}));
  });
});
