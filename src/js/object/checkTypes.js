import { is } from "object";
import { TYPE_ERROR_MESSAGE } from "common/constants";

const checkTypes = (...args) => {
  args.forEach((item) => {
    if (!is(item)) throw new TypeError(TYPE_ERROR_MESSAGE);
  });
  return true;
};

export default checkTypes;
