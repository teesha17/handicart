const express=require('express');
const app=express();
const cors=require('cors');
const port =3000;
const mongodb=require('./db');
app.use(cors());

mongodb();
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))
app.use('/api',require("./Routes/CreateCart"))


app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
})







// const express = require('express');
// const paypal = require('paypal-rest-sdk');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());


// // PayPal configuration
// paypal.configure({
//     'mode': 'sandbox', //sandbox or live
//     'client_id': 'AcWleH1Go_hAAFM97iwoCOO_uZ3cKQqZivYrHpMpUpWPaCGv4mhXpPOeDM6coxe9yGh-2bDTUpT355iw',
//     'client_secret': 'EE4EE2SHVuc6rWjrPX_s7B3_U94T86anAbKR5CpokXPBfVa1wiCfC80X--tgN7iYY5eio5ss6KerHTlL'
// });

// // Define routes
// // Add routes for payment initiation, success, and failure

// app.post('/payment', async (req, res) => {

//     let data
//     const items = req.body.items;

//     let total = 0;
//     const item_list = items.map(item => {
//         // Ensure price is a number
//         const price = parseFloat(item.price);
        
//         if (isNaN(price)) {
//             throw new Error(`Invalid price for item: ${item.name}`);
//         }

//         total += price; 
//         return {
//             name: item.name,
//             price: price.toFixed(2), 
//             quantity:1, // Convert price to fixed decimal
//             currency: "USD",
//         };
//     });

    
//     try {

//         let create_payment_json = {
//             "intent": "sale",
//             "payer": {
//                 "payment_method": "paypal"
//             },
//             "redirect_urls": {
//                 "return_url": "http://localhost:5173/",
//                 "cancel_url": "http://localhost:5173/"
//             },
//             "transactions": [{
//                 "item_list": { items: item_list },
//                 "amount": {
//                     "currency": "USD",
//                     "total": total.toFixed(2)  // Set the total amount here
//                 },
//                 "description": "This is the payment description."
//             }]
//         };


//         await paypal.payment.create(create_payment_json, function (error, payment) {
//             if (error) {
//                 throw error;
//             } else {
//                 console.log("Create Payment Response");
//                 // console.log(payment);
//                 data = payment;
//                 res.json(data);

//             }
//         });


//     } catch (error) {
//         console.log(error);
//     }
// })


// app.get('/success', async (req, res) => {

//     try {

//         const payerId = req.query.PayerID;
//         const paymentId = req.query.paymentId;

//         const execute_payment_json = {
//             "payer_id": payerId,
//             "transactions": [{
//                 "amount": {
//                     "currency": "USD",
//                     "total": "1.00"
//                 }
//             }]
//         }


//         paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
//             if (error) {
//                 console.log(error)
//                 return res.redirect("http://localhost:5173/failed");
//             } else {
//                 console.log("Execute Payment Response");
//                 // console.log(payment);
//                 const response = JSON.stringify(payment);
//                 const parsedResponse = JSON.parse(response);

//                 const transactions = parsedResponse.transactions[0];

//                 console.log("transactions", transactions);

//                 return res.redirect("http://localhost:5173/success");
//             }
//         })


//     } catch (error) {
//         console.log(error);
//     }

// })


// app.get('/failed', async (req, res) => {

//     return res.redirect("http://localhost:5173/failed");
// })

// // Start the server
// app.listen(8000, () => {

//     console.log('Server is running on port 8000');
// });





// // const express = require('express');
// // const app = express();
// // const cors = require('cors');
// // const port = 3000;
// // const mongodb = require('./db');

// // // Enable CORS
// // app.use(cors());

// // // PayPal SDK setup
// // const paypal = require('paypal-rest-sdk');

// // // PayPal configuration
// // paypal.configure({
// //     'mode': 'sandbox', //sandbox or live
// //     'client_id': 'AcWleH1Go_hAAFM97iwoCOO_uZ3cKQqZivYrHpMpUpWPaCGv4mhXpPOeDM6coxe9yGh-2bDTUpT355iw',
// //     'client_secret': 'EE4EE2SHVuc6rWjrPX_s7B3_U94T86anAbKR5CpokXPBfVa1wiCfC80X--tgN7iYY5eio5ss6KerHTlL'
// // });

// // // Middleware to parse JSON
// // app.use(express.json());

// // // Route to handle payment initiation
// // app.get('/payment', async (req, res) => {
// //     const items = req.body.items;  // items received from frontend

// //     let total = 0;
// //     const item_list = items.map(item => {
// //         // Ensure price is a number
// //         const price = parseFloat(item.price);
        
// //         if (isNaN(price)) {
// //             throw new Error(`Invalid price for item: ${item.name}`);
// //         }

// //         total += price * item.quantity;  // Calculate total price
// //         return {
// //             name: item.name,
// //             price: price.toFixed(2),  // Convert price to fixed decimal
// //             currency: "USD",
// //         };
// //     });

// //     let create_payment_json = {
// //         "intent": "sale",
// //         "payer": {
// //             "payment_method": "paypal"
// //         },
// //         "redirect_urls": {
// //             "return_url": "http://localhost:5173/",
// //             "cancel_url": "http://localhost:5173/"
// //         },
// //         "transactions": [{
// //             "item_list": { items: item_list },
// //             "amount": {
// //                 "currency": "USD",
// //                 "total": total.toFixed(2)  // Set the total amount here
// //             },
// //             "description": "This is the payment description."
// //         }]
// //     };

// //     try {
// //         await paypal.payment.create(create_payment_json, function (error, payment) {
// //             if (error) {
// //                 throw error;
// //             } else {
// //                 console.log("Create Payment Response");
// //                 res.json(payment);  // Send PayPal payment response back to frontend
// //             }
// //         });
// //     } catch (error) {
// //         console.error('Payment Error:', error);
// //         res.status(500).json({ message: 'Payment creation failed' });
// //     }
// // });


// // // Route for successful payment
// // app.get('/success', async (req, res) => {
// //     const payerId = req.query.PayerID;
// //     const paymentId = req.query.paymentId;

// //     const execute_payment_json = {
// //         "payer_id": payerId,
// //         "transactions": [{
// //             "amount": {
// //                 "currency": "USD",
// //                 "total": total.toFixed(2)  // This should match the total from the transaction
// //             }
// //         }]
// //     };

// //     try {
// //         paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
// //             if (error) {
// //                 console.error('Payment Execution Error:', error);
// //                 return res.redirect("http://localhost:5173/failed");
// //             } else {
// //                 console.log("Execute Payment Response:", payment);
// //                 res.redirect("http://localhost:5173/success");
// //             }
// //         });
// //     } catch (error) {
// //         console.error('Execution Error:', error);
// //         res.redirect("http://localhost:5173/failed");
// //     }
// // });

// // // Route for failed payment
// // app.get('/failed', (req, res) => {
// //     res.redirect("http://localhost:5173/failed");
// // });

// // // Initialize MongoDB connection
// // mongodb();

// // // Define other routes
// // app.get('/', (req, res) => {
// //     res.send('Hello World');
// // });
// // app.use('/api', require("./Routes/CreateUser"));
// // app.use('/api', require("./Routes/DisplayData"));
// // app.use('/api', require("./Routes/OrderData"));
// // app.use('/api', require("./Routes/CreateCart"));

// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Server is listening on port ${port}`);
// // });
