import React from 'react'

function Product(props) {
  return (
    <div>
      <h1>{props.info.name}</h1>
      <p>Price: {props.info.price}</p>
      <p>Description: {props.info.description}</p>
    </div>
  )
}

export default Product
