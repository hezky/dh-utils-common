import { equal as equalCommon } from "common";

const equal = (objA, objB) => {
  const aProps = Object.getOwnPropertyNames(objA);
  const bProps = Object.getOwnPropertyNames(objB);
  return (
    equalObjectsLength(aProps, bProps) && equalObjectsItem(aProps, objA, objB)
  );
};

const equalObjectsItem = (aProps, objA, objB) =>
  aProps.every((key) => equalCommon(objA[key], objB[key]));

const equalObjectsLength = (aProps, bProps) => aProps.length === bProps.length;

export default equal;
