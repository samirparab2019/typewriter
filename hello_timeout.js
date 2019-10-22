// setTimeout(function() {
//   console.log('first line');
// }, 1000);

// setTimeout(function() {
//   console.log('second line');
// }, 2000);

// setTimeout(function() {
//   console.log('third line');
// }, 3000);

const sentence = "hello there from lighthouse labs";

let count = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, count);
  count += 50;
};

setTimeout(() => {  
  process.stdout.write("\n");
}, count += 50);





