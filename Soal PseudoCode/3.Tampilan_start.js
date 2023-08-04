let x = 10;
let string = "";

for (let i = 1; i <= x; i++) {
  for (let s = 0; s < i; s++) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);

// console.log(string);
