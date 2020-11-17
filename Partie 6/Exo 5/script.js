let listNombre = document.getElementById('listNombre');

let nombrePremier = 2;
let nombreDeuxieme = 3;
let resultat = 0;

while((nombrePremier * nombreDeuxieme) < 250){
    resultat = nombrePremier * nombreDeuxieme;
    nombreDeuxieme = resultat;
    console.log(resultat);

    listNombre.innerHTML += `<li>Le résultat est : ${resultat}</li>`
}