// Случайное целое число от min до max

function randomInt(min, max) {
  let randomNum = (max - min + 1) * Math.random() + min;
  return Math.floor(randomNum);
}

