function verifyPassword()
{

    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    if ( password.value == confirmPassword.value )
    {
        password.className="borderGreen";
        confirmPassword.className="borderGreen";
    }   
        else 
        {
            password.className="borderRed";
            confirmPassword.className="borderRed";
        }

}