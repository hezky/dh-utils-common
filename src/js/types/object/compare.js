import { compare as compareCommon, compareReferences, utilsString } from "";

const compare = (objA, objB) =>
  compareReferences(objA, objB) && compareObjects(objA, objB);

const compareObjects = (objA, objB) =>
  compareObjectsLength(objA, objB) ||
  compareObjectsKeys(objA, objB) ||
  compareObjectsItems(objA, objB);

const compareObjectsItems = (objA, objB) => {
  let res = 0;
  for (let prop in objA) {
    res = compareCommon(objA[prop], objB[prop]);
    if (res !== 0) break;
  }
  return res;
};

const compareObjectsLength = (objA, objB) => {
  const aLength = Object.keys(objA).length;
  const bLength = Object.keys(objB).length;
  return (aLength > bLength) - (aLength < bLength);
};

const compareObjectsKeys = (objA, objB) => {
  const aKeys = Object.keys(objA).sort(utilsString.compare).join("");
  const bKeys = Object.keys(objB).sort(utilsString.compare).join("");
  return utilsString.compare(aKeys, bKeys);
};

export default compare;
