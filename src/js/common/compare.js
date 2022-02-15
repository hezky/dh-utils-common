import { TYPE_ERROR_MESSAGE, UTILS_LIST } from "common/constants";

const compare = (a, b, dataTypes = UTILS_LIST) => {
  const utils = dataTypes.find((item) => item.is(a) || item.is(b));
  const { is, compare } = utils;
  if (utils === undefined || !is || !compare)
    throw new TypeError(TYPE_ERROR_MESSAGE);
  return is(a) && is(b) ? compare(a, b) : is(b) - is(a);
};

export default compare;
