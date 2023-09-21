import React from 'react'

import { ProductItem } from '@features/products/accesories/ProductItem'
import { ProductAccesoriesWrap } from '@features/products/accesories/ProductsAccesories.elements'

import { products } from './constants'

export const ProductAccesories = () => {
  return (
    <>
      <ProductAccesoriesWrap>
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </ProductAccesoriesWrap>
    </>
  )
}
