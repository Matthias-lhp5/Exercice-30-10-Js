var number = prompt(number)

function testNum(a) {
    let result;
    if (a > 18) {
      result = 'Vous êtes majeur';
    } else {
      result = 'Vous êtes mineur';
    }
    return result;
  }
  
  alert(testNum(number));