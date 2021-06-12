// This piece of code is not reliable
// Does not handle errors
// Errors can be produced by step1, step2, step3
async function cookFood() {
    const a = await step1();
    const b = await step2();
    const c = await step3();

    return a + b + c;
}