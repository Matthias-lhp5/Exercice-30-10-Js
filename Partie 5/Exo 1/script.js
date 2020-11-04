function verifyPassword()
{

    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    if ( password.value == confirmPassword.value )
    {
        password.style.borderColor="green";
        confirmPassword.style.borderColor="green";
    }   
        else 
        {
            password.style.borderColor="red";
            confirmPassword.style.borderColor="red";
        }

}