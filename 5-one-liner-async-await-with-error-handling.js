// One liner
// Beautiful
async function cookFood() {
  const [a, error1] = await step1();
  const [b, error2] = await step2();
  const [c, error3] = await step3();

  handleErr(error1);
  handleErr(error2);
  handleErr(error3);

  return a + b + c;
}
