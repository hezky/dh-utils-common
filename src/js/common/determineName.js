import { TYPE_ERROR_MESSAGE, UTILS_LIST } from "common/constants";

const determineName = (val, dataTypes = UTILS_LIST) => {
  const utils = dataTypes.find((item) => item.is(val));
  if (utils === undefined) throw new TypeError(TYPE_ERROR_MESSAGE);
  return utils?.NAME;
};

export default determineName;
