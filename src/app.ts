// resources
// https://www.youtube.com/watch?v=vn3tm0quoqE&t=613s
// https://medium.com/jspoint/javascript-promises-and-async-await-as-fast-as-possible-d7c8c8ff0abc

// syncronous
// microtask = fulfilled promise: gets called before the next event loop
// macrotask = setTimeout, setInterval: gets executed on the next event loop

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