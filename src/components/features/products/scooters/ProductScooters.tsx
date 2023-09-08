'use client'

import React, { useState } from 'react'

import { ProductItem } from '@features/products/scooters/ProductItem'
import { ProductScootersContainer } from '@features/products/scooters/ProductScooters.elements'
import zinga6two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing A6/51mioMO0FNL._AC_UF894,1000_QL80_.jpg'
import zinga6 from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing A6/A6.png'
import zingc20 from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c20/41QlRO-31LL._AC_UF1000,1000_QL80_.jpg'
import zingc20two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c20/eKickScooter-ZING-C20_Product-picture_360-side-view-3-2140x967_72.png'
import zingc8 from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c8/5151_6467615bed32d1.21618354_909692496.segway-ninebot-ekickscooter-zing-c8.webp'
import zingc8two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c8/s-l500.jpg'
import zinge8two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing e8/753109_1.webp'
import zinge8three from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing e8/segway-ninebot-kickscooter-zing-e8-roze.webp'
import g1three from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT1/6530380ld.jpg'
import g1two from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT1/segway-gt1-2.jpg'
import g1 from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT1/segway-gt1-5.jpg'
import g2two from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT2/21.png'
import g2 from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT2/6529288_sd.jpg'
import g2three from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT2/gt2_1024x1024.webp'

type Image = {
  src: string
  width: number
  price: string
}

type Product = {
  name: string
  images: Image[]
}

export const ProductScooters = () => {
  const products: Product[] = [
    {
      name: 'Ninebot EkicksScooter C20',
      images: [
        {
          src: zingc20.src,
          width: 185,
          price: '$5.595.000',
        },
        {
          src: zingc20two.src,
          width: 220,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'Ninebot EkicksScooter Zing c8',
      images: [
        {
          src: zingc8.src,
          width: 215,
          price: '$5.595.000',
        },
        {
          src: zingc8two.src,
          width: 225,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'Superscooter G1',
      images: [
        {
          src: g1.src,
          width: 350,
          price: '$5.595.000',
        },
        {
          src: g1two.src,
          width: 357,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'Ninebot EkicksScooter Zing E8',
      images: [
        {
          src: zinge8three.src,
          width: 170,
          price: '$5.595.000',
        },
        {
          src: zinge8two.src,
          width: 196,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'Ninebot EkicksScooter Zing A6',
      images: [
        {
          src: zinga6.src,
          width: 195,
          price: '$5.595.000',
        },
        {
          src: zinga6two.src,
          width: 146,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'Superscooter G2',
      images: [
        {
          src: g2.src,
          width: 140,
          price: '$5.595.000',
        },
        {
          src: g2two.src,
          width: 195,
          price: '$5.595.000',
        },
        {
          src: g2three.src,
          width: 195,
          price: '$5.595.000',
        },
      ],
    },
  ]

  return (
    <>
      <ProductScootersContainer>
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </ProductScootersContainer>
    </>
  )
}
