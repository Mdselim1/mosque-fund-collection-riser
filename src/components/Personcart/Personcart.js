import React from 'react';

const Personcart = (props) => {
    // console.log(props.cart);
    const { cart } = props;
   

    let totalfund = 0;
    for (const person of cart) {
        totalfund = totalfund + person.givemoney;
    }
   

    return (
        <div style={{
            padding:'20px'
        }}> 
            <h1>Total Person : {cart.length}</h1>
            <h1>Total Fund : $ {totalfund}</h1>
            <div id="person__name">
                
           </div>
        </div>
    );
};

export default Personcart;