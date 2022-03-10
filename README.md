# Mod2-RestAPI-mongodb-mongoose-express-router


###It is a cruise customer data REST API. Users can get information using the API call. Users can create  new customers,modify customer. Also can modify guest, and itinerary data. 

    ### User can:
        1. get customer data
        2. get customer data by Id
        3. get itinerary data
        4. get itinerary data by Id
        5. get guest data
        6. get guest data by Id
        7. get ships data
        8. post customer data
        9. put customer data by Id
        10. put guest data by Id
        11. delete customer by Id
    
#Instructions on Installing & Running Locally
-------------------
Cruise API is deployed on Heroku, below is the link to root directory.

LINK : https://your-new-heroku-app-name.herokuapp.com/api/

Running on browser: Copy and paste the LINK on any web browser, and it displays the results with different end points

Using postman: Users can use the postman browser/desktop app to test the link and see data.


For running locally:

    * clone the project to your local system
    * VS Code Terminal
        * npm init -y
        * npm i mongoose
        * npm i express
        * npm install --save-dev nodemon
        * add below lines to package.json's scripts tag:
            "scripts": {
                    "start": "node server.js",
                    "dev": "nodemon server.js"
                        }
        * run node/seed/.guests.js
        * npm run start

#Endpoints, Parameters, Schema
-----------------

BASE-URL:https://your-new-heroku-app-name.herokuapp.com/api/

1. Customer end points:

*  GET: /customers
  ##### result: gets all customer data.

   ##### example: https://your-new-heroku-app-name.herokuapp.com/api/customers.

*  GET: /customers/:id
   ##### result: gets the customer data matches with the id.

  ##### example: https://your-new-heroku-app-name.herokuapp.com/api/customers/6227c561b708d394817eb362

*  POST: /customers
   ##### result: creates new customer.
   ##### Important: 
   * If user enters duplicate values for unique fields, the validation fails and null will be inserted in that field. (still need validation in post method).
   * If the record is successfully inserted without nulls, the data will be visible in guest, transaction, itinerary, and meal collection. 
   
   
   example: https://your-new-heroku-app-name.herokuapp.com/api/customers
   
   sample data: 
            
        {
            "customer": 
                {
                "first_name": "Nickolas",
                "last_name": "Faldi",
                "email_id": "Nick.Faldi@gmail.com"  ---> Unique
                
                },
            "age": "33",
            "gender": "male",
            "Address": {
                "street": "25B Robert Ave",
                "city": "Little Rock",
                "state": "AR",
                "zip": 51234,
                "country": "USA"
            },
            "passportNo": "GA2233449", ---> Unique
            "ship_Itinerary": {
                "ship": "6225f408d8fed7c180c54814", <---- this is object_id of the ship
                "ship_route": "Seattle, United States - Icy Strait Point, United States - Skagway, United States - Cruising Dawes Glacier, United States - Victoria, Canada - Seattle, United States",
                "ship_port": "Seattle, United States",
                "ship_startDate": "2022-05-16T16:00:00",
                "ship_endDate": "2022-05-23T07:00:00",
                "ship_roomType": "Ocean View",
                "ship_roomPrice": 800
            },
            "transaction": {
                "account_id": "CDA25",    ---> Unique
                "payment_type": "CREDIT CARD",
                "card_number": 4455875522221239,  ---> Unique
                "paid_Amount": 2400
            },
            "meal": {
                "meal_preference": "Vegetarian",
                "food_allergies": "none"
            }
        }
        
      
*  PUT: /customers/:id

   ##### result: modifies customer data by customer id.

   ##### example: https://your-new-heroku-app-name.herokuapp.com/api/customers/6228ce0cb43364a04fb9367f
   
   ##### Important: user can only modify age, gender, address, passportNo. Since other data is reference data,users can only modify it through respective put methods of those collections.
   
   sample data: 
   
        {
            "age": "38",
            "Address": {
                "city": "Flushing",
                "state": "NY"
            },
            "passportNo": "G221A1234"  <---- Unique
        }
* DELETE: /customers/:id

    ##### result: deletes customer data by customer id.

   ##### example: https://your-new-heroku-app-name.herokuapp.com/api/customers/62262913f77c85d0640c6433
   
   If there is a match with the id, customer will be deleted from database.
   
   
2. Itinerary end points

    *  GET: /itinerary
    
  ##### result: gets all itinerary data.

   ##### example: https://your-new-heroku-app-name.herokuapp.com/api/itinerary

    *  GET: /itinerary/:id
    
   ##### result: gets the itinerary data matches with the id.

  ##### example: https://your-new-heroku-app-name.herokuapp.com/api/itinerary/6227c561b708d394817eb35d
  
3. Guest end points

    *  GET: /guest
    
  ##### result: gets all guest data.

   ##### example: https://your-new-heroku-app-name.herokuapp.com/api/guest

    *  GET: /guest/:id
    
   ##### result: gets the guest data matches with the id.

  ##### example: https://your-new-heroku-app-name.herokuapp.com/api/guest/6228ce0cb43364a04fb93681
  
    * PUT:  /guest/:id
    
    ##### result: modifies guest data by guest id.
    
    ##### example: https://your-new-heroku-app-name.herokuapp.com/api/guest/622909fea91ec53cef36046a
    
    sample data: 
    
    {
    "first_name": "Karen",
    "last_name": "Mars",
    "email_id": "K.Mars@gmail.com"
    }

4. Ship end points

    *  GET: /ships

    ##### result: gets all ship data.

   ##### example: https://your-new-heroku-app-name.herokuapp.com/api/ships


### Schema:

ship schema: 

        ship_name: {type: String, required: true},
        ship_capacity: {type: Number, required: true},
        ship_crew: {type: String, required: true}

guest schema: 
        
          
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        email_id: {type: String, unique: true, required: true}
        
itinerary:

        guest: {type: Schema.Types.ObjectId, ref: 'guests', required: true},
        ship: {type: Schema.Types.ObjectId, ref: 'ships', required: true},
        ship_route: {type: String, required: true},
        ship_port: {type: String, required: true},
        ship_startDate: {type: Date, required: true},
        ship_endDate: {type: Date, required: true},
        ship_roomType: {type: String, required: true},
        ship_roomPrice: {type: Number, required: true}

transaction:

        guest: {type: Schema.Types.ObjectId, ref: 'guests', required: true},
        account_id: {type: String, unique: true, required: true},
        payment_type: {type: String, required: true},
        card_number: {type: Number, unique: true, required: true},
        paid_Amount: {type: Number, required: true},                         
        payment_date: {type: Date, default: Date.now, required: true}
        
meal: 

        guest: {type: Schema.Types.ObjectId, ref: 'guests', required: true},
        meal_preference: {type: String, required: true},
        food_allergies: {type: String, required: true}

address: 

        street: {type: String, required: true}
        city: {type: String, required: true}
        state: {type: String, required: true}
        zip: {type: Number, required: true}
        country: {type: String, required: true}

customer:

        customer: {type: Schema.Types.ObjectId, ref: 'guests' , required: true}
        age: {type: String, required: true}
        gender: {type: String, required: true}
        Address: Address,
        passportNo: {type: String, unique: true, required: true}
        ship_Itinerary: {type: Schema.Types.ObjectId, ref: 'itineraries', required: true}
        transaction: {type: Schema.Types.ObjectId, ref: 'transactions', required: true}
        meal: {type: Schema.Types.ObjectId, ref: 'meals', required: true}
    