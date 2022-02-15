import { TYPE_ERROR_MESSAGE, UTILS_LIST } from "common/constants";

const isEmpty = (a, dataTypes = UTILS_LIST) => {
  const utils = dataTypes.find((item) => item.is(a));
  const { isEmpty } = utils;
  if (utils === undefined || !isEmpty) throw new TypeError(TYPE_ERROR_MESSAGE);
  return isEmpty(a);
};

export default isEmpty;
