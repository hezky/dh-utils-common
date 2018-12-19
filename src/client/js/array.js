import {
  isDefined,
  isEmpty,
  compare as compareCommon,
  compareReferences,
  copy as copyCommon,
  equal as equalCommon
} from "./";

export function binarySearch(ar, el, compareFn) {
  let m = 0,
    n = ar.length - 1,
    res = -1;
  while (m <= n) {
    let k = (n + m) >> 1,
      cmp = compareFn(el, ar[k]);
    if (cmp > 0) m = k + 1;
    else if (cmp < 0) n = k - 1;
    else {
      res = k;
      break;
    }
  }
  return res;
}

export function remove(array, item) {
  let res = false;
  const index = indexOf(array, item);
  if (index > -1) {
    res = array.splice(index, 1);
  }
  return res;
}

export function contains(array, test) {
  return indexOf(array, test) !== -1;
}

export function indexOf(array, test) {
  if (isEmpty(array) || isEmpty(test)) {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item === test) {
      return i;
    }
  }
  return -1;
}

export function compare(a, b) {
  return compareReferences(a, b) && compareArrays(a, b);
}
const compareArrays = (a, b) =>
    compareArraysLength(a, b) || compareArraysItem(a, b),
  compareArraysItem = (a, b) => {
    let res;
    a.every((val, key) => {
      res = compareCommon(val, b[key]);
      return res === 0;
    });
    // let res = 0;
    // for (let index = 0; index < a.length; index++) {
    //   res = compareCommon(a[index], b[index]);
    //   if (res !== 0) break;
    // }
    return res;
  },
  compareArraysLength = (a, b) => (a.length > b.length) - (a.length < b.length);

export function copy(a) {
  return a.map(val => copyCommon(val));
}

export function equal(a, b) {
  return is(a) && is(b) && equalArraysLength(a, b) && equalArraysItem(a, b);
}
const equalArraysItem = (a, b) =>
    a.every((val, key) => equalCommon(a[key], b[key])),
  equalArraysLength = (a, b) => a.length === b.length;

export function is(a) {
  return isDefined(a) && a.constructor === Array;
}

export function uniq(a) {
  return a.filter(
    (value, index, self) =>
      self.findIndex(val => equalCommon(value, val)) === index
  );
}
