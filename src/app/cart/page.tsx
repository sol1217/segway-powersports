import useCart from '@hooks/useCart/useCart'
import CartPage from '@features/cart/CartPage/CartPage'

export const metadata = {
  title: 'Segway Powersports Cart',
  description: 'Segway Powersports Cart',
}
export default function Cart() {
  return <CartPage />
}
