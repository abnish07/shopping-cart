var express = require("express");
var app = express();
const path =require("path")
const shortid = require('shortid')
const cors = require('cors')
app.use(cors())

const Razorpay = require('razorpay')

const razorpay = new Razorpay({
    key_id: 'rzp_test_9jiN2CbOHEot3o',
    key_secret: 'EWEm2pxFNe6hyfW7ZOfesjEA'
  })

 app.post("/razorpay", async(req, res)=>{
    
    const payment_capture = 1
    const amount = 5
    const currency = "INR"

    const options = {
        amount: (amount*100).toString(),
         currency,
          receipt: shortid.generate(), 
          payment_capture,
          }
          try{

        
   const response = await razorpay.orders.create(options)
          console.log(response)
          res.json({
              id: response.id,
              currency: response.currency,
              amount: response.amount
          })
          } catch(error){
              console.log(error)
          }
})


app.listen(8000, ()=>{
    console.log("listining on 8000")
})
