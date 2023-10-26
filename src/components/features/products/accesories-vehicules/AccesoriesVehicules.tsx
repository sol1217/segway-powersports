import React from 'react'

import { ProductAccesoriesWrap } from '@features/products/accesories-vehicules/AccesoriesVehicules.elements'
import { products } from '@features/products/accesories-vehicules/constants'
import { ProductItem } from '@features/products/accesories-vehicules/productItem/ProductItem'

export const AccesoriesVehicule = () => {
  return (
    <>
      <ProductAccesoriesWrap>
        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
        <div></div>
      </ProductAccesoriesWrap>
    </>
  )
}
