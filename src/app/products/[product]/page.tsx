'use client'

import { ProductPage } from '@features'
import { ProductEnum } from '@types'
import { products } from '@features/products/vehicule/constants'

export default async function Product({ params }: { params: { product: ProductEnum } }) {
  const info = products.find(({ alias }) => alias === params.product)
  return <ProductPage productName={params.product} productInfo={info} />
}
