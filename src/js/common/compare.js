import { TYPE_ERROR_MESSAGE, UTILS_LIST } from "common/constants";

//------------------------------------------------------------------------------
const compareDiffTypes = (a, b, foundType) => {
  const isType = foundType.is;
  return isType(b) - isType(a);
};

const equalTypes = (a, b, foundType) => {
  const isType = foundType.is;
  return isType(a) && isType(b);
};
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
const compareByType = (a, b, foundType) => {
  let res = null;
  if (equalTypes(a, b, foundType)) {
    const compareSameTypes = foundType.compare;
    res = compareSameTypes(a, b);
  } else {
    res = compareDiffTypes(a, b, foundType);
  }
  return res;
};

const findType = function (itemType) {
  const isType = itemType.is;
  return isType(this.a) || isType(this.b);
};

const notFoundType = (foundType) =>
  !foundType || !foundType.is || !foundType.compare;
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
const compare = (a, b, dataTypes = UTILS_LIST) => {
  const foundType = dataTypes.find(findType, { a, b });
  if (notFoundType(foundType)) throw new TypeError(TYPE_ERROR_MESSAGE);
  return compareByType(a, b, foundType);
};
//------------------------------------------------------------------------------

export default compare;
