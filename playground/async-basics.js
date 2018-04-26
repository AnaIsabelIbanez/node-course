console.log('starting app');

setTimeout(() => {
  console.log('inside of callback');
}, 2000);

setTimeout(() => {
  console.log('timeout 2');
}, 0);

console.log('Finishing up');