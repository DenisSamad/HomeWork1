// Случайное число от min до max

function randomNum(min, max){
    return (max - min) * Math.random() + min;
  }
  
  alert( randomNum(1, 5))