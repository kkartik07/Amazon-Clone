const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')('sk_test_51L4N8PSAeezdO0EWgHzdUnofgBuNSPWeJMqC5VGSeuMFvHwWDmG1E96JsnYmGGEArL43qqbtuQPYHZGy3Px5MCnk00UG3dbnHm')

// API

// APP config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send
    ('Hello world'))

// Listen command
exports.api = functions.https.onRequest(app)
