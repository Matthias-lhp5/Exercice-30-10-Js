let paragraphe = document.getElementById('paragraphe')

window.addEventListener('scroll', () => {
    
    let test = window.scrollY

    let fusion = test/30+'px'

    if (window.scrollY > 400 && window.scrollY < 1000){
        paragraphe.style.fontSize=fusion
    }

});