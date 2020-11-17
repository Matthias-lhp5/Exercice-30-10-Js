const arrayA = document.querySelectorAll('li a');
console.log(arrayA);

arrayA[0].onclick = function(event){
    event.preventDefault();
    fable1.scrollIntoView(
        {behavior : 'smooth'});
};

arrayA.forEach(button => button.onclick = function(event) {
    
    event.preventDefault();
    
    document.querySelector(this.getAttribute("href")).scrollIntoView(
        {behavior: "smooth"});

});