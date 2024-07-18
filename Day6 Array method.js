let arr = [5, 1, 2, 3, 4, 7, 8];
arr.push(10);
console.log(arr);
arr.unshift(10);
console.log(arr);

arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

let x = arr.map((element) => element * 2);
console.log(x);

let x1 = arr.filter((element) => element % 2 !== 0);
console.log(x1);

let x2 = arr.reduce((acc, cum) => {
  return (acc += cum);
}, 0);
console.log(x2);
