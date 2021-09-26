import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Showpersondata.css';

const Showpersondata = (props) => {
    const {name , position , givemoney , img ,title, scholer} = props.person;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="person__data">
            <img src={img} alt="" />
            <h2 className="box__title">Name : {name}</h2>
            <h3 className="box__title">Title : {title} </h3>
            <h3 className="box__title">Position : {position} </h3>
            <h3 className="box__title">Give Money : {givemoney} $</h3>
            <h4 className="box__title">Teacher : {scholer} </h4>
            <button onClick={props.button}><span>{cartIcon}</span> Fund Collect </button>
        </div>
    );
};

export default Showpersondata;