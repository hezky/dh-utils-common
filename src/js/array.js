import {
  isDefined,
  compare as compareCommon,
  compareReferences,
  copy as copyCommon,
  equal as equalCommon,
} from "";

const compare = (a, b) => compareReferences(a, b) && compareArrays(a, b);
const compareArrays = (a, b) =>
  compareArraysLength(a, b) || compareArraysItem(a, b);
const compareArraysItem = (a, b) => {
  let res = 0;
  a.every((val, key) => {
    res = compareCommon(val, b[key]);
    return res === 0;
  });
  return res;
};
const compareArraysLength = (a, b) =>
  (a.length > b.length) - (a.length < b.length);

const copy = (a) => a.map((val) => copyCommon(val));

const equal = (a, b) =>
  is(a) && is(b) && equalArraysLength(a, b) && equalArraysItem(a, b);
const equalArraysItem = (a, b) =>
  a.every((val, key) => equalCommon(a[key], b[key]));
const equalArraysLength = (a, b) => a.length === b.length;

const is = (a) => isDefined(a) && a.constructor === Array;

export { compare, copy, equal, is };
