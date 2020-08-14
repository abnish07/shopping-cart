import React from 'react';
import { connect } from 'react-redux';
import { removeItems, addToCart, decreaseItems } from '../Redux/action';
import CartTotal from './CartTotal';
import { Redirect } from 'react-router-dom';
import CartItems from './CartItems';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { cartItem, removeItems, addToCart, decreaseItems, isLogin } = this.props;
        console.log(cartItem)
        // if(!isLogin){
        //     return <Redirect to="./login"/>
        // }
        return ( 
            <div>
            
               <CartItems />
               {/* <CartTotal/> */}
            </div>
         );
    }
}
 
const mapStateToProps=(state)=>({
    cartItem: state.cartItems,
    isLogin: state.isLogin
})

const mapDispatchToProps=(dispatch)=>({
    removeItems: (id)=>dispatch(removeItems(id)),
    addToCart:(qtyId)=>dispatch(addToCart(qtyId)),
    decreaseItems:(decId)=>dispatch(decreaseItems(decId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)