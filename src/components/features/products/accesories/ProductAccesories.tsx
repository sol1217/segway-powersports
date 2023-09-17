import React from 'react'

import { Product } from '@types'
import { ProductItem } from '@features/products/accesories/ProductItem'
import { ProductAccesoriesWrap } from '@features/products/accesories/ProductsAccesories.elements'
import bagtwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/bag-two.jpg'
import bag from '@assets/images/SEGWAY-VEHICULOS/accesorios/bag-two.jpg'
import helmettwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/helmet.jpg'
import storagetwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/Ninebot_Kickscooter-Bag.jpg'
import helmet from '@assets/images/SEGWAY-VEHICULOS/accesorios/ninebot-helmet.png'
import phoneholdertwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/ninebot-phone-holder.png'
import phoneholder from '@assets/images/SEGWAY-VEHICULOS/accesorios/phone-holder.jpeg'
import childrenGear from '@assets/images/SEGWAY-VEHICULOS/accesorios/pink-protective.jpeg'
import storage from '@assets/images/SEGWAY-VEHICULOS/accesorios/scooter-storage-bag.jpg'
import setTwo from '@assets/images/SEGWAY-VEHICULOS/accesorios/segway-ninebot-protective-kit.jpg'
import set from '@assets/images/SEGWAY-VEHICULOS/accesorios/set.jpg'
import childrenyellow from '@assets/images/SEGWAY-VEHICULOS/accesorios/yellow-protective.jpg'

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
      name: 'NI NEBOT HELMET',
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
