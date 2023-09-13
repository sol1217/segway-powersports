import React, { useState } from 'react'

import { Product } from '@types'
import at6STwo from '@assets/images/ates.webp'
import rear from '@assets/images/rear-cargo-2.webp'
import aluminium from '@assets/images/s-kip-plates.webp'
import at6LTwo from '@assets/images/skip-plates.webp'
import aluminiumTwo from '@assets/jpeg/ALUMINUM-ARM-GUARD-ASSY.jpeg'
import at6S from '@assets/jpeg/ate-s-skip.jpeg'
import bumperBlack from '@assets/jpeg/front-bumper-black.jpeg'
import bumperBlue from '@assets/jpeg/front-bumper-blue.jpeg'
import bumperGreen from '@assets/jpeg/front-bumper-green.jpeg'
import bumperRed from '@assets/jpeg/front-bumper-red.jpeg'
import generatortwo from '@assets/jpeg/generador-2.jpeg'
import generator from '@assets/jpeg/generador.jpeg'
import rearTwo from '@assets/jpeg/rear-cargo.jpeg'
import ateL from '@assets/jpeg/ship-plates-2.jpg'
import front from '@assets/png/front-cargo-2.jpeg'
import frontTwo from '@assets/png/front-cargo.png'
import { ProductAccesoriesWrap } from '@features/products/accesories-vehicules/AccesoriesVehicules.elements'
import { ProductItem } from '@features/products/accesories/ProductItem'

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
          width: 206,
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
          src: aluminium.src,
          width: 260,
          price: 'Material de aluminio',
        },
        {
          src: aluminiumTwo.src,
          width: 200,
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
          width: 260,
          price: '104 Litros',
        },
        {
          src: rearTwo.src,
          width: 260,
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
