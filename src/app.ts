// console.log('sync start');

setTimeout(() => {
  console.log('top level setTimeout 2ms');
}, 2);

setTimeout(() => {
  console.log('top level setTimeout 1ms');
}, 1);

setTimeout(() => {
  console.log('top level setTimeout 0ms');
}, 0);

const promise = new Promise((resolve) => {
  console.log('promise constructor before resolve');
  resolve('Promise resolved');
});

promise.then((result) => {
  // console.log(`result of createPromise().then = ${result}`);
});

const callPromise = async (): Promise<void> => {
  // console.log('started async function callPromise');
  const result = await promise; 
  console.log(`result of callPromise using async-await = ${result}`);
  console.log(`finished async function callPromise`);
};

callPromise();

const setTimeoutAfterResolve = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    resolve;
    // setTimeout(() => {
    //   console.log(`setTimeoutAfterResolve ${ms}ms`);
    // }, ms);
  });
};

setTimeoutAfterResolve(1000)
  .then(() => console.log('.then for setTimeoutAfterResolve'));

const callSetTimeoutAfterResolve = async (ms: number): Promise<void> => {
  // console.log('start async function callSetTimeoutAfterResolve');
  await setTimeoutAfterResolve(ms);
  console.log('finished async function callSetTimeoutAfterResolve');
};

callSetTimeoutAfterResolve(1000);

const asyncSleep = (ms: number): Promise<void> => (
  new Promise((resolve) => {
    // setTimeout(resolve, ms);
  })
);

asyncSleep(1000)
  .then(() => {
    console.log(`.then for asynSleep 1000ms`);
  })

const callAsyncSleep = async (ms: number): Promise<void> => {
  // console.log('start async function callAsyncSleep');
  await asyncSleep(ms);
  console.log(`finished async function callAsyncSleep`);
};

callAsyncSleep(1000);

// console.log('sync finished');















/*
// synchronous
sync start
promise constructor before result
started async function callPromise
promise constructor before result
start async function callSetTimeoutAfterResolve
start async function callAsyncSleep
sync finished

microtask queue
.then for setTimeoutAfterResolve
finished async function callSetTimeoutAfterResolve
result using .then = promise resolved
result using async-await = promise resolved
finished async function callPromise

macratask queue, also called task queue or callback queue
top level setTimeout 2ms
top level setTimeout 1ms
top level setTimeout 0ms
setTimeoutAfterResolve 1000ms
setTimeoutAfterResolve 1000ms
setTimeoutWrappedInPromise 1000ms
finished async function callAsyncSleep
*/