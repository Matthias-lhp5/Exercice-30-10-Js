let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];
const contentTableau = document.getElementById('contentTableau')


let trBalise = document.createElement('tr');

trBalise.innerHTML = `<td>Mark<td>`

console.log(trBalise)

languages.forEach(element => contentTableau.innerHTML += `<tr><td>${element}</td></tr>`);

  