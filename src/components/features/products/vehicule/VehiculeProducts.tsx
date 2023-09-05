import { useState } from 'react'

import camo from '@assets/images/camuflado.webp'
import blue from '@assets/jpeg/azul.jpeg'
import gray from '@assets/png/gris.png'
import red from '@assets/png/rojo.png'
import green from '@assets/png/verde.jpeg'
import { ProductCard } from '@features/products/vehicule/ProductCard'
import { EColors, IProduct } from '@features/products/vehicule/types'
import {
  ButtonImage,
  ProductWrap,
  ImageProduct,
  ButtonProduct,
  NameOfProdyct,
  ChangeImageColor,
  ProductViewContainer,
  SeeInformationProduct,
  ProductContentContainer,
} from '@features/products/vehicule/VehiculeProducts.elements'
import scooterblack from '@assets/images/SEGWAY VEHICULOS/escooter e110s/E110S-GRIS-1_1100x.webp'
import scooterred from '@assets/images/SEGWAY VEHICULOS/escooter e110s/segway-e110s-2.jpg'
import fuglemanred from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/blanca.png'
import fuglemanblack from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/negro.png'
import fuglemangreen from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/verde.png'
import bikeblack from '@assets/images/SEGWAY VEHICULOS/Segway Dirt eBike X160/negra.jpeg'
import bikered from '@assets/images/SEGWAY VEHICULOS/Segway Dirt eBike X160/segway-ebike-x160-1-min.jpg'
import glblue from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600blue.png'
import glcamo from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600camo.png'
import glgreen from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600glgreen.png'
import glgred from '@assets/images/SEGWAY VEHICULOS/SNARLER 600GL/600red.png'
import at6 from '@assets/images/SEGWAY VEHICULOS/SNARLER AT6 LE/BLANCO.png'
import at6gray from '@assets/images/SEGWAY VEHICULOS/SNARLER AT6 LE/gris.png'
import villainred from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/blanca.png'
import villainblack from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/negro.jpeg'
import villaingreen from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'

const products: IProduct[] = [
  {
    images: [
      { color: EColors.Greeen, url: fuglemangreen.src },
      { color: EColors.Gray, url: fuglemanblack.src },
      { color: EColors.Red, url: fuglemanred.src },
    ],
    name: 'FUGLEMAN UT10 X',
    description: 'BRAÇO DUPLO TIPO (A-ARM) COM BARRA ESTABILIZADORA E CURSO DE (40 CM)',
  },
  {
    images: [
      { color: EColors.Red, url: villainred.src },
      { color: EColors.Gray, url: villainblack.src },
      { color: EColors.Greeen, url: villaingreen.src },
    ],
    name: 'VILLAIN SX10',
    description: 'BRAÇO DUPLO TIPO (A-ARM) COM BARRA ESTABILIZADORA E CURSO DE (40 CM)',
  },
  {
    images: [
      { color: EColors.Greeen, url: glgreen.src },
      { color: EColors.Red, url: glgred.src },
      { color: EColors.Blue, url: glblue.src },
      { color: EColors.Camouflaged, url: glcamo.src },
    ],
    name: 'SNARLER 600GL',
    description: 'BRAÇO DUPLO TIPO (A-ARM) COM BARRA ESTABILIZADORA E CURSO DE (40 CM)',
  },
  {
    images: [
      { color: EColors.Red, url: at6.src },
      { color: EColors.Gray, url: at6gray.src },
    ],
    name: 'SNARLER AT6 LE',
    description: 'BRAÇO DUPLO TIPO (A-ARM) COM BARRA ESTABILIZADORA E CURSO DE (40 CM)',
  },
  {
    images: [
      { color: EColors.Red, url: scooterred.src },
      { color: EColors.Gray, url: scooterblack.src },
    ],
    name: 'SCOOTER E110S',
    description: 'BRAÇO DUPLO TIPO (A-ARM) COM BARRA ESTABILIZADORA E CURSO DE (40 CM)',
  },
  {
    images: [
      { color: EColors.Red, url: bikered.src },
      { color: EColors.Gray, url: bikeblack.src },
    ],
    name: 'DIRT EBIKE X160',
    description: 'BRAÇO DUPLO TIPO (A-ARM) COM BARRA ESTABILIZADORA E CURSO DE (40 CM)',
  },
]

export const VehiculeProducts = () => {
  return (
    <>
      <ProductViewContainer>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </ProductViewContainer>
    </>
  )
}
