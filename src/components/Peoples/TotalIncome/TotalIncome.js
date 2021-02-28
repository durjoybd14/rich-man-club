import React from 'react';

const TotalIncome = (props) => {
    const cart = props.cart;
    const totalIncome = cart.reduce((sum, cart) => sum + cart.income, 0)
    return (
        <div>
            <h3>Total Income: {totalIncome}</h3>
        </div>
    );
};

export default TotalIncome;