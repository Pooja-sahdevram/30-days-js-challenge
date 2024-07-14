// activity 1
function calculate(a, b, opeartor) {
  switch (opeartor) {
    case "+":
      return console.log(a + b);
      break;
    case "-":
      return console.log(a - b);
      break;
    case "*":
      return console.log(a * b);
      break;
    case "/":
      return console.log(a / b);
      break;

    default:
      break;
  }
}

calculate(3, 5, "+");
calculate(3, 5, "-");
calculate(3, 5, "*");
calculate(3, 5, "/");

//activity2
let val = 5;
let val2 = 8;
// val2 += val;
// console.log(val2);
val2 -= val;
console.log(val2);

let a = 5,
  b = 7;
console.log("a>b: ", a > b, "a<b:", a < b, "a==b:", a == b, "a===b:", a === b);
console.log(5 && 7);
console.log(5 || 7);
console.log(4 > 4 ? "yes" : "no");
