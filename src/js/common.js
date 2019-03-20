import * as utilsArray from "array";
import * as utilsBoolean from "boolean";
import * as utilsDate from "date";
import * as utilsFunction from "function";
import * as utilsNull from "null";
import * as utilsNumber from "number";
import * as utilsObject from "object";
import * as utilsRegExp from "regExp";
import * as utilsString from "string";
import * as utilsSymbol from "symbol";
import * as utilsUndefined from "undefined";

const utilsList = [
  utilsArray,
  utilsBoolean,
  utilsDate,
  utilsFunction,
  utilsNull,
  utilsNumber,
  utilsObject,
  utilsRegExp,
  utilsString,
  utilsSymbol,
  utilsUndefined
];

const TYPE_ERROR_MESSAGE = "Unknown type";

const compare = (a, b, dataTypes = utilsList) => {
  const utils = dataTypes.find(item => item.is(a) || item.is(b));
  if (utils === undefined || !utils.is || !utils.compare) throw new TypeError(TYPE_ERROR_MESSAGE);
  return utils.is(a) && utils.is(b) ? utils.compare(a, b) : utils.is(b) - utils.is(a);
};

const compareReferences = (a, b) => !(a === b) * -1;

const copy = (obj, dataTypes = utilsList) => {
  const utils = dataTypes.find(item => item.is(obj));
  if (utils === undefined || !utils.copy) throw new TypeError(TYPE_ERROR_MESSAGE);
  return utils.copy(obj);
};

const equal = (a, b, dataTypes = utilsList) => {
  const utils = dataTypes.find(item => item.is(a));
  if (utils === undefined || !utils.is || !utils.equal) throw new TypeError(TYPE_ERROR_MESSAGE);
  return utils.is(a) && utils.is(b) ? utils.equal(a, b) : false;
};

const isArray = val => utilsArray.is(val);

const isBoolean = val => utilsBoolean.is(val);

const isDate = val => utilsDate.is(val);

const isDefined = val => !isUndefined(val) && !isNull(val);

const isEmpty = val =>
  isNotDefined(val) || (isString(val) || isArray(val) ? val.length === 0 : isObject(val) ? isEmptyObject(val) : false);

const isEmptyObject = obj => Object.keys(obj).length === 0;

const isFunction = val => utilsFunction.is(val);

const isNotArray = val => isArray(val) === false;

const isNotDefined = val => isUndefined(val) || isNull(val);

const isNotEmpty = val => isEmpty(val) === false;

const isNotNull = val => isNull(val) === false;

const isNumber = val => utilsNumber.is(val);

const isNull = val => utilsNull.is(val);

const isObject = val => utilsObject.is(val);

const isPrimitive = val => isBoolean(val) || isString(val) || isNumber(val);

const isRegExp = val => utilsRegExp.is(val);

const isString = val => utilsString.is(val);

const isStringEmpty = val => isString(val) && isEmpty(val);

const isStringNotEmpty = val => isString(val) && isNotEmpty(val);

const isSymbol = val => utilsSymbol.is(val);

const isUndefined = val => utilsUndefined.is(val);

const notEqual = (a, b) => !equal(a, b);

export {
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
  isSymbol,
  isUndefined,
  notEqual
};
