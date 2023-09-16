const divs = document.querySelectorAll("div");
const changeColorBnt = document.getElementById("changeColor")

//Laver tilføldige farver i hexdicimal farvekode
function colors(div){
    const hexColor = "0123456789ABCDEF";
    let finalColor = "#";
    for(let i = 0; i <6; i++){
        finalColor+=hexColor[Math.floor(Math.random() * 16)];
    }
    return finalColor;
}

//tildeler div elementer de tilfældige farver
for(let i = 0; i<divs.length; i++){
    colors(divs[i]);
}

//Funktion der tager div og ændre farven generet i Functionen colors
function changeColor(div){
    const changeColor = colors();
    div.style.backgroundColor = changeColor;
}


//Event listener, reagerer på click, samt anvender funktionen changeColor til at ændre farve ved click.
changeColorBnt.addEventListener("click", function(){
//Loop gennem div elementer, samt ændre deres farve
    for(let i=0; i<divs.length; i++){
        changeColor(divs[i]);
    }
})




