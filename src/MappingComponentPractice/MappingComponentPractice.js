import React from 'react';
import productsData from './productCollection'
import Product from './Product'

function MappingComponentPractice() {
  const productComponents = productsData.map(product => <Product key={product} product={product} />)
  return (
    <div>
      {productComponents}
    </div>
  )
}

export default MappingComponentPractice;
