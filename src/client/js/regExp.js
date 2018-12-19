import { isDefined, utilsString } from "./";

export function compare(a, b) {
  return utilsString.compare(a.toString(), b.toString());
}

export function copy(a) {
  return a;
}

export function equal(a, b) {
  return utilsString.equal(a, b);
}

export function is(val) {
  return isDefined(val) && val.constructor === RegExp;
}
