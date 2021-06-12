// This is not how async/await was supposed to be written
// All your beautiful oneliners are magically turned into multiple liners
// Tower of try catch...
async function cookFood() {
  let a;
  let b;
  let c;

  try {
    a = await step1();
  } catch (err) {
    handleError(err);
  }

  try {
    b = await step2();
  } catch (err) {
    handleError(err);
  }

  try {
    c = await step3();
  } catch (err) {
    handleError(err);
  }

  return a + b + c;
}
