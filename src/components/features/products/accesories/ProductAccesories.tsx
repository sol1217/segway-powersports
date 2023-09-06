import React from 'react'

import { ProductAccesoriesWrap } from '@features/products/accesories/ProductsAccesories.elements'
import set from '@assets/images/SEGWAY VEHICULOS/accesorios/41Uq6vwMI6L.jpg'
import helmettwo from '@assets/images/SEGWAY VEHICULOS/accesorios/485192-Product-0-I-637414867936343027_c0d59536-8f1d-4475-a798-1d233d2fb1c7_1024x1024.webp'
import bagtwo from '@assets/images/SEGWAY VEHICULOS/accesorios/5_e6756e81-5439-49cf-b8f2-48983c773343.webp'
import bag from '@assets/images/SEGWAY VEHICULOS/accesorios/bag.webp'
import helmet from '@assets/images/SEGWAY VEHICULOS/accesorios/ninebot helmet casco.png'
import storagetwo from '@assets/images/SEGWAY VEHICULOS/accesorios/Ninebot_Kickscooter_Max_Bag-Product_Introduction_3.webp'
import phoneholdertwo from '@assets/images/SEGWAY VEHICULOS/accesorios/ninebot_kickscooter_phone_holder_1_.png'
import phoneholder from '@assets/images/SEGWAY VEHICULOS/accesorios/phone holder.jpeg'
import storage from '@assets/images/SEGWAY VEHICULOS/accesorios/scooter storage bag.webp'
import setTwo from '@assets/images/SEGWAY VEHICULOS/accesorios/segway-ninebot-rider-protective-kit-960.jpg'
import { ProductItem } from '@features/products/accesories/ProductItem/ProductItem'

type Image = {
  src: string
  width: number
  price: string
}

type ProductAce = {
  name: string
  images: Image[]
}
export const ProductAccesories = () => {
  const products: ProductAce[] = [
    {
      name: 'Ninebot Bag',
      images: [
        {
          src: bag.src,
          width: 200,
          price: '$5.595.000',
        },
        {
          src: bagtwo.src,
          width: 195,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'NINEBOT HELMET CASCO',
      images: [
        {
          src: helmet.src,
          width: 240,
          price: '$5.595.000',
        },
        {
          src: helmettwo.src,
          width: 195,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'NiNeBot HelMet',
      images: [
        {
          src: phoneholder.src,
          width: 155,
          price: '$5.595.000',
        },
        {
          src: phoneholdertwo.src,
          width: 200,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'NINEBOT HELMET CASCO',
      images: [
        {
          src: storage.src,
          width: 300,
          price: '$5.595.000',
        },
        {
          src: storagetwo.src,
          width: 300,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'NINEBOT HELMET CASCO',
      images: [
        {
          src: setTwo.src,
          width: 300,
          price: '$5.595.000',
        },
        {
          src: set.src,
          width: 200,
          price: '$5.595.000',
        },
      ],
    },
    {
      name: 'Ninebot Bag',
      images: [
        {
          src: bag.src,
          width: 200,
          price: '$5.595.000',
        },
      ],
    },
  ]
  return (
    <>
      <ProductAccesoriesWrap>
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </ProductAccesoriesWrap>
    </>
  )
}
