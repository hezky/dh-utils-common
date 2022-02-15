import isNull from "common/isNull";
import isUndefined from "common/isUndefined";

const isDefined = (a) => !isUndefined(a) && !isNull(a);

export default isDefined;
