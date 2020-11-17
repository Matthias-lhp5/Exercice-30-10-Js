let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(element => {

    let contentTable = document.getElementById('contentTable');
    contentTable.innerHTML += `<tr><td>${element}</tr></td>`;
    console.log(element);
    
});