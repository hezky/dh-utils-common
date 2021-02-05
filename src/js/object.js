import {
  compare as compareCommon,
  compareReferences,
  copy as copyCommon,
  equal as equalCommon,
  isDefined,
  isNotArray,
  utilsString,
} from "";

// ---------------------------------------------------
// compare
const compare = (a, b) => compareReferences(a, b) && compareObjects(a, b);

const compareObjects = (a, b) =>
  compareObjectsLength(a, b) ||
  compareObjectsKeys(a, b) ||
  compareObjectsItems(a, b);
const compareObjectsItems = (a, b) => {
  let res = 0;
  for (let prop in a) {
    res = compareCommon(a[prop], b[prop]);
    if (res !== 0) break;
  }
  return res;
};
const compareObjectsLength = (a, b) => {
  const aLength = Object.keys(a).length;
  const bLength = Object.keys(b).length;
  return (aLength > bLength) - (aLength < bLength);
};
const compareObjectsKeys = (a, b) => {
  const aKeys = Object.keys(a).sort(utilsString.compare).join("");
  const bKeys = Object.keys(b).sort(utilsString.compare).join("");
  return utilsString.compare(aKeys, bKeys);
};
// ---------------------------------------------------

// ---------------------------------------------------
// copy
const copy = (obj) => mapValues(obj, copyCommon);

const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((res, key) => {
    res[key] = fn(obj[key]);
    return res;
  }, {});
// ---------------------------------------------------

const equal = (a, b) => {
  let bRes = is(a) && is(b);
  if (bRes) {
    const aProps = Object.getOwnPropertyNames(a),
      bProps = Object.getOwnPropertyNames(b);
    bRes =
      aProps.length !== bProps.length
        ? false
        : aProps.every((key) => {
            return equalCommon(a[key], b[key]);
          });
  }
  return bRes;
};

const is = (val) =>
  isDefined(val) && isNotArray(val) && typeof val === "object";

const isEmpty = (obj) => Object.keys(obj).length === 0;

const isNotEmpty = (obj) => Object.keys(obj).length > 0;

export { compare, copy, equal, is, isEmpty, isNotEmpty };
