import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import style from './Home.module.css'
import { addToCart, goToCart } from '../Redux/action';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        const {tshirtData, addToCart, cartItems, isCart, goToCart } = this.props;
        // console.log(addToCart)
        if(isCart === true){
            return <Redirect to ="/cart"/>
        }
        // console.log(isCart)
        return ( 
            <div >   
                
                <h4 className="ml-3 mb-3">Mens T-Shirt</h4>   
                
                <div className={style.card}> 
                {tshirtData?.map((item)=>(
                    <div className="ml-3 mr-3 card"  key={item.id}>
                        <img className="card-img-top img-fluid img-thumbnail" src ={item.url}/>
                    <div className={style.box}>{item.brandName}</div>
                    <div className={style.box}>{item.price}</div>
                    <div className={style.box}>{item.category}</div>
                   
                    <button className="btn btn-primary" onClick={()=>addToCart(item.id)}>
                        Add to Cart</button>
                    </div>)
                )} 
                </div>                 
                {cartItems.length>0?<div className="text-center mt-5"><button className="btn btn-success " onClick={()=>goToCart(tshirtData.id)}>Go To Cart</button></div>:""}
            </div>
         );
    }
}
 
const mapStateToProps=(state)=>({
    tshirtData: state.productsArr,
    cartItems: state.cartItems,
    isCart: state.isCart,
})

const mapDispatchToProps=(dispatch)=>({
    addToCart: (id)=>dispatch(addToCart(id)),
    goToCart: (id)=>dispatch(goToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);