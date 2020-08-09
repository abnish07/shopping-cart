import React from 'react';
import { connect } from 'react-redux';
import { removeItems, addToCart, decreaseItems } from '../Redux/action';
import CartTotal from './CartTotal';
import { Redirect } from 'react-router-dom';
import style from '../components/Home.module.css';

class CartItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { cartItem, removeItems, addToCart, decreaseItems, isLogin } = this.props;
        console.log(cartItem)
        return ( 
            <div>
            <div>
            {cartItem.length<=0?<h3 className="text-center">Cart is Empty</h3>:
                <div style={{display:"flex", width: "auto", marginBottom: 80}}>
                   
               {cartItem.map((item)=>(
                   <div className="mx-3 card" key={item.id}>
                   <div className={style.box}>{item.name}</div>
                   <img className="card-img-top img-fluid" style={{height: 180, width: "auto"}} src={item.url}/>
                   <div className={style.box}>{item.category}</div>
                    <div className={style.card}>Qty:
                    <img width="20" src="../minus.png" class="rounded-circle m-1" onClick={()=>decreaseItems(item.id)}/>
                    {item.qty}
                    <img width="20" src="../plus.png" class="rounded-circle m-1"onClick={()=>addToCart(item.id)} />
                    </div>
                   <div className={style.box}>{item.price} / item</div>
                   <div className={style.box}><strong>Total Price is:&nbsp;&nbsp;&nbsp;&nbsp;
                        {(item.qty)*(item.price)}</strong></div>
                   <button className="btn btn-danger mt-2" onClick={()=>removeItems(item.id)}>Remove</button>
                   </div>))}
                </div>
               }
            </div>
            <CartTotal/>
            </div>
         );
    }
}
 
const mapStateToProps=(state)=>({
    cartItem: state.cartItems,
    // isLogin: state.isLogin
})

const mapDispatchToProps=(dispatch)=>({
    removeItems: (id)=>dispatch(removeItems(id)),
    addToCart:(qtyId)=>dispatch(addToCart(qtyId)),
    decreaseItems:(decId)=>dispatch(decreaseItems(decId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItems)