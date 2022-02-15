import { TYPE_ERROR_MESSAGE, UTILS_LIST } from "common/constants";

const copy = (a, dataTypes = UTILS_LIST) => {
  const utils = dataTypes.find((item) => item.is(a));
  const { copy } = utils;
  if (utils === undefined || !copy) throw new TypeError(TYPE_ERROR_MESSAGE);
  return copy(a);
};

export default copy;
