let day = Math.floor(Math.random() * 7) + 1;
let dayStr = "";

switch (day) {
    case 1:
        dayStr = "Lundi";
        break;
    case 2:
        dayStr = "Mardi";
        break;
    case 3:
        dayStr = "Mercredi";
        break;
    case 4:
        dayStr = "Jeudi";
        break;
    case 5:
        dayStr = "Vendredi";
        break;
    case 6:
        dayStr = "Samedi";
        break;
    case 7:
        dayStr = "Dimanche";
        break;
}

alert("Random day numéro " + day + " " + dayStr);