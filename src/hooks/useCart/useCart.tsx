import { useState } from 'react'

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
  const [cart, setCart] = useState<ProductData[]>(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]') as ProductData[]
    return storedCart
  })

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
