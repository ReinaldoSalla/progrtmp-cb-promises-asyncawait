// resources
// https://www.youtube.com/watch?v=vn3tm0quoqE&t=613s
// https://medium.com/jspoint/javascript-promises-and-async-await-as-fast-as-possible-d7c8c8ff0abc
// https://stackoverflow.com/questions/39988890/do-javascript-promises-block-the-stack


// syncronous
// microtask = fulfilled promise (mdn - promise callbacks): gets called before the next event loop
// macrotask | task | task queue = setTimeout, setInterval: gets executed on the next event loop

// console.log('syncronous');

// Promise.resolve().then(() => console.log('resolved promise microtask'));

// setTimeout(() => console.log('setTimeout macrotask'), 0);





// const prevTime = Date.now();

// const log = (v: string) => {
//   console.log(`${v} elapsed: ${Date.now() - prevTime}ms`);
// };

// const codeBlocker = (): Promise<string> => {
//   // return new Promise((resolve) => {
//   //   let i = 0;
//   //   while (i < 1e9) {i++;}
//   //   resolve('codeBlock');
//   // })
//   return Promise.resolve().then(result => {
//     let i = 0;
//     while (i < 1e9) { i++ };
//     return '1 billion loops';
//   });
// };

// log('sync');

// codeBlocker()
//   .then(result => log(result));

// log('sync2');

// const promiseFunction = (): Promise<string> => {
//   return new Promise((resolve) => {
//     for (let i =0; i < 3e9; i++) {}
//     resolve('string returned inside functionPromise\n\n\n');
//   });
// };

// const promiseFunction = (): Promise<string | void> => {
//   return Promise.resolve()
//     .then(() => {
//       for (let i = 0; i < 3e9; i++) {}
//       return 'string returned inside functionPromise\n\n\n\n\n';
//     });
// };

// console.time('id');
// console.timeLog('id');
// console.log('sync code 1');

// promiseFunction()
//   .then((result: string | void): void => {
//     console.timeLog('id');
//     console.log(result);
//   });

// console.timeLog('id');
// console.log('sync code 2');

// console.log('sync 1');

// setTimeout(() => {
//   console.log('setTimeout, task queue');
// }, 0);

// const promiseFunction = () => {
//   return new Promise((res) => {
//     // console.log('about to execute an expensive computation 1');
//     // for (let i = 0; i < 3e9; i++) {}
//     res('async 1');
//   });
// };

// promiseFunction()
//   .then((result) => {
//     console.log('about to execute an expensive computation');
//     for (let i = 0; i < 3e9; i++) {}
//     console.log(result);
//   });

// console.log('sync 2');

// mdn order

// const promise = new Promise((res) => {
//   console.log('inside promise constructor')
//   res(0);
// })
// .then((result) => {
//     console.log(`inside resolved promise, result=${result}`)
//   });

// setTimeout(() => {
//   console.log('inside setTimeout');
// }, 0);

// console.log('top level code');