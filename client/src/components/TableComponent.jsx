import React from 'react';
import data from './data.json'; // Import JSON file

function TableComponent() {
  return (
    <div>
      <h2>Data Table</h2>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>product_name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>price</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>expiration_date</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>category</th>
            
            <th style={{ border: '1px solid black', padding: '8px' }}>manufacture_date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.product_name}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.product_name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.price}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.expiration_date}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.category}</td>
              
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.manufacture_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
