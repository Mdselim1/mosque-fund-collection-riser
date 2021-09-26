import React, { useEffect, useState } from 'react';
import './Data.css';
import Showpersondata from '../Showperson/Showpersondata';
import Personcart from '../Personcart/Personcart';

const Data = () => {
    const [personcart, setPersonCart] = useState([]);
    const [displayPerson, setDisplayPerson] = useState([]);
    // const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(val => {
                setDisplayPerson(val);
            }
            );
    }, []);

    
    
    const addFundBtnValue = (person) => {
        const newPerson = [...personcart, person];
        setPersonCart(newPerson);
    };
    return (
        <div>
           
            <div className="main__container">
                <div className="person__data__main">
                    <h1 className="head__title">Mosque Find Riser Group</h1>
                    <div className="all__person__container">
                        {
                            displayPerson.map(data =>
                                <Showpersondata
                                    person={data}
                                    key={data.key}
                                    button={()=>addFundBtnValue(data)}

                            ></Showpersondata>)
                        }
                    </div>
                </div>
                <div className="funding__container">
                    <h1 className="total_header">Total Collect Funding</h1>
                    <Personcart cart={personcart}></Personcart>
                </div>
            </div>
            
        </div>
    );
};

export default Data;