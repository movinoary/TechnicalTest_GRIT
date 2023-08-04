let value = 20;

let array = new Array(value);

array.fill(0);

array[0] = 0;
array[1] = 1;

for (let i = 2; i <= value; i++) {
  array[i] = array[i - 1] + array[i - 2];
}

console.log(array);
