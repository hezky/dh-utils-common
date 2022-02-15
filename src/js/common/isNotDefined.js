import isNull from "common/isNull";
import isUndefined from "common/isUndefined";

const isNotDefined = (a) => isUndefined(a) || isNull(a);

export default isNotDefined;
