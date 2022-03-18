import { equal as equalCommon } from "common";

const equal = (arrA, arrB) =>
  equalArraysLength(arrA, arrB) && equalArraysItem(arrA, arrB);

const equalArraysItem = (arrA, arrB) =>
  arrA.every((val, key) => equalCommon(arrA[key], arrB[key]));

const equalArraysLength = (arrA, arrB) => arrA.length === arrB.length;

export default equal;
