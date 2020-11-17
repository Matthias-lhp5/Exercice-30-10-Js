let textContent = document.getElementById('textContent');

let buttonBold = document.getElementById('buttonBold');
let buttonColor = document.getElementById('buttonColor');
let buttonSize = document.getElementById('buttonSize');

buttonSize.addEventListener('click', function(){

    if(textContent.className == 'sizing'){
        textContent.classList.remove('sizing');
    } else{
        textContent.classList.add('sizing');
    }
})
