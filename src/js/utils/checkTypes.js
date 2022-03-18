import { TYPE_ERROR_MESSAGE } from "common/constants";

const checkTypes = (args, fceIs) => {
  args.forEach((item) => {
    if (!fceIs(item)) throw new TypeError(TYPE_ERROR_MESSAGE);
  });
  return true;
};

export default checkTypes;
