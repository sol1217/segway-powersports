import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PiShoppingCartBold } from 'react-icons/pi'

import useCart from '@hooks/useCart/useCart'
import {
  CountContainer,
  CartLinkContainer,
} from '@features/layout/GeneralLayout/Header/NavigationLinks/NavigationLinks.elements'

export const NavigationLinks = () => {
  const { cart } = useCart()
  const [productCount, setProductCount] = useState(cart.length)

  useEffect(() => {
    setProductCount(cart.length)
  }, [cart])

  return (
    <>
      <Link href="/">Inicio</Link>
      <Link href="/about">Sobre nosotros</Link>
      <Link href="/products">Productos</Link>
      <Link href="/contacts">Contacto</Link>
      <CartLinkContainer href="/cart">
        <PiShoppingCartBold style={{ fontSize: '25px' }} />
        <CountContainer>{productCount || ''}</CountContainer>
      </CartLinkContainer>
    </>
  )
}
