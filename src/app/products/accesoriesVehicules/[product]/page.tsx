'use client'

import { ProductPageAccesoriesVehicules } from '@features'
import { ProductEnum } from '@types'
import { products } from '@features/products/accesories-vehicules/constants'

export default async function Product({ params }: { params: { product: ProductEnum } }) {
  const info = products.find(({ alias }) => alias === params.product)
  return <ProductPageAccesoriesVehicules productName={params.product} productInfo={info} />
}
