import React from 'react';
import Payment from './Payment';

class ThankYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h2 className="text-center mt-5">Thank you for your order, if you want to test our payment, please click on pay button</h2>
                <Payment />
            </div>
         );
    }
}
 
export default ThankYou;