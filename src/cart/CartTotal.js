import React from 'react';
import { connect } from 'react-redux';
import style from '../components/Home.module.css'
import { orderPlaced } from '../Redux/action';
import { Redirect } from 'react-router-dom';

class CartTotal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalCartAmount: 0
         }
    }
    render() { 
        const {cartItems, orderPlaced, isOrder} = this.props;
        const { totalCartAmount } = this.state;
        console.log( "totalCartAmount" ,totalCartAmount)
        if(isOrder===true){
            return <Redirect to="/order"/>
        }
        return ( 
            <div>
                { cartItems && cartItems.length<=0?<h2>Please select the items</h2>:
                <>
                <h3>Total cart item: { cartItems && cartItems.length}</h3>
                <div className={style.card}>
                    <h3>Total Amount is:
                    {cartItems && cartItems.reduce((accumulator, currentValue, currentIndex, array)=> (
                                            accumulator + Number(currentValue.totalAmount)
                        ),0)}
                    </h3>
                    <br/>
                    <div className="text-center">
                    <button className="btn btn-primary" onClick={()=>orderPlaced(cartItems)}>Place Order</button>
                    </div>
                    </div>
                    </>
            }
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
        cartItems: state.cartItems,
        isOrder: state.isOrder
})

const mapDispatchToProps=(dispatch)=>({
    orderPlaced:(orderItems)=>dispatch(orderPlaced(orderItems))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);