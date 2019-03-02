import React from 'react'

function Product(props) {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
    </div>
  )
}

export default Product
