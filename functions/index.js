const functions = require('firebase-functions');
const express=require('express')
const cors=require('cors')
const Stripe=require('stripe')
const stripe=Stripe('sk_test_51Hqh5PBuyb9uiycGRJrrQcNsImDliD1Wa84acza8uxImDZfKSPuIgQfvlsXqKKq4BQ7EQFFQkgUOJ5BOuOaOI8gd00ZpZeMDxB')

//API

//App config
const app=express()

//middlewares
app.use(cors({origin:true}))
app.use(express.json())

//API routes
app.get('/',(request,response)=>response.status(200).send('hola chiques'))

app.post('/payments/create',async (request,response)=>{
    const total=request.query.total

    console.log('payment recivied',total)

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:'usd',
    })
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

//Listen commnad
exports.api=functions.https.onRequest(app)


//http://localhost:5001/a-495c2/us-central1/api


