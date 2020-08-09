import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css'
import { connect } from 'react-redux';
import { handleLogin } from '../Redux/action';

class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogout: false
        }
    }

        handleLogout=()=>{
            this.setState({
                isLogout: !this.isLogout
            })
        }

    render(){
        const { loginData, cartCount } = this.props;
        const { isLogout } = this.state
        console.log(loginData)
        return(
            <nav className="navbar navbar-dark bg-primary pl-5 pr-5 mb-5">
                <Link className={style.menu} to="/">Home</Link>
                
                {loginData.data && loginData.data.error ==false?
                <Link className={style.menu} to="/" onClick={this.handleLogout}> Logout</Link>:
                <Link className={style.menu} to="/login">Login</Link>}



                {loginData.data && loginData.data.error==false?"":<Link className={style.menu} to="/signup">Signup</Link>}

                <Link className={style.menu} to="/cart">Cart<small className="ml-1 text-success align-top text-warning">{ cartCount.length>0? cartCount.length:""}</small></Link>

                <Link className={style.menu} to="/addproducts">Add Products</Link>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}

const mapStateToProps=(state)=>({
    loginData: state.data,
    cartCount: state.cartItems
})


export default connect(mapStateToProps, null)(Navbar)