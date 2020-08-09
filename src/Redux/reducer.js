import React from 'react';
import {HANDLE_LOGIN, HANDLE_LOGOUT, ADD_PRODUCT, REMOVE_PRODUCT, ADD_TO_CART, HANDLE_REGISTRATION, FETCH_REG_REQUEST, FETCH_REG_SUCCESS, FETCH_REG_FAILURE, DECREASE_ITEMS, ORDER_PLACED, CHECKOUT, GO_TO_CART, ORDER_CONFIRMED} from './actionType';
import tshirtData from '../tshirt.json';
import shoesData from '../shoes.json';
import mobileData from '../mobile.json';
import { checkout } from './action';

const initState=({
    isLoading: false,
    data:[],
    productsArr: tshirtData,
    isLogin: false,
    cartItems:[],
    isError:false,
    isReg: false,
    isCart: false,
     orderItems:[],
     isOrder:false,
     isCheckout: false,
    checkoutData:[],
    isAddress: false,
    token: "",
    isLogout: false,
    // totalCartAmount:[]
})

const reducer =(state=initState, {type, payload})=>{
    // console.log( "totalCartAmount", state.totalCartAmount)
    switch(type){
        case FETCH_REG_REQUEST:
            return (
                {
                    ...state,
                    isLoading: true,
                   
                }               
            )
        case FETCH_REG_SUCCESS:
            return (
                {
                    ...state,
                    isLoading: false,
                    productsArr: tshirtData,
                    isLogin: true,
                    isReg: true,
                    data: payload
                }               
            )
        case FETCH_REG_FAILURE:
            return (
                {
                    ...state,
                    ...payload,
                    isError: true
                }               
            )
        case HANDLE_LOGIN:
            console.log("token 57", state.token)
            return (
                {
                    ...state,
                    ...payload,
                    isLogin: true,
                    isReg: false,
                    token: payload.data
                }               
            )
        case HANDLE_REGISTRATION:
            return (
                {
                    ...state,
                    ...payload,
                    isReg: true,
                    // isLogin: false
                   
                }               
            )
        case HANDLE_LOGOUT:
            return (
                {
                    ...state,
                    ...payload,
                    isLogout: true,
                    isLogin: false
                    // isLogin: false
                   
                }               
            )

        case ADD_TO_CART:
                let cart = [...state.cartItems]
                const items = state.productsArr.find((item)=>item.id===payload)
                let item = {
                    ...items, qty:1, totalAmount: items.price
                }
                // let totalCartAmount = []
                let duplicate =false
                for(let i=0; i<cart.length; i++){
                    if(cart[i].id===payload){
                        duplicate=true
                        cart[i].qty++
                        
                        cart[i].totalAmount = (cart[i].qty*cart[i].price)
                        // state.totalCartAmount.push cart[i].totalAmount ]
                    }
                }
                if(duplicate){
                                 
                return  ({ ...state, isOrder: false, isCheckout:false, cartItems: cart})
                }
                
              
                return(
                {         ...state, 
                        data: item,  
                        isOrder:false, 
                        isCheckout:false,                      
                    cartItems: [...state.cartItems, item]               
                }
                )
        case DECREASE_ITEMS:
                let decCart = [...state.cartItems]
                const decItems = state.productsArr.find((item)=>item.id===payload)
                let decItem = {
                    ...decItems, qty:1,
                }
                let decDuplicate =false
                for(let i=0; i<decCart.length; i++){
                    if(decCart[i].id===payload){
                        decDuplicate=true
                        if(decCart[i].qty>0){

                            decCart[i].qty--
                        }  
                        else{
                            let decCartitems = decCart.filter((item)=>item.id!= payload)
                            return (
                                {
                                    ...state,
                                    isOrder:false, 
                                    isCheckout:false,
                                    cartItems: decCartitems                 
                                }               
                            )
                        }                     
                    }
                }
                if(decDuplicate){
                                 
                return  ({ ...state,  isOrder:false, isCheckout:false, cartItems: decCart})
                }
                return(
                {         ...state, 
                        data: decItems, 
                        isOrder:false,  
                        isCheckout:false,                       
                    cartItems: [...state.cartItems, decItem]               
                }
                )
            
        case ADD_PRODUCT:
            alert('Product added successfully')
            return (
                {
                    ...state,
                    isOrder:false,  
                    isCheckout:false, 
                    isCart: false,
                    productsArr: [...state.productsArr, payload]                  
                }

            )
        case REMOVE_PRODUCT:
            let cartItem = [...state.cartItems]
            let newCartitems = cartItem.filter((item)=>item.id!= payload)
            return (
                {
                    ...state,
                    isOrder:false, 
                    isCart: false,
                    isCheckout:false,
                    cartItems: newCartitems                 
                }               
            )
        case ORDER_PLACED:
            
            return (
                {
                    ...state, 
                    isCheckout:false,
                    isCart: false,
                    orderItems: payload,
                    isOrder: true                
                }               
            )
        case CHECKOUT:            
            return (
                {
                    ...state, 
                    isCheckout:true,
                    isCart: false,
                    orderItems: payload,
                    isOrder: false,
                    checkoutData: payload              

                }               
            )
        case GO_TO_CART:            
            return (
                {
                    ...state, 
                    isCart: true,
                    isLogin: false,
                    isCheckout:false,
                    payload,
                    isOrder: false ,               
                    isAddress: false,
                }               
            )

        case ORDER_CONFIRMED:            
            return (
                {
                    ...state, 
                    isCart: false,
                    isAddress: true,
                    isCheckout: false,
                    isorder: false,
                    payload,
                    checkoutData:[...state.checkoutData, payload],
                    cartItems:[]
                }               
            )
        default:
            return state
        
            
    }
}
export default reducer;