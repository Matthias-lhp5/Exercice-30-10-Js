let parent = document.getElementById('user')

function clonage(){

    let aRecup = document.getElementById('aRecup')
    let aRecupClonage = aRecup.cloneNode(true)

    parent.appendChild(aRecupClonage);
}