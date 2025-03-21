
import React from 'react';
import data from './data.json'; 

function Card({ onCustomerClick }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {data.map((data) => (
        <div
          key={data.product_name}
          style={{
            backgroundColor: 'rgb(228, 76, 185)',
            color: 'BLACK',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '8px'
          }}
          onClick={() => onCustomerClick(customer)} 
        >
          ID: {data.product_name}
          <br/>
          NAME: {data.price}
          <br/>
          AGE: {data.expiration_date}
          <br/>
          Customer EMAIL: {data.manufacture_date}
          <br/>
          Customer ADDRESS: {data.product_name}

        </div>
      ))}
    </div>
  );
}

export default Card;