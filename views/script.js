
const BASE_URL = `http://localhost:3000/api/`;
const resultDiv = document.getElementById('result-div');
const urlDiv = document.getElementById('url-link');
const btnData = document.getElementById('user-data');

btnData.addEventListener('click', async () =>{
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
        
    resultDiv.innerHTML += `customer name : ${data[i].customer.first_name} <br><br>`
    }
      
}









// resultDiv.innerHTML +=  `${JSON.parse(data[i])}<br><br>`;
//resultDiv.innerHTML +=  `${JSON.stringify(data[i])}<br><br>`;

// const dt = JSON.stringify(data);
    // console.log(dt);
  
    // resultDiv.innerHTML = dt[i];