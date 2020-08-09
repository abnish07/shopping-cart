import React from 'react';
import style from './Login.module.css';
import {userRegistration, handleRegistration} from '../Redux/action';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            email:'',
            password:'',
            username:'',
            mobile:'',
            description:''
         }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value 
        })
    }
    render() {
        const {handleChange} = this;
        const {name, email, password, username, mobile, description} = this.state;
        const {data, userRegistration, handleRegistration} = this.props;
        // console.log(handleRegistration())
        if(data.data && data.data.error===false){
            return <Redirect to="./login"/>
        }
            return ( 
            <div>

                <div className={style.card}>
                
                <h2 className="text-center pt-3">Registration page</h2>
                <br/>
                <div className='form-row mt-1 p-5' >
                    <div className="form-group col-6">
                    <label htmlFor="name">Name</label>
                <input className="form-control" style={{marginBottom:5}} type="text" value={name} name="name" onChange={handleChange} />
                </div>
                <br/>
                <div className="form-group col-6">
                    <label htmlFor="name">Email</label>
                <input className="form-control" style={{marginBottom:5}} type="email" value={email} name="email" onChange={handleChange} />
                </div>
                <br/>
                <div className="form-group col-6">
                    <label htmlFor="name">Password</label>
                <input className="form-control" style={{marginBottom:5}} type="password" value={password} name="password" onChange={handleChange} />
                </div>
                <br/>

                <div className="form-group col-6">
                    <label htmlFor="name">User Name</label>
                <input className="form-control" style={{marginBottom:5}} type="text" value={username} name="username"     onChange={handleChange} />
                </div>
                <br/>
                <div className="form-group col-6">
                    <label htmlFor="name">Mobile No</label>
                <input className="form-control" style={{marginBottom:5}} type="number" value={mobile} name="mobile" onChange={handleChange} />
                </div>
                <br/>
                <div className="form-group col-6">
                    <label htmlFor="name">Description</label>
                <input className="form-control" style={{marginBottom:1}} type="text" value={description} name="description" onChange={handleChange} />
                </div>
            </div>
            <div>
            {data.data && data.data.error==false?<p className="text-success mb-2">{data.data.message}</p>:""}
            {data.data && data.data.error==true?<p className="text-danger mb-2">{data.data.message}</p>:""}
            </div>
                <div className="text-center pb-3">
                <button className="btn btn-primary"
                 onClick={()=>userRegistration(this.state)}
                 >Sign UP</button></div>
            </div>

            </div>
         );
    }
}

const mapStateToProps=(state)=>({
    data: state.data
})

const mapDispatchToProps=(dispatch)=>({
    userRegistration: query=>dispatch(userRegistration(query)),
    handleRegistration: ()=>dispatch(handleRegistration())
})


export default connect(mapStateToProps, mapDispatchToProps)(Signup);