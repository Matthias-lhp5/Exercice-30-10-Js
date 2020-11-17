let buttonClick = document.getElementById('buttonClick');

buttonClick.addEventListener('click', function(){

    let premierNombre = document.getElementById('numberPremier').value;
    let deuxiemeNombre = document.getElementById('numberDeuxieme').value;

    let resultat = premierNombre * deuxiemeNombre;

    let affichageResultat = document.getElementById('affichageResultat');

    affichageResultat.innerHTML = `Le résultat de l'opération ${premierNombre} * ${deuxiemeNombre} est : ${resultat}`;
    
});