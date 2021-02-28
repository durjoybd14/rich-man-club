import React from 'react';
import './Peoples.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Peoples = (props) => {
    const { name, img, income, email, phone, country } = props.richPeople;
    const handleAddCount = props.handleAddCount;
    return (
        <div className='people-container'>
            <div>
                <h1>Name: {name} </h1>
                <img src={img} alt="" />
                <h3>Phone: {phone}</h3>
                <h3>E-mail: {email}</h3>
                <p>Annual Income: ${income}Billions</p>
                <p>Country: {country}</p>
                <button onClick={()=>handleAddCount(props.richPeople)}><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Peoples;