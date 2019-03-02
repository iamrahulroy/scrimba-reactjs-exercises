import React from 'react';
import productsData from './productCollection'
import Product from './Product'

function MappingComponentPractice() {
  const products = productsData.map(product => <Product key={product} info={product} />)
  return (
    <div>
      {products}
    </div>
  )
}

export default MappingComponentPractice;
