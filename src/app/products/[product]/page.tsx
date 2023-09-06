'use client'

import { ProductPage } from '@features'
import { ProductEnum } from '@types'

export default function Product({ params }: { params: { product: ProductEnum } }) {
  return <ProductPage productName={params.product} />
}
