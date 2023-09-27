import React from 'react'

import { Product } from '@types'
import at6S from '@assets/jpeg/ate-s-skip.jpeg'
import aluminium from '@assets/jpg/ALUMINUM-two.jpg'
import at6STwo from '@assets/jpg/ates.jpg'
import bumperBlack from '@assets/jpg/front-bumper-black.jpeg'
import bumperBlue from '@assets/jpg/front-bumper-blue.jpeg'
import bumperGreen from '@assets/jpg/front-bumper-green.jpeg'
import bumperRed from '@assets/jpg/front-bumper-red.jpeg'
import front from '@assets/jpg/front-cargo-2.jpeg'
import frontTwo from '@assets/jpg/front-cargo.jpg'
import generatortwo from '@assets/jpg/generador-2.jpeg'
import generator from '@assets/jpg/generador.jpeg'
import rear from '@assets/jpg/rear-cargo-2.jpg'
import rearTwo from '@assets/jpg/rear-cargo.jpg'
import aluminiumTwo from '@assets/jpg/s-kip-plates.jpg'
import ateL from '@assets/jpg/ship-plates-2.jpg'
import at6LTwo from '@assets/jpg/skip-plates.jpg'
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
