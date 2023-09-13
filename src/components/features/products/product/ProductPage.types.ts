import { ProductEnum } from '@types'
import { IProduct } from '@features/products/vehicule/types'

export type ProductPageProps = {
  productName: ProductEnum
  productInfo?: IProduct
}
