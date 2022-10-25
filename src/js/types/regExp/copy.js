const copy = (reg, flag = "") => {
  const pattern = reg.source;
  const flags = [...new Set(reg.flags + flag)].join("");
  return new RegExp(pattern, flags);
};

export default copy;
