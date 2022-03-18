import { copy as copyCommon } from "common";

const copy = (obj) => mapValues(obj, copyCommon);

const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((res, key) => {
    res[key] = fn(obj[key]);
    return res;
  }, {});

export default copy;
