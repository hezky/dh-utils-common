const copy = (reg) => {
  const reFlags = /\w*$/;
  const result = new reg.constructor(reg.source, reFlags.exec(reg));
  result.lastIndex = reg.lastIndex;
  return result;
};

export default copy;
