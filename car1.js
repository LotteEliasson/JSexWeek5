const SERVER_URL = "http://localhost:6767/api/cars"

document.getElementById("btn-get-all").addEventListener('click', getAllCars) //lytter til klik, samt referere til funktionen(benævnelse), def af funk efterfølgende
document.getElementById("btn-find-car").addEventListener('click', getACar)
document.getElementById("add-car").addEventListener('click', addCar)
document.getElementById("edit-car-button").addEventListener('click', editCar);
document.getElementById("submit-edited-car").addEventListener('click', submitEditedCar)



//--------EDIT CAR--------------
//----Note primært ChatGPT code for at finde denne løsning og alligevel har jeg lidt svært ved at få den til at fungere-------
function editCar(){

    const id = document.getElementById("edit-car").value;
    if (!id) {
        return alert("Please enter a valid car ID");
    }

    fetch(SERVER_URL+"/"+id)
    .then(response => {
        if(!response.ok){
            return alert("car not Found")
        }
        return response.json()
    })
    .then(carData => {
        // Display the retrieved car data for editing (e.g., populate form fields)
        populateEditForm(carData);
    })
    .catch(error => {
        console.error("Error fetching car data:", error);
    });
}

function populateEditForm(carData) {
    // Populate your HTML form fields with the carData
    // For example:
    document.getElementById("edit-brand").value = carData.brand;
    document.getElementById("edit-model").value = carData.model;
    document.getElementById("edit-pricePrDay").value = carData.pricePrDay;
    document.getElementById("edit-bestDiscount").value = carData.bestDiscount;
}


function submitEditedCar() {
      const id = document.getElementById("edit-car").value;

    // Extract edited data from your HTML form fields
    const editedData = {
        brand: document.getElementById("edit-brand").value,
        model: document.getElementById("edit-model").value,
        pricePrDay: parseFloat(document.getElementById("edit-pricePrDay").value),
        bestDiscount: parseInt(document.getElementById("edit-bestDiscount").value)
    };

    // Send a PUT request to update the car data
    fetch(SERVER_URL + "/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedData)
    })
    .then(response => {
        if (!response.ok) {
            return alert("Failed to update car data");
        }
        return response.json();
    })
    .then(updatedCarData => {
        // Handle the response or update the UI as needed
        console.log("Car data updated:", updatedCarData);
    })
    .catch(error => {
        console.error("Error updating car data:", error);
    });
}



//-------------ADD CAR----------------------------------


function addCar(){
const form = document.getElementById('carForm');
  const newCar = {
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: parseFloat(form.pricePrDay.value),
    bestDiscount: parseInt(form.bestDiscount.value),
  };
  console.log(newCar);
}


//---------GET ONE CAR------------------------------------------

function getACar(){
    const id = document.getElementById("text-for-id").value
    fetch(SERVER_URL+"/"+id)
    .then(response => {
        if(!response.ok){
            return alert("car not Found")
        }
        return response.json()

    })
    .then(car=> {
    document.getElementById("found-car").innerText = JSON.stringify(car,null,2)
})
}

//------------GET ALL CARS-----------------------------
function getAllCars(){
    alert('clicked') //test at eventListener virker.
    fetch(SERVER_URL)
    .then(responses => responses.json())
    .then((cars) => {     // her får man adgangen til cars! cars er en function (callback) som bliver kaldt af fetch
        //map kalder function cars (<tr>) for hver car
            const tabelRows = cars.map(car => `        
                <tr>
                    <td>${car.id}</td>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.PricePrDay}</td>
                    <td>${car.bestDiscount}</td>
                </tr>
            `)
            
            const rowsAsString = tabelRows.join("") //redef som String -> bliver til rækker i html.

            //innerHTML husk at sikre mod udefrakommende data. 
            document.getElementById("tbody").innerHTML = rowsAsString

    }) 

}




  