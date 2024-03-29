const db = require('../db');
const Guest = require('../models/guest');
const Itinerary = require('../models/itinerary');
const Transaction = require('../models/transaction');
const Meal = require('../models/meal');
const Ship = require('../models/ship');
const Customer = require('../models/customer');

const main = async () =>{
    //Creating Ships
    const ship1 = await new Ship({ ship_name: "Harmony of the Seas", ship_capacity: 5479, ship_crew: "deck and engineering crew, kitchen, service and hospitality, personal care and Medical crew" });
    ship1.save();

    const ship2 = await new Ship({ ship_name: "Symphony of the Seas", ship_capacity: 5400, ship_crew: "deck and engineering crew, kitchen, service and hospitality, personal care and Medical crew" });
    ship2.save();

    const ship3 = await new Ship({ ship_name: "Allure of the Seas", ship_capacity: 5400, ship_crew: "deck and engineering crew, kitchen, service and hospitality, personal care and Medical crew" });
    ship3.save();

    const ship4 = await new Ship({ ship_name: "Norwegian Bliss", ship_capacity: 4000, ship_crew: "deck and engineering crew, kitchen, service and hospitality, personal care and Medical crew" });
    ship4.save();

    const ship5 = await new Ship({ ship_name: "Quantum of the Seas", ship_capacity: 4905, ship_crew: "deck and engineering crew, kitchen, service and hospitality, personal care and Medical crew" });
    ship5.save();
//*********************************************************************************************************************************************************
    //Creating new guests
    const guest1 = await new Guest({   
        first_name:"Ron",
        last_name: "Ottawa",
        email_id: "ron.ottawa@hotmail.com"
       });
    guest1.save();
    const guest2 = await new Guest({   
        first_name:"Vienna",
        last_name: "Kim",
        email_id: "vk.3456@gmail.com"
       });
    guest2.save();
    
    const guest3 = await new Guest({   
        first_name:"Krishna",
        last_name: "Palli",
        email_id: "Kris.p@yahoo.com"
       })
    guest3.save();
//*********************************************************************************************************************************************************
       //Transaction data - and guest data connected through guest Object_id
    const transaction1 = await new Transaction(
        {
            guest: guest1._id,
            account_id: "CDA1",
            payment_type: "CREDIT CARD",
            card_number: "3511026704717280",
            paid_Amount: 1564,                         
            payment_date: new Date()
           }
    );
    transaction1.save();

    const transaction2 = await new Transaction(
        {
            guest: guest2._id,
            account_id: "CDA2",
            payment_type: "CREDIT CARD",
            card_number: "7511021111717280",
            paid_Amount: 2886,                         
            payment_date: new Date()
           }
    );
    transaction2.save();

    const transaction3 = await new Transaction(
        {
            guest: guest3._id,
            account_id: "CDA3",
            payment_type: "CREDIT CARD",
            card_number: "1111001111222280",
            paid_Amount: 1368,                         
            payment_date: new Date()
           }
    );
    transaction3.save();
//*********************************************************************************************************************************************************
           //Itinerary data - and guest data connected through guest Object_id and ship Object_id
    const itinerary1 = await new Itinerary(
        {
            guest: guest1._id,
            ship: ship1._id,
            ship_route: "Port Canaveral, USA, Florida - Nassau, Bahamas - Falmouth, Jamaica - Coco Cay, Labadee, Haiti, Port Canaveral, USA",
            ship_port: "Port Canaveral, USA, Florida",
            ship_startDate: "2022-03-13T17:00:00",
            ship_endDate: "2022-03-20T06:00:00" ,
            ship_roomType: "Ocean view",
            ship_roomPrice: 782
           }
    );
    itinerary1.save();
    const itinerary2 = await new Itinerary(
        {
            guest: guest2._id,
            ship: ship2._id,
            ship_route: "Miami, Florida - Philipsburg St. Maarten - St Thomas Island, Virgin Islands - Coco Cay, Bahamas - Miami, Florida",
            ship_port: "Miami, Florida, USA",
            ship_startDate: "2022-03-19T17:30:00",
            ship_endDate: "2022-03-26T06:00:00" ,
            ship_roomType: "suite",
            ship_roomPrice: 2886
           }
    );
    itinerary2.save();

    const itinerary3 = await new Itinerary(
        {
            guest: guest3._id,
            ship: ship3._id,
            ship_route: "Fort Lauderdale, United States- Cozumel, Mexico - Roatan, Honduras - Costa Maya, Mexico - Fort Lauderdale, United States",
            ship_port: "Fort Lauderdale, United States",
            ship_startDate: "2022-03-27T17:00:00",
            ship_endDate: "2022-04-02T06:15:00" ,
            ship_roomType: "Balcony",
            ship_roomPrice: 684
           }
    );
    itinerary3.save();
//*********************************************************************************************************************************************************
    //Meal data - and guest data connected through guest Object_id
    const meal1 = await new Meal(
        {
            guest: guest1._id,
            meal_preference: "Standard" ,
            food_allergies: "Peanuts, apricots"
            }
    );
    meal1.save();
    const meal2 = await new Meal(
        {
            guest: guest2._id,
            meal_preference: "Vegetarian" ,
            food_allergies: "None"
            }
    );
    meal2.save();
    const meal3 = await new Meal(
        {
            guest: guest3._id,
            meal_preference: "Vegan" ,
            food_allergies: "Milk, Eggs, Walnuts, Sunflower seeds"
            }
    );
    meal3.save();

//*********************************************************************************************************************************************************
//Creating customer data - with refereces other documents by guest (by guest Object_id),Itinerary(by itinerary Object _id), Transaction(by trnsaction Object _id), and Meal (by meal Object _id)
const customers = [
                    {
                        customer: guest1._id,
                        age: 50,
                        gender: "male",
                        Address: {
                            street: "7 Lyncoln dr" ,
                            city: "Edison",
                            state: "NJ",
                            zip:	08059,
                            country: "USA"
                                },
                        passportNo: "G00006789" ,
                        ship_Itinerary: itinerary1._id,
                        transaction: transaction1._id,
                        meal: meal1._id,
                    },
                    {
                        customer: guest2._id,
                        age: 35,
                        gender: "female",
                        Address: {
                            street: "3640 Colonel Glenn Hwy",
                            city: "Dayton",
                            state: "OH",
                            zip: 45435,
                            country: "USA"
                                },
                        passportNo: "H01101189" ,
                        ship_Itinerary: itinerary2._id,
                        transaction: transaction2._id,
                        meal: meal2._id,
                    },
                    {
                        customer: guest3._id,
                        age: 28,
                        gender: "male",
                        Address: {
                            street: "26120 104th Ave SE",
                            city: "Kent",
                            state: "WA",
                            zip: 98030,
                            country: "USA"
                                },
                        passportNo: "GH02201000" ,
                        ship_Itinerary: itinerary3._id,
                        transaction: transaction3._id,
                        meal: meal3._id,
                    }
                ]
    //inserting customers data to db
    await Customer.insertMany(customers);
    console.log("created Customers");

}

const run = async () => {
    await main();
    db.close()
}
run()


