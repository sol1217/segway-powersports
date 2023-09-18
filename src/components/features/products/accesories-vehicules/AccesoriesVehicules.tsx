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
import { ProductItem } from '@features/products/accesories-vehicules/productItem/ProductItem'

export const AccesoriesVehicule = () => {
  const products: Product[] = [
    {
      name: 'FRONT CARGO BOX',
      alias: 'front-cargo-box',
      images: [
        {
          src: front.src,
          width: 310,
          price: '37.5 Litros',
        },
        {
          src: frontTwo.src,
          width: 306,
          price: '37.5 Litros',
        },
      ],
    },
    {
      name: 'AT6 L SKID PLATES',
      alias: 'at6-l-skid-plates',
      images: [
        {
          src: ateL.src,
          width: 155,
          price: 'Peso 4.38Kg',
        },
        {
          src: at6LTwo.src,
          width: 270,
          price: 'Peso 4.38Kg',
        },
      ],
    },
    {
      name: 'AT6 S SKID PLATES',
      alias: 'at6-s-skip',
      images: [
        {
          src: at6STwo.src,
          width: 270,
          price: 'Superficie anodizada',
        },
        {
          src: at6S.src,
          width: 270,
          price: 'Superficie anodizada',
        },
      ],
    },
    {
      name: 'ALUMINUM ARM GUARD ASSY',
      alias: 'aluminum-arm-guard',
      images: [
        {
          src: aluminiumTwo.src,
          width: 260,
          price: 'Material de aluminio',
        },
        {
          src: aluminium.src,
          width: 300,
          price: 'Material de aluminio',
        },
      ],
    },
    {
      name: 'REAR CARGO BOX',
      alias: 'rear-cargo-box',
      images: [
        {
          src: rear.src,
          width: 236,
          price: '104 Litros',
        },
        {
          src: rearTwo.src,
          width: 210,
          price: '104 Litros',
        },
      ],
    },
    {
      name: 'SNARLER FRONT BUMPER KIT',
      alias: 'front-bumper-kit',
      images: [
        {
          src: bumperRed.src,
          width: 290,
          price: 'Peso 6.13Kg',
        },
        {
          src: bumperBlue.src,
          width: 290,
          price: 'Electroforesis',
        },
        {
          src: bumperGreen.src,
          width: 290,
          price: 'Peso 6.13Kg',
        },
        {
          src: bumperBlack.src,
          width: 195,
          price: 'Electroforesis',
        },
      ],
    },
    {
      name: 'INVERTER GENERATOR SGW2700i',
      alias: 'generatot-sgw2700i',
      images: [
        {
          src: generator.src,
          width: 200,
          price: '12V/8A Cig socket',
        },
        {
          src: generatortwo.src,
          width: 200,
          price: '12V/8A Cig socket',
        },
      ],
    },
  ]
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
