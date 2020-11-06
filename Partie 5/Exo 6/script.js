function focusFormulaire (a){

    document.getElementById(a).style.borderColor='black'

}

function blurFormulaire (a){

    document.getElementById(a).removeAttribute('style','borderColor')
}