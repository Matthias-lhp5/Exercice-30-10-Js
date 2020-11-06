function verifyFormulary(){

    let regexEmail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    let regexName = new RegExp(/^[A-Za-z]*$/);
    let regexAge = new RegExp(/^[0-9]*$/);

    let elementEmail = document.getElementById('email');
    let elementAge = document.getElementById('age');
    let elementName = document.getElementById('name');

    if(regexName.test(elementName.value))
    {
        elementName.style.borderColor="green";
        document.getElementById('errorName').textContent=""
    }   else
        {
            elementName.style.borderColor="red";
            document.getElementById('errorName').textContent="Ceci n'est pas un nom !"
        };

    if(regexEmail.test(elementEmail.value))
    {
        elementEmail.style.borderColor="green";
        document.getElementById('errorEmail').textContent=""
    }   else
        {
            elementEmail.style.borderColor="red";
            document.getElementById('errorEmail').textContent="Ceci n'est pas un email !"
        };
    
    if(regexAge.test(elementAge.value))
    {
        elementAge.style.borderColor="green";
        document.getElementById('errorAge').textContent=""
    }   else
        {
            elementAge.style.borderColor="red";
            document.getElementById('errorAge').textContent="Ceci n'est pas un age !"
        };    
}