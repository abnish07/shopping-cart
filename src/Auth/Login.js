import React from 'react';
import style from './Login.module.css'
import { connect } from 'react-redux';
import { userLogin, handleLogin, handleRegistration } from '../Redux/action';
import { Redirect } from 'react-router-dom';
import store from '../Redux/store'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {             
            username:'',
            password:'',          
         }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    render() { 
        const {username, password} = this.state;
        const {handleChange} = this
        const {userLogin, loginRes, handleLogin, isLogin} = this.props;
        // console.log(store.getState().isLogin)
        // console.log(handleLogin())
        if(isLogin){
           return <Redirect to ="/cart"/>
        }

        return ( 
            <div className={style.card}>
                
                <h2 className="text-center pt-3">Login page</h2>
                <br/>
                <div className='form-row mt-1 p-4' >
                    <div className="form-group col-12">
                        <div className="row">
                    <label className="col-4" htmlFor="name"><h5>User Name</h5></label>
                <input className="form-control col-7" type="text" value={username} name="username" onChange={handleChange} /></div>
                </div>
                <br/>
                <div className="form-group col-12">
                    <div className="row">
                    <label className="col-4" htmlFor="name"><h5>Password</h5></label>
                <input className="form-control col-7" type="password" value={password} name="password" onChange={handleChange} /></div>
                </div>
                <br/>
                </div>
                <div className="text-center pb-3">
                <button className="btn btn-primary" 
                onClick={()=>userLogin(this.state)}
                >Login</button>
                <button className="btn btn-primary ml-3" 
                // onClick={()=>handleRegistration()}
                >New User? Signup</button>
            </div>
            </div>
         );
    }
}

const mapStateToProps=(state)=>({
    loginRes: state.data,
    isLogin: state.isLogin
})

const mapDispatchToProps=(dispatch)=>({
    userLogin: query=>dispatch(userLogin(query)),
    handleLogin: ()=>dispatch(handleLogin())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);