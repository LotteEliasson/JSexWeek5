const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];


  //Laver tabellen af biler via id tbody til html
  function tableCars(cars){
    const body = document.getElementById('tbody');
    body.innerHTML = '';

    const rows = cars.map((car) => {
        return `
        <tr>
            <td>${car.id}</td>
            <td>${car.year}</td>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.price}</td>
        </tr>
        `;

    });
    body.innerHTML = rows.join(''); 
  }

  tableCars(cars);
  

  
// filtrere cars via eventlistener for en given pris og returnerer en ny filtreret tabel
const filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', () => {
  const carFilter = document.getElementById('carFilter');
  const value = parseFloat(carFilter.value);

  if (!isNaN(value)) {
    const carsByPrice = cars.filter((car) => car.price < value);
    tableCars(carsByPrice);
  }
});



const clearBtn = document.getElementById('clearFilter'); 
clearBtn.addEventListener('click', () => {
    const carFilter = document.getElementById('carFilter'); 
    carFilter.value = '';

    tableCars(cars);
});