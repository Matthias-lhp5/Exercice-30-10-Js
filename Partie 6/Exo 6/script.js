let listNombre = document.getElementById('listNombre');

let premierNombre = 2;
let deuxiemeNombre = 10;
let x = 0;

while((deuxiemeNombre / premierNombre) > 1){

    x = deuxiemeNombre / premierNombre;
    resultat = Math.round(x * 100) / 100;
    premierNombre = resultat + premierNombre;
    listNombre.innerHTML += `<li>Le résultat est : ${resultat}</li>`;

}
