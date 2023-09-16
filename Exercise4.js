const carBrands = ["Ford", "VW", "Toyota", "Volvo"];

//reference til id i html for valg af bil.
const carSelect = document.getElementById("car-selector");
const carMake = document.getElementById("car-make");

//anvender carBrand Array elementet via forEach til carSelect option, for derved at kunne vælge i html.  
carBrands.forEach((car) => {
    // Nyt element "option" laves for hver carBrand der itereres, skal tilføjes carSelect elementet. 
    const option = document.createElement("option");
    //value tilføjes car element anvendt i loop (senere car-make)
    option.value = car;
    option.textContent = car;
    //appendChild DOM metode der tilføjer parentElement et childElement, her hvilken bil der vælges i menuen.
    carSelect.appendChild(option);
})



//"lytter" til hvad der ønskes at ændre, tager en funtion med der anvendes ved ændringer.
carSelect.addEventListener("change", () =>{
    //henter værdien der ønskes ændret
    const value = carSelect.value;
    //ændre værdien til det ønskede
    carMake.textContent = value;
});