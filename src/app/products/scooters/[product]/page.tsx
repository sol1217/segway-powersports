'use client'

import { ProductPageScooter } from '@features'
import { ProductEnum } from '@types'
import { products } from '@features/products/scooters/constants'

export default async function Product({ params }: { params: { product: ProductEnum } }) {
  const info = products.find(({ alias }) => alias === params.product)
  return <ProductPageScooter productName={params.product} productInfo={info} />
}
