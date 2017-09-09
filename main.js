// h1 is visible to code below?
require('./main.css');

// constant here
const name = 'Scotch.io';

// time out for 300 ms, then we print, with var name
// () => {}, in es6
// ${name} in string
setTimeout(() => alert(`Hello there from ${name}`), 300);
