let g = prompt("Eingabe Ihr Geschlecht");
let h = parseInt(prompt("Eingabe Ihre Höhe"));
if (g == "male") {
    if (h >= 170 && h <= 185) {
        alert("Ihre Höhe ist normal");
    }
    else {
        alert("Ihre Höhe ist nicht normal");
    }
}

if (g == "female") {

    if (h >= 160 && h <= 175) {
        alert("Ihre Höhe ist normal");
    }
    else {
        alert("Ihre Höhe ist nicht normal");
    }
}





