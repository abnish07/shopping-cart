import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from '../components/Home'
import Login from '../Auth/Login'
import Cart from '../cart/Cart'
import Signup from '../Auth/Signup'
import AddProducts from '../components/AddProducts';
import Order from '../components/Order';
import Checkout from '../components/Checkout';
import ThankYou from '../components/ThankYou';
import Payment from '../components/Payment';

 const Routes=()=>{
    return(
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/addproducts" component={AddProducts} />
        <Route path="/order" component={Order} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/payment" component={Payment} />
        <Route render={()=><div>Error: Page Not Found</div>} />
        </Switch>
    )
}
export default Routes;