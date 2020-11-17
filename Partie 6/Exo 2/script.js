let nombreStart = 1;
let nombreEnd = 100;

const afficheNombre = document.getElementById('afficheNombre')

for(let nombre = nombreStart; nombre <= nombreEnd ; nombre++){
    if(nombre % 15 == 0){
        afficheNombre.innerHTML += `<li>...</li>`
    } else{
        afficheNombre.innerHTML += `<li>${nombre}</li>`
    }


}