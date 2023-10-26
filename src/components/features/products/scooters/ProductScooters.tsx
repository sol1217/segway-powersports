'use client'

import { products } from './constants'
import { ProductItem } from './ProductItem'
import { ProductScootersContainer } from './ProductScooters.elements'

export const ProductScooters = () => {
  return (
    <ProductScootersContainer>
      {products.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </ProductScootersContainer>
  )
}
