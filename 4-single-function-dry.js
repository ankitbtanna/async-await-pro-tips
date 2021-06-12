// This is a good DRY
// But brain hurts looking at the readability of the code
async function cookFood() {
  let a = generalised(await step1())[0] ?? 0;
  let b = generalised(await step2())[0] ?? 0;
  let c = generalised(await step3())[0] ?? 0;

  return a + b + c;
}

async function generalised(prms) {
  try {
    const data = await prms;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
}
