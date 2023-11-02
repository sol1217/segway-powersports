import { useMemo, useState, useEffect } from 'react'

import { ProductsColors } from '@types'

export interface ProductData {
  picture: string
  name: string
  price: number
  quantity: number
  colorsAvailable?: ProductsColors[]
  selectedColor?: string
}

const useCart = () => {
  const [cart, setCart] = useState<ProductData[]>([])

  useEffect(() => {
    const savedCartData = JSON.parse(localStorage.getItem('cart') ?? '[]') as ProductData[]

    setCart(savedCartData)
  }, [])

  const addToCart = (productData: ProductData) => {
    const productAlreadyInCart = cart.some((item) => item.name === productData.name)

    if (!productAlreadyInCart) {
      const newCart = [...cart, productData]
      setCart(newCart)

      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  const removeFromCart = (productName: string) => {
    const updatedCart = cart.filter((item) => item.name !== productName)
    setCart(updatedCart)

    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  return { cart, addToCart, removeFromCart }
}

export default useCart
