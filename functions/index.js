const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors");
const stripe = require("stripe")
    ("sk_test_51L4N8PSAeezdO0EWgHzdUnofgBuNSPWeJMqC5VGSeuMFvHwWDmG1E96JsnYmGGEArL43qqbtuQPYHZGy3Px5MCnk00UG3dbnHm")

// API

// APP config
const app = express()

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('Hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved ! for this amount -> ', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: 'usd',
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/snapkartnew/us-central1/api
