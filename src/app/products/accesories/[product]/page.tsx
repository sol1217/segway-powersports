'use client'

import { ProductPageAccesories } from '@features'
import { ProductEnum } from '@types'
import { products } from '@features/products/accesories/constants'

export default async function Product({ params }: { params: { product: ProductEnum } }) {
  const info = products.find(({ alias }) => alias === params.product)
  return <ProductPageAccesories productName={params.product} productInfo={info} />
}
