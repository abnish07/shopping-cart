import React from 'react';
import style from '../Auth/Login.module.css';
import { orderConfirmed} from '../Redux/action';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            mobile:'',
            Address:''
         }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    render() {
        const {handleChange} = this;
        const {name, mobile, description} = this.state;
        const {orderConfirmed, isAddress} = this.props;
            if(isAddress===true){
                return <Redirect to="/thankyou"/>
            }
            return ( 
            <div>

                <div className={style.card}>
                
                <h2 className="text-center pt-3"> Add New Address</h2>
                <br/>
                <div className='form-row mt-1 p-5' >
                    <div className="form-group col-6">
                    <label htmlFor="name">Name</label>
                <input className="form-control" placeholder="enter your name" style={{marginBottom:5}} type="text" value={name} name="name" onChange={handleChange} required/>
                </div>
                <br/>

                <div className="form-group col-6">
                    <label htmlFor="mobile">Mobile No</label>
                <input className="form-control" placeholder="enter you mobile no" style={{marginBottom:5}} type="number" value={mobile} name="mobile" onChange={handleChange} maxLength="10" required/>
                </div>
                <br/>
                <div className="form-group col-6">
                    <label htmlFor="address">Address</label>
                <input className="form-control" placeholder="enter your address" style={{marginBottom:1}} type="text" value={description} name="address" onChange={handleChange} required />
                </div>
            </div>
            <div>
            </div>
                <div className="text-center pb-3">
                <button className="btn btn-primary"
                 onClick={()=>orderConfirmed(this.state)}
                 >Order Confirmed</button>
               
                 </div>
            </div>

            </div>
         );
    }
}

const mapStateToProps=(state)=>({
    isAddress: state.isAddress
})

const mapDispatchToProps=(dispatch)=>({
    orderConfirmed:(address)=>dispatch(orderConfirmed(address))
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);