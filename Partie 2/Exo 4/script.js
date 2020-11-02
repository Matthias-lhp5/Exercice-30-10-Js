var number = prompt(number)

function testNum(a) {
    let result;
    if (a < 4) {
      result = 'Nul';
    } else if (a < 7) {
      result = 'Moyen';
    }
    else if (a < 9){
        result = 'Assez bien'
    }
    else if (a < 10){
        result = 'Bien'
    }
    else{
        result = 'Excellent'
    }
    return result;
  }
  
  alert(testNum(number));