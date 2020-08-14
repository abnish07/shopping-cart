import React from 'react';



 function loadScript(src){
    return new Promise((resolve)=>{

    const script = document.createElement('script')
    script.src =src;
    script.onload = ()=>{
        resolve(true)
    }
    script.onerror = ()=>{
        resolve(false)
    }
    document.body.appendChild(script)
})
}
const __DEV__ = document.domain==="localhost"

// if(document.domain === "localhost"){
//     //development mode
// }
// else {
//     //production mode
// }

function pay(){

    async function displayRazorpay(){

        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if(!res){
            alert("script file is not load, check your internet connection")
            return
        }

        const data = await fetch("http://localhost:8000/razorpay", { method: "POST" }).then((t)=>t.json())

        console.log("data", data)

        const options = {
            key: __DEV__?"rzp_test_9jiN2CbOHEot3o":"Production key", // Enter the Key ID generated from the Dashboard
            amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: data.currency,
            name: "Donation",
            description: "Thank you for donation ",
            image: "https://example.com/your_logo",
            order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1 fetch from backend 
            handler: function (response){
                alert("Thank you for your payment");
               
            },
            prefill: {
                name: "Abnish Kumar",
                email: "abnish.kumar@example.com",
                contact: "9999999999"
            },
            // notes: {
            //     address: "Razorpay Corporate Office"
            // },
            theme: {
                color: "#F37254"
            }
        };
        const paymentObj = new window.Razorpay(options);
        // debugger
        paymentObj.open()
    }



        return (
            <div>
                   <div className="text-center mt-5 mb-5 ">
            <button className="btn btn-danger"
             onClick={displayRazorpay}
             >PAY NOW</button></div>  
            </div>
         );
    
        }
export default pay;