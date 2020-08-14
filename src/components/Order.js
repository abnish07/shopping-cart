import React from 'react';
import { connect } from 'react-redux';
import style from './Home.module.css'
import { checkout } from '../Redux/action'
import { Redirect } from 'react-router-dom';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {cartItems, checkout, isCheckout}= this.props
        if(isCheckout===true){
            return <Redirect to="/checkout"/>
        }
        return ( 
            <div >
                {cartItems.length<=0?<h3>Please Select the Items</h3>:
            <div className={style.card}>
               <div className={style.card} >
                   <div className="text-center"><h3 style={{marginLeft: 600}}>Total Amount is:
                    {cartItems && cartItems.reduce((accumulator, currentValue, currentIndex, array)=> (
                            accumulator + Number(currentValue.totalAmount)
                        ),0)}
                    </h3>
                    <br/>
                   
                    </div>
          

            </div> 
            </div>}
            <div className="text-center mt-5">
                    {cartItems.length<=0?"": <button className="btn btn-primary" onClick={()=>checkout(cartItems)}>Checkout</button>}
                   
                    </div>
            </div>
         );
    }
}
 
const mapStateToProps=(state)=>({
    cartItems: state.cartItems,
    isCheckout: state.isCheckout
})
const mapDispatchToProps=(dispatch)=>({
    checkout: (checkItems)=>dispatch(checkout(checkItems))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);