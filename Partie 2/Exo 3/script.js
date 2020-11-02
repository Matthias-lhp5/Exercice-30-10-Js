var number = prompt(number)

function testNum(a) {
    let result;
    if (a%2 == 0) {
      result = 'Nombre Pair';
    } else {
      result = 'Nombre impair';
    }
    return result;
  }
  
  alert(testNum(number));