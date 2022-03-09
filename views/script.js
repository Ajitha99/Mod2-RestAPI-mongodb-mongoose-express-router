
// const BASE_URL = `http://localhost:3000/api/`;
const BASE_URL = `https://your-new-heroku-app-name.herokuapp.com/api/`;
const resultDiv = document.getElementById('result-div');
const urlDiv = document.getElementById('url-link');
urlDiv.style.display = "none";
urlDiv.style.border = "thick solid rgb(228, 81, 13)";
const btnCustomer = document.getElementById('user-data');
const btnShip = document.getElementById('ship-data');
const btnItinerary = document.getElementById('itinerary-date');
const divCustomer = document.createElement('div');
divCustomer.className = "div-customer";
const divShip = document.createElement('div');
divShip.className = "div-ship";
const divItinerary = document.createElement('div');
divItinerary.className ="div-itinerary"

btnCustomer.addEventListener('click', async () =>{
    try {
        let response = await axios.get(`${BASE_URL}customers`);
        console.log(response.data.customers);
        // urlDiv.removeChild()
        renderData(response.data.customers);
        
    } catch (error) {
        console.error(error);
    }
})


function renderData(data){

    urlDiv.innerHTML =" ";//clears data before appending new data
    urlDiv.style.display = "block";
    const pEle = document.createElement('p');
    pEle.innerHTML = `API LINK: ${BASE_URL}customers`;
    urlDiv.appendChild(pEle);
    // urlDiv.replaceWith(pEle);

    for(let i = 0; i < data.length; i++){
    
    const customer = document.createElement('div');
    customer.innerHTML += `Customer ${i + 1}`;
    customer.style.textDecorationLine = "underline";
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
                            Food allergies: ${data[i].meal.food_allergies}<br><br>
                            ***************************************************<br>`;
    divCustomer.append(customer,name,email,city,shipid,shipRoute,shipDate,paymentDate,mealPref);
    resultDiv.innerHTML = " ";//clears data before appending new data
    resultDiv.appendChild(divCustomer);
    
    // resultDiv.innerHTML += `customer name : ${data[i].customer.first_name} <br><br>`
    }
      
}

btnShip.addEventListener('click', async () =>{
    try {
        let response = await axios.get(`${BASE_URL}ships`);
        console.log(response.data);
        renderShipData(response.data);

    } catch (error) {
        console.error(error);
    }
})

function renderShipData(data){
    // console.log(data);
    urlDiv.innerHTML =" ";//clears data before appending new data
    const pEle = document.createElement('p');
    pEle.innerHTML = `API LINK: ${BASE_URL}ships`;
    urlDiv.appendChild(pEle);
    for(let i = 0; i < data.length; i++){
        console.log(data.length);
        // console.log(data[i].ship_name);
        // const divShip = document.createElement('div');
        // divShip.className = "div-ship";
        const ship = document.createElement('div');
        ship.innerHTML += `Ship ${i+1}`;
        ship.style.textDecorationLine = "underline";
        const shipName = document.createElement('div');
        shipName.innerHTML += `Ship name : ${data[i].ship_name}<br>`;
        const shipCapacity = document.createElement('div');
        shipCapacity.innerHTML += `Ship Capacity : ${data[i].ship_capacity}<br>`;
        const shipCrew = document.createElement('div');
        shipCrew.innerHTML += `Ship crew : ${data[i].ship_crew}<br><br>
                            **************************************************<br>`;
        divShip.append(ship,shipName,shipCapacity,shipCrew);
        resultDiv.innerHTML = " ";//clears data before appending new data
        resultDiv.appendChild(divShip);
    }
}

btnItinerary.addEventListener('click' , async ()=>{
    try {
        let response = await axios.get(`${BASE_URL}itinerary`);
        console.log(response.data.itineraries);
        renderShipItinerary(response.data.itineraries);
        
    } catch (error) {
        console.error(error);
    }
})

function renderShipItinerary(data){
    // console.log(data);
    urlDiv.innerHTML =" ";//clears data before appending new data
    const pEle = document.createElement('p');
    pEle.innerHTML = `API LINK: ${BASE_URL}itinerary`;
    urlDiv.appendChild(pEle);

    for(let i = 0; i < data.length; i++){
        console.log(data.length);
        const itinerary = document.createElement('div');
        itinerary.innerHTML += `Itinerary: ${i+1}`;
        itinerary.style.textDecorationLine = "underline";
        const custName = document.createElement('div');
        custName.innerHTML += `Customer Name : ${data[i].guest.first_name} ${data[i].guest.last_name}<br>`;
        const shipName = document.createElement('div');
        shipName.innerHTML += `Ship Name : ${data[i].ship.ship_name}<br>`;
        const shiproomType = document.createElement('div');
        shiproomType.innerHTML += `Ship room: ${data[i].ship_roomType}<br>`
        const shipPort = document.createElement('div');
        shipPort.innerHTML += `Port Name: ${data[i].ship_port}<br>`;
        const shipStartDate = document.createElement('div');
        shipStartDate.innerHTML += `Departure date: ${data[i].ship_startDate} <br>`;
        const shipEndDate = document.createElement('div');
        shipEndDate.innerHTML += `Arrival date: ${data[i].ship_endDate} <br><br>
                            **************************************************<br>`;
        divItinerary.append(itinerary,custName,shipName,shiproomType,shipPort,shipStartDate,shipEndDate);
        resultDiv.innerHTML = " ";//clears data before appending new data
        resultDiv.appendChild(divItinerary);
    }
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