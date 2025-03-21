import React from 'react'
import image from './Images/Agri.jpg'
import image1 from './Images/Agri1.jpeg'
import image2 from './Images/Agri2.jpeg'
import image3 from './Images/Agri3.jpeg'
import image4 from './Images/Agri4.jpeg'

const products = [ 
  { pid: 'P001', pname: 'Product 1', price: '$10' }, 
  { pid: 'P002', pname: 'Product 2', price: '$20' }, 
  { pid: 'P003', pname: 'Product 3', price: '$30' }, 
  { pid: 'P004', pname: 'Product 4', price: '$40' }, 
  { pid: 'P005', pname: 'Product 5', price: '$50' }, 
  { pid: 'P006', pname: 'Product 6', price: '$60' },
]; 
 
const Product = () => {
  return (
    <div>
        <h3>All products here!</h3>
        <img src={image} width="200" height="200" style={{padding:'20px'}}alt="Image"/>
        <img src={image1} width="200" height="200" style={{padding:'20px'}}alt="Image"/>
        <img src={image2} width="200" height="200" style={{padding:'20px'}}alt="Image"/>
        <img src={image3} width="200" height="200" style={{padding:'20px'}}alt="Image"/>
        <img src={image4} width="200" height="200"style={{padding:'20px'}}alt="Image"/>
        <h1>Products List</h1> 
      <table style={{border:'solid 2px black'}}> 
        <thead > 
          <tr style={{border:'solid 2px black'}}> 
            <th>Product ID</th> 
            <th>Product Name</th> 
            <th>Price</th> 
          </tr> 
        </thead> 
        <tbody> 
          {products.map(product => ( 
            <tr key={product.pid}> 
              <td>{product.pid}</td> 
              <td>{product.pname}</td> 
              <td>{product.price}</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
  
    </div>
  )
}

export default Product