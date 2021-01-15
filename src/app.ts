// resources
// https://www.youtube.com/watch?v=vn3tm0quoqE&t=613s
// https://medium.com/jspoint/javascript-promises-and-async-await-as-fast-as-possible-d7c8c8ff0abc
// https://stackoverflow.com/questions/39988890/do-javascript-promises-block-the-stack

// syncronous
// microtask = fulfilled promise (mdn - promise callbacks): gets called before the next event loop
// macrotask | task | task queue = setTimeout, setInterval: gets executed on the next event loop

const resolveAfter2Seconds = async (): Promise<string> => {
  console.log('starting slow promise');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('slow');
      console.log('slow promise is done');
    }, 10000);
  });
};

const resolveAfter1Second = async (): Promise<string> => {
  console.log('starting fast promise');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('fast');
      console.log('fast promise is done');
    }, 5000);
  });
};

console.time('id');

const parallel = async () => {
  const [slow, fast] = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second()
  ]);
  console.log(slow);
  console.log(fast);
  console.timeEnd('id');
};

parallel();