import { UTILS_LIST, TYPE_ERROR_MESSAGE } from "common/constants";

const equal = (a, b, dataTypes = UTILS_LIST) => {
  const utils = dataTypes.find((item) => item.is(a));
  const { is, equal } = utils;
  if (utils === undefined || !is || !equal)
    throw new TypeError(TYPE_ERROR_MESSAGE);
  return is(a) && is(b) ? equal(a, b) : false;
};

export default equal;
