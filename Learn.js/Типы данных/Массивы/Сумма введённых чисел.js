// Сумма введённых чисел

function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("введите число");
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
