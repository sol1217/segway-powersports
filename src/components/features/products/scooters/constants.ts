import { Product } from '@types'
import zinga6two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing A6/51mioMO0FNL._AC_UF894,1000_QL80_.jpg'
import zinga6 from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing A6/A6.png'
import zingc20 from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c20/41QlRO-31LL._AC_UF1000,1000_QL80_.jpg'
import zingc20two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c20/eKickScooter-ZING-C20_Product-picture_360-side-view-3-2140x967_72.png'
import zingc8 from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c8/5151_6467615bed32d1.21618354_909692496.segway-ninebot-ekickscooter-zing-c8.webp'
import zingc8two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing c8/s-l500.jpg'
import zinge8two from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing e8/753109_1.webp'
import zinge8three from '@assets/images/SEGWAY VEHICULOS/ninebot ekickscooter zing e8/segway-ninebot-kickscooter-zing-e8-roze.webp'
import g1two from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT1/segway-gt1-2.jpg'
import g1 from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT1/segway-gt1-5.jpg'
import g2two from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT2/21.png'
import g2 from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT2/6529288_sd.jpg'
import g2three from '@assets/images/SEGWAY VEHICULOS/SUPERSCOOTER GT2/gt2_1024x1024.webp'

export const products: Product[] = [
  {
    name: 'Ninebot EkickScooter C20',
    alias: 'ekickscooter-c20',
    images: [
      {
        src: zingc20.src,
        width: 185,
        price: '$425.000',
      },
      {
        src: zingc20two.src,
        width: 220,
        price: '$425.000',
      },
    ],
  },
  {
    name: 'Ninebot EkickScooter Zing C8',
    alias: 'zing-c8',
    images: [
      {
        src: zingc8.src,
        width: 215,
        price: '$325.000',
      },
      {
        src: zingc8two.src,
        width: 225,
        price: '$325.000',
      },
    ],
  },
  {
    name: 'Segway SuperScooter GT1',
    alias: 'superscooter-gt1',
    images: [
      {
        src: g1.src,
        width: 350,
        price: '$3.950.000',
      },
      {
        src: g1two.src,
        width: 357,
        price: '$3.950.000',
      },
    ],
  },
  {
    name: 'Ninebot EkickScooter Zing E8',
    alias: 'zing-e8',
    images: [
      {
        src: zinge8three.src,
        width: 170,
        price: '$395.000',
      },
      {
        src: zinge8two.src,
        width: 196,
        price: '$395.000',
      },
    ],
  },
  {
    name: 'Ninebot EkickScooter Zing A6',
    alias: 'zing-a6',
    images: [
      {
        src: zinga6.src,
        width: 195,
        price: '$210.000',
      },
      {
        src: zinga6two.src,
        width: 146,
        price: '$210.000',
      },
    ],
  },
  {
    name: 'Segway SuperScooter GT2',
    alias: 'superscooter-gt2',
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
