
const BASE_URL = `http://localhost:3000/api/`;
const resultDiv = document.getElementById('result-div');
const urlDiv = document.getElementById('url-link');
const btnCustomer = document.getElementById('user-data');
const btnShip = document.getElementById('ship-data');
const btnItinerary = document.getElementById('itinerary-date');

btnCustomer.addEventListener('click', async () =>{
    try {
        let response = await axios.get(`${BASE_URL}customers`);
        console.log(response.data.customers);
        renderData(response.data.customers);

    } catch (error) {
        console.error(error);
    }
})


function renderData(data){
    
    const pEle = document.createElement('p');
    pEle.innerHTML = `API LINK: ${BASE_URL}customers`;
    urlDiv.appendChild(pEle);

    for(let i = 0; i < data.length; i++){
    const divCustomer = document.createElement('div');
    divCustomer.className = "div-customer";
    const customer = document.createElement('div');
    customer.innerHTML += `Customer ${i + 1}`;
    const name = document.createElement('div');
    name.innerHTML += `Customer name : ${data[i].customer.first_name} ${data[i].customer.last_name}<br>`;
    const email = document.createElement('div');
    email.innerHTML += `Email: ${data[i].customer.email_id}<br>`;
    const city = document.createElement('div');
    city.innerHTML += `From: ${data[i].Address.city}, ${data[i].Address.state}<br>`;
    const shipid = document.createElement('div');
    shipid.innerHTML += `Ship id: ${data[i].ship_Itinerary.ship}<br>`;
    const shipRoute = document.createElement('div');
    shipRoute.innerHTML += `Ship Route: ${data[i].ship_Itinerary.ship_route}<br>`;
    const shipDate = document.createElement('div');
    shipDate.innerHTML += `Trip start Date: ${data[i].ship_Itinerary.ship_startDate}<br>
    Trip start Date: ${data[i].ship_Itinerary.ship_endDate} <br> `;
    const paymentDate = document.createElement('div');
    paymentDate.innerHTML += `Payment Date: ${data[i].transaction.payment_date}<br>`;
    const mealPref = document.createElement('div');
    mealPref.innerHTML += `Meal preference: ${data[i].meal.meal_preference} <br>
                            Food allergies: ${data[i].meal.food_allergies}<br>
                            ***************************************************<br>`;
    divCustomer.append(customer,name,email,city,shipid,shipRoute,shipDate,paymentDate,mealPref);
    resultDiv.appendChild(divCustomer);
    
    // resultDiv.innerHTML += `customer name : ${data[i].customer.first_name} <br><br>`
    }
      
}

btnShip.addEventListener('click', async () =>{
    try {
        let response = await axios.get(`${BASE_URL}ships`);
        console.log(response.data);
        //renderShipData(response.data);

    } catch (error) {
        console.error(error);
    }
})

function renderShipData(data){
    const divShip = document.createElement('div');
    divCustomer.className = "div-ship";
    const ship = document.createElement('div');
    ship.inn


}



 // const heading = document.createElement('h6');
    // const divHead = document.createTextNode(heading);
    // divHead.innerHTML = `Customer ${i + 1}`;
    // heading.appendChild(divHead);
    // divCustomer.appendChild(heading);
    // const custName = document.createElement('h5');
    // const custTxtN = document.createTextNode(custName);
    // custTxtN.innerHTML += `Name: ${data[i].customer.first_name} ${data[i].customer.first_name}<br>`;
    // custName.appendChild(custTxtN);
    // divCustomer.appendChild(heading);
    // divCustomer.appendChild(custName);





// resultDiv.innerHTML +=  `${JSON.parse(data[i])}<br><br>`;
//resultDiv.innerHTML +=  `${JSON.stringify(data[i])}<br><br>`;

// const dt = JSON.stringify(data);
// console.log(dt);
  
// resultDiv.innerHTML = dt[i];