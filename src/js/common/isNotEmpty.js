import { TYPE_ERROR_MESSAGE, UTILS_LIST } from "common/constants";

const isNotEmpty = (a, dataTypes = UTILS_LIST) => {
  const utils = dataTypes.find((item) => item.is(a));
  const { isNotEmpty } = utils;
  if (utils === undefined || !isNotEmpty)
    throw new TypeError(TYPE_ERROR_MESSAGE);
  return isNotEmpty(a);
};

export default isNotEmpty;
