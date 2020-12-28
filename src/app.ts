// resources
// https://www.youtube.com/watch?v=vn3tm0quoqE&t=613s
// https://medium.com/jspoint/javascript-promises-and-async-await-as-fast-as-possible-d7c8c8ff0abc

// syncronous
// microtask = fulfilled promise: gets called before the next event loop
// macrotask = setTimeout, setInterval: gets executed on the next event loop


/** 
 * Replace all characters in a string
 * @param {string} text Text to be replaced 
 * @param {string} pattern Basic pattern
 * @returns {Function} Returns the new replaced text
 * @example
 * relaceAll('test', 'x'); 
*/
// function replaceAll(text: string, pattern: string): string {
//   return text.split(pattern).join(pattern);
// }

setTimeout(() => console.log('setTimeout macrotask'), 0);

Promise.resolve().then(() => console.log('resolved promise microtask'));

console.log('syncronous');