console.log('sync start');

setTimeout(() => {
  console.log('top-level setTimeout 2ms');
}, 2);

setTimeout(() => {
  console.log('top-level setTimeout 1ms');
}, 1);

setTimeout(() => {
  console.log('top-level setTimeout 0ms');
}, 0);

const promise = new Promise((resolve) => {
  console.log('promise constructor before resolve');
  resolve('promise resolved');
});

const callPromise = async (): Promise<void> => {
  console.log('started async function callPromise');
  const result = await promise; 
  console.log(`result of await promise = ${result}`);
  console.log(`finished async function callPromise`);
};

callPromise();

promise.then((result) => {
  console.log(`result of promise.then = ${result}`);
});

const asyncSleep = (ms: number): Promise<void> => (
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
);

const callAsyncSleep = async (ms: number): Promise<void> => {
  console.log('start async function callAsyncSleep');
  await asyncSleep(ms);
  console.log(`finished async function callAsyncSleep`);
};

callAsyncSleep(1000);

console.log('sync finished');