import * as utilsArray from "./array";
import * as utilsBoolean from "./boolean";
import * as utilsDate from "./date";
import * as utilsFunction from "./function";
import * as utilsNull from "./null";
import * as utilsNumber from "./number";
import * as utilsObject from "./object";
import * as utilsRegExp from "./regExp";
import * as utilsString from "./string";
import * as utilsSymbol from "./symbol";
import * as utilsUndefined from "./undefined";

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

export function compare(a, b, dataTypes = utilsList) {
  const utils = dataTypes.find(item => item.is(a) || item.is(b));
  if (utils === undefined || !utils.is || !utils.compare)
    throw new TypeError(TYPE_ERROR_MESSAGE);
  return utils.is(a) && utils.is(b)
    ? utils.compare(a, b)
    : utils.is(b) - utils.is(a);
}

export function compareReferences(a, b) {
  return !(a === b) * -1;
}

export function copy(obj, dataTypes = utilsList) {
  const utils = dataTypes.find(item => item.is(obj));
  if (utils === undefined || !utils.copy)
    throw new TypeError(TYPE_ERROR_MESSAGE);
  return utils.copy(obj);
}

export function equal(a, b, dataTypes = utilsList) {
  const utils = dataTypes.find(item => item.is(a));
  if (utils === undefined || !utils.is || !utils.equal)
    throw new TypeError(TYPE_ERROR_MESSAGE);
  return utils.is(a) && utils.is(b) ? utils.equal(a, b) : false;
}

export function isArray(val) {
  return utilsArray.is(val);
}

export function isBoolean(val) {
  return utilsBoolean.is(val);
}

export function isDate(val) {
  return utilsDate.is(val);
}

export function isDefined(val) {
  return !isUndefined(val) && !isNull(val);
}

// prettier-ignore
export function isEmpty(val) {
  return isNotDefined(val) || (
    isString(val) || isArray(val) ? val.length === 0 :
      isObject(val) ? isEmptyObject(val) :
        false);
}
const isEmptyObject = obj =>
  Object.keys(obj).length === 0 &&
  !(typeof window !== "undefined" && obj instanceof window.File);

export function isFunction(val) {
  return utilsFunction.is(val);
}

export function isNotArray(val) {
  return isArray(val) === false;
}

export function isNotDefined(val) {
  return isUndefined(val) || isNull(val);
}

export function isNotEmpty(val) {
  return isEmpty(val) === false;
}

export function isNotNull(val) {
  return isNull(val) === false;
}

export function isNumber(val) {
  return utilsNumber.is(val);
}

export function isNull(val) {
  return utilsNull.is(val);
}

export function isObject(val) {
  return utilsObject.is(val);
}

export function isPrimitive(val) {
  return isBoolean(val) || isString(val) || isNumber(val);
}

export function isRegExp(val) {
  return utilsRegExp.is(val);
}

export function isString(val) {
  return utilsString.is(val);
}

export function isStringEmpty(val) {
  return isString(val) && isEmpty(val);
}

export function isStringNotEmpty(val) {
  return isString(val) && isNotEmpty(val);
}

export function isSymbol(val) {
  return utilsSymbol.is(val);
}

export function isUndefined(val) {
  return utilsUndefined.is(val);
}

export function notEqual(a, b) {
  return !equal(a, b);
}
