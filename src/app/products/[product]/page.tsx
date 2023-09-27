import { ProductPageVehicules } from '@features'
import { ProductEnum } from '@types'
import { products } from '@features/products/vehicule/constants'

export const metadata = {
  title: 'Segway Powersports Costa Rica',
  description: 'Segway Powersports Costa Rica',
}

export default async function Product({ params }: { params: { product: ProductEnum } }) {
  const info = products.find(({ alias }) => alias === params.product)
  return <ProductPageVehicules productName={params.product} productInfo={info} />
}
