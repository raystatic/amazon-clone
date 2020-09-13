const {request, response}=require ("express");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HPvXCJJ5fdTIHPc5Fc9HvyzHgCm47nE3kdoWtlZyfL24Ou5qd9dIf0dpm5vaZF1MdwBR1UoO9DbmCIV4U6jNy9B001cCQ16lY');

//API

// - App config
const app = express();

// - Middleware
app.use(cors({origin: true}))
app.use(express.json());

// - API Routes
app.get('/', (request, response)  => response.status(200).send("Hello world"))

app.get('/ray', (request, response)  => response.status(200).send("Hello Ray"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log("Payment request received for -> " + total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    })

    // ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - LISTEN command
exports.api = functions.https.onRequest(app);



