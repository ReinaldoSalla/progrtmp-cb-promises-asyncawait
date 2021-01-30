/**
 * setTimeout with 0 and 1 sec
 * promise constructor
 * .then
 * promise.resolve
 * setTimeout wrapped in a promise
 * setTimeout after resolve
 * async await
 * await console.log
 * async await vs setTimeout
 * async await vs promise
 */

console.log('sync start');

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
  console.log('inside promise constructor before resolve');
  resolve('promise resolved');
});

promise
  .then((result) => {
    console.log(result);
  });

const setTimeoutWrappedInPromise = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const ms = 0;
setTimeoutWrappedInPromise(ms)
  .then(() => {
    console.log(`setTimeoutWrappedInPromise ${ms}ms`);
  })

const setTimeoutAfterResolve = (ms: number): Promise<string> => {
  return new Promise((resolve) => {
    resolve(`setTimeoutAfterResolve`);
    setTimeout(() => {
      console.log(`setTimeoutAfterResolve ${ms}ms`);
    }, ms);
  });
};

const t2 = 4000;
setTimeoutAfterResolve(0)
  .then(() => console.log('.then for setTimeoutAfterResolve'));

console.log('sync end');