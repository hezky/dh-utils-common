import {
  compare as compareCommon,
  compareReferences,
  copy as copyCommon,
  equal as equalCommon,
  isDefined,
  isNotArray,
  isNotDefined,
  isNotEmpty,
  isPrimitive,
  utilsString
} from "./";

const compare = (a, b) => compareReferences(a, b) && compareObjects(a, b);

const copy = obj => mapValues(obj, copyCommon);

const equal = (a, b) => {
  let bRes = is(a) && is(b);
  if (bRes) {
    const aProps = Object.getOwnPropertyNames(a),
      bProps = Object.getOwnPropertyNames(b);
    bRes =
      aProps.length !== bProps.length
        ? false
        : aProps.every(key => {
            return equalCommon(a[key], b[key]);
          });
  }
  return bRes;
};

const getJsonData = (data, jsonkey) =>
  isNotDefined(jsonkey)
    ? getJsonDataForKey(data)
    : getJsonDataFind(data, jsonkey);

const getJsonDataForKey = (data, jsonkey) => {
  let prop = data;
  if (isNotEmpty(jsonkey) && isDefined(prop)) {
    let deep = jsonkey.split(".");
    while (isDefined(prop) && deep.length > 0) {
      const curPropName = deep.shift();
      prop = prop.hasOwnProperty(curPropName) ? prop[curPropName] : null;
    }
  }
  return prop;
};

const getPrimitives = obj => {
  const res = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let val = obj[key];
      if (isPrimitive(val)) {
        res[key] = val;
      }
    }
  }
  return res;
};

const is = val => isDefined(val) && isNotArray(val) && typeof val === "object";

const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((res, key) => {
    res[key] = fn(obj[key]);
    return res;
  }, {});

const compareObjects = (a, b) =>
    compareObjectsLength(a, b) ||
    compareObjectsKeys(a, b) ||
    compareObjectsItems(a, b),
  compareObjectsItems = (a, b) => {
    let res = 0;
    for (let prop in a) {
      res = compareCommon(a[prop], b[prop]);
      if (res !== 0) break;
    }
    return res;
  },
  compareObjectsLength = (a, b) => {
    const aLength = Object.keys(a).length,
      bLength = Object.keys(b).length;
    return (aLength > bLength) - (aLength < bLength);
  },
  compareObjectsKeys = (a, b) => {
    const aKeys = Object.keys(a)
        .sort(utilsString.compare)
        .join(""),
      bKeys = Object.keys(b)
        .sort(utilsString.compare)
        .join("");
    return utilsString.compare(aKeys, bKeys);
  },
  getJsonDataFind = (data, jsonkey) => {
    let res = null;
    const jsonKeys = jsonkey.split("||");
    for (let index = 0; index < jsonKeys.length; index++) {
      const jsonkey = jsonKeys[index];
      res = getJsonDataForKey(data, jsonkey);
      if (isDefined(res)) break;
    }
    return res;
  };

export {
  compare,
  copy,
  equal,
  getJsonData,
  getJsonDataForKey,
  getPrimitives,
  is,
  mapValues
};
