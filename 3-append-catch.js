// Easy way out is to append the .catch method
// Better but still repetitive
async function cookFood() {
  const a = await step1().catch((err) => handleErr(err));
  const b = await step2().catch((err) => handleErr(err));
  const c = await step3().catch((err) => handleErr(err));

  return a + b + c;
}
