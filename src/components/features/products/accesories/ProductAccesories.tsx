import React from 'react'

import { Product } from '@types'
import childrenyellow from '@assets/images/yellow-protective.webp'
import generatortwo from '@assets/jpeg/generador-2.jpeg'
import generator from '@assets/jpeg/generador.jpeg'
import childrenGear from '@assets/jpeg/pink-protective.jpeg'
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

export const ProductAccesories = () => {
  const products: Product[] = [
    {
      name: 'SCOOTER BAG',
      alias: 'scooter-bag',
      images: [
        {
          src: bag.src,
          width: 200,
          price: '$50',
        },
        {
          src: bagtwo.src,
          width: 195,
          price: '$50',
        },
      ],
    },
    {
      name: 'NINEBOT HELMET',
      alias: 'ninebot-casco',
      images: [
        {
          src: helmet.src,
          width: 240,
          price: '$45',
        },
        {
          src: helmettwo.src,
          width: 195,
          price: '$45',
        },
      ],
    },
    {
      name: 'NINEBOT PHONE HOLDER',
      alias: 'phone-holder',
      images: [
        {
          src: phoneholder.src,
          width: 155,
          price: '$30',
        },
        {
          src: phoneholdertwo.src,
          width: 200,
          price: '$30',
        },
      ],
    },
    {
      name: 'SCOOTER STORAGE BAG',
      alias: 'storage-bag',
      images: [
        {
          src: storage.src,
          width: 300,
          price: '$45',
        },
        {
          src: storagetwo.src,
          width: 300,
          price: '$45',
        },
      ],
    },
    {
      name: 'NINEBOT PROTECTIVE GEAR SET',
      alias: 'gear-set',
      images: [
        {
          src: setTwo.src,
          width: 260,
          price: '$45',
        },
        {
          src: set.src,
          width: 170,
          price: '$45',
        },
      ],
    },
    {
      name: 'NINEBOT CHILDREN PROTECTIVE GEAR SET',
      alias: 'generatot-sgw2700i',
      images: [
        {
          src: childrenGear.src,
          width: 176,
          price: '$50',
        },
        {
          src: childrenyellow.src,
          width: 220,
          price: '$50',
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
      </ProductAccesoriesWrap>
    </>
  )
}
