import { compare as compareCommon, compareReferences } from "common";

const compare = (arrA, arrB) =>
  compareReferences(arrA, arrB) && compareArrays(arrA, arrB);

const compareArrays = (arrA, arrB) =>
  compareArraysLength(arrA, arrB) || compareArraysItem(arrA, arrB);

const compareArraysItem = (arrA, arrB) => {
  let res = 0;
  arrA.every((val, key) => {
    res = compareCommon(val, arrB[key]);
    return res === 0;
  });
  return res;
};

const compareArraysLength = (arrA, arrB) =>
  (arrA.length > arrB.length) - (arrA.length < arrB.length);

export default compare;
