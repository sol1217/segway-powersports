import { Metadata, ResolvingMetadata } from 'next'

import { ProductPageAccesories } from '@features'
import { ProductEnum } from '@types'
import { products } from '@features/products/accesories/constants'

type Props = { params: { product: ProductEnum } }

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const info = products.find(({ alias }) => alias === params.product)

  if (info) {
    return {
      title: info.name,
      description: info.completeDesciprtion,
    }
  }

  return {
    title: '',
    description: '',
  }
}

export default function Product({ params }: Props) {
  const info = products.find(({ alias }) => alias === params.product)
  return <ProductPageAccesories productName={params.product} productInfo={info} />
}
