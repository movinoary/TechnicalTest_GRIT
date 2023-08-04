let x = 100;

let array = [];

for (let i = 50; i <= x; i++) {
  let start = "*";
  //   array[i] = "*" * i;
  //   array.push(i);
  if (i <= 60) {
    array[i] = i + " KURANG";
  } else if (i <= 70) {
    array[i] = i + " CUKUP";
  } else if (i <= 80) {
    array[i] = i + " BAIK";
  } else {
    array[i] = i + " LUAR BIASA";
  }
}

console.log(array);
