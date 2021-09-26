import React from 'react';
import './Personcart.css';

const Personcart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    let totalfund = 0;
    for (const person of cart) {
        totalfund = totalfund + person.givemoney;
    };

    return (
        <div style={{
            textAlign:'center'
        }}>
            <div className="person__data__single" style={{
                
            }}>
            <h1 className="single_color">Funding Details</h1>
            <h2 className="single_color">Total Person : {cart.length}</h2>
            <h3 className="single_color">Total Fund : $ {totalfund}</h3>
            </div>
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