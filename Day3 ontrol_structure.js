let val = -5;

console.log(val > 0 ? "positive" : val == 0 ? "zero" : "negetive");

let age = 15;
console.log(age < 18 ? "not eligibale" : "eligible");

let key = 1;
switch (key) {
  case 1:
    console.log(key);
    break;

  default:
    break;
}

let year = 2000;

console.log(
  (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0 && year % 100 !== 0)
    ? "year leap year"
    : "not leap year"
);
