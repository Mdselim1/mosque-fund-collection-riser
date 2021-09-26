import React from 'react';

const Personcart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    let totalfund = 0;
    for (const person of cart) {
        totalfund = totalfund + person.givemoney;
    };

    return (
        <div style={{
            padding:'20px'
        }}> 
            <h1>Total Person : {cart.length}</h1>
            <h1>Total Fund : $ {totalfund}</h1>
            <ul id="person__name">
                {
                    cart.map(person => <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ddd',
                        margin: '10px 0',
                        padding: '10px',
                        borderRadius: '10px',
                        background: '#3AAFA9',
                        color:'#ffffff'
                    }}><img style={{
                            width: '50px',
                        marginRight:'10px'
                    }} src={person.img} alt="" />{person.name}</li>)
                }
           </ul>
        </div>
    );
};

export default Personcart;