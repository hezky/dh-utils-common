it("equal : false (undefined)", () => {
  const a1 = undefined;
  const a2 = undefined;
  assert.notOk(utilsArray.equal(a1, a2), "bad parameters undefined");
});
it("equal : false (null)", () => {
  const a1 = null;
  const a2 = null;
  assert.notOk(utilsArray.equal(a1, a2), "bad parameters null");
});
it("equal : false (bad parameters)", () => {
  const a1 = 1;
  const a2 = [];
  assert.notOk(utilsArray.equal(a1, a2), "bad parameters");
});
