import { ProductCard } from '@features/products/vehicule/ProductCard'
import { ProductVehiculeContainer } from '@features/products/vehicule/VehiculeProducts.elements'

import { products } from './constants'

export const VehiculeProducts = () => {
  return (
    <ProductVehiculeContainer>
      {products.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </ProductVehiculeContainer>
  )
}
