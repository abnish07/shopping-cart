// import React from 'react';



// loadRazorpay=(src)=>{
//     return new Promise((resolve)=>{

//     const script = document.createElement('script')
//     script =src;
//     document.appendChild(script)
//     script.onload = ()=>{
//         resolve(true)
//     }
//     script.onload = ()=>{
//         resolve(false)
//     }
// })
// }


// class Payment extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

//     async function displayRazorpay(){

//         const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js")
//         if(!res){
//             alert("script file is not load, check your internet connection")
//             return
//         }

//         var options = {
//             "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
//             "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             "currency": "INR",
//             "name": "Acme Corp",
//             "description": "Test Transaction",
//             "image": "https://example.com/your_logo",
//             "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//             "handler": function (response){
//                 alert(response.razorpay_payment_id);
//                 alert(response.razorpay_order_id);
//                 alert(response.razorpay_signature)
//             },
//             "prefill": {
//                 "name": "Gaurav Kumar",
//                 "email": "gaurav.kumar@example.com",
//                 "contact": "9999999999"
//             },
//             "notes": {
//                 "address": "Razorpay Corporate Office"
//             },
//             "theme": {
//                 "color": "#F37254"
//             }
//         };
//         var rzp1 = new Razorpay(options);
//     }



//     render() { 
//         return (
//             <div>
//                    <div className="text-center mt-5 mb-5 ">
//             <button className="btn btn-danger" onClick={loadRazorpay}>PAY</button></div>  
//             </div>
//          );
//     }
// }
 
// export default Payment;