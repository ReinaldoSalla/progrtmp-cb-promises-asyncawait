// resources
// https://www.youtube.com/watch?v=vn3tm0quoqE&t=613s
// https://medium.com/jspoint/javascript-promises-and-async-await-as-fast-as-possible-d7c8c8ff0abc
// https://stackoverflow.com/questions/39988890/do-javascript-promises-block-the-stack


// syncronous
// microtask = fulfilled promise (mdn - promise callbacks): gets called before the next event loop
// macrotask | task | task queue = setTimeout, setInterval: gets executed on the next event loop

const getFrontend = async (): Promise<string> => {
  await new Promise((res) => setTimeout(() => res(''), 1000));
  return 'react';
};

const getBackend = async (): Promise<string> => {
  await new Promise((res) => setTimeout(() => res(''), 1000));
  return 'node';
};

console.time('id');

const getFullStack = async (): Promise<void> => {
  // const [frontend, backend] = await Promise.all([getFrontend(), getBackend()]);
  const frontend = getFrontend();
  const backend = getBackend();
  const result = await Promise.all([frontend, backend]);
  console.log(result);
  console.timeLog('id');
};

getFullStack();