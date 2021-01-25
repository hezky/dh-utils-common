import { isDefined, utilsNumber } from "";

const compare = (a, b) => {
  let bRes = is(a) && is(b) ? true : NaN;
  if (bRes) {
    const _a = a.valueOf();
    const _b = b.valueOf();
    bRes = isFinite(_a) && isFinite(_b) ? utilsNumber.compare(_a, _b) : NaN;
  }
  return bRes;
};

const copy = (obj) => {
  if (is(obj)) return new Date(obj.getTime());
  throw new Error("Unable to copy obj! Its type isn't supported.");
};

const equal = (a, b) => {
  return is(a) && is(b) && compare(a, b) === 0;
};

const is = (val) => {
  return isDefined(val) && val.constructor === Date;
};

export { compare, copy, equal, is };
