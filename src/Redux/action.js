import React from 'react';
import {HANDLE_LOGIN, HANDLE_LOGOUT, ADD_PRODUCT, REMOVE_PRODUCT, HANDLE_REGISTRATION, FETCH_REG_REQUEST, FETCH_REG_SUCCESS, FETCH_REG_FAILURE, ADD_TO_CART, DECREASE_ITEMS, ORDER_PLACED, CHECKOUT, GO_TO_CART, ORDER_CONFIRMED} from './actionType';
import axios from 'axios';

export const fetchRegRequest=(payload)=>({
    type: FETCH_REG_REQUEST,
    payload
})
export const fetchRegSuccess=(payload)=>({
    type: FETCH_REG_SUCCESS,
    payload
})
export const fetchRegFailure=(payload)=>({
    type: FETCH_REG_FAILURE,
    payload
})

export const handleLogin=(payload)=>({
    type: HANDLE_LOGIN,
    payload
})

export const handleLogout=(payload)=>({
    type: HANDLE_LOGOUT,
    payload
})

export const handleRegistration=(payload)=>({
    type: HANDLE_REGISTRATION,
    payload
})
export const addProducts=(payload)=>({
    type: ADD_PRODUCT,
    payload
})

export const addToCart=(payload)=>({
    type: ADD_TO_CART,
    payload
})

export const decreaseItems=(payload)=>({
    type: DECREASE_ITEMS,
    payload
})

export const removeItems=(payload)=>({
    type: REMOVE_PRODUCT,
    payload
})
export const orderPlaced=(payload)=>({
    type: ORDER_PLACED,
    payload
})
export const checkout=(payload)=>({
    type: CHECKOUT,
    payload
})
export const goToCart=(payload)=>({
    type: GO_TO_CART,
    payload
})
export const orderConfirmed=(payload)=>({
    type: ORDER_CONFIRMED,
    payload
})

export const userRegistration=query=>dispatch=>{
    dispatch(fetchRegRequest())
    return (
        axios.post("http://localhost:8080/auth/register",{
            name: query.name,
            email: query.email,
            password: query.password,
            username: query.username,
            mobile: query.mobile,
            description: query.description
    }).then(res=>{

        console.log(res)
        return dispatch(fetchRegSuccess(res))
    }
        )
    
    )
}

export const userLogin=query=>dispatch=>{
    dispatch(fetchRegRequest())
    return (
        axios.post("http://localhost:8080/auth/login",{      
            password: query.password,
            username: query.username,         
    }).then(loginRes=>{
        // console.log(loginRes)
        return dispatch(fetchRegSuccess(loginRes))
    }
        )
    
    )
}

