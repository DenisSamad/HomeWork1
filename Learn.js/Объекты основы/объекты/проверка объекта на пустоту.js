// Задача: Проверка на пустоту
function Empty(obj){
    for(let key in obj) {
      return false;
    }
    return true;  
  }