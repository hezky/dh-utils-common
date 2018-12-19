import { isDefined } from "./";

export function compare(a, b) {
  return a === b ? 0 : (a > b) - (a < b);
}

export function copy(a) {
  return a;
}

export function equal(a, b) {
  return a === b;
}

export function is(val) {
  return isDefined(val) && val.constructor === Number;
}
