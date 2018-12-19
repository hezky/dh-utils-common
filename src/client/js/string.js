import { isDefined } from "./";

export function compare(a, b) {
  return a.localeCompare(b);
}

export function copy(a) {
  return a;
}

export function equal(a, b) {
  return a.toString() === b.toString();
}

export function is(val) {
  return isDefined(val) && val.constructor === String;
}

export function isNumeric(val) {
  return /^[0-9]+$/.test(val);
}
