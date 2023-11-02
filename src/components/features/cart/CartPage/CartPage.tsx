'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiPlus, BiMinus } from 'react-icons/bi'

import bancoNational from '@assets/jpeg/BN.jpeg'
import bac from '@assets/png/bac.png'
import bancoCostaRica from '@assets/png/bcr.png'
import bancoPopular from '@assets/png/bp.png'
import pay from '@assets/png/candado.png'
import carts from '@assets/png/cart.png'
import check from '@assets/png/cheque.png'
import icono from '@assets/png/icono-segway.png'
import useCart, { ProductData } from '@hooks/useCart/useCart'
import {
  IconoAdd,
  ItemText,
  CountItem,
  IconCheck,
  IconoNext,
  IconoDelete,
  IconoSegway,
  SelectColor,
  ChangeButton,
  DeleteButton,
  IconoScooter,
  CartContainer,
  IconoDelivery,
  IconoLocation,
  PaymentButton,
  TextTotalItem,
  ColorAvailable,
  DecreaseButton,
  IncreaseButton,
  TotalPriceItem,
  BackProductText,
  TarjetContainer,
  KeepShoppingWrap,
  PaymentContainer,
  SummaryContainer,
  AllItemsContainer,
  CartPageContainer,
  EmptyCarContainer,
  LocationContainer,
  QuantityContainer,
  SecurePaymentWrap,
  ViewItemContainer,
  BackProductsButton,
  ChangeItemContainer,
  DeleteItemContainer,
  ItemInformationCart,
  TarjetIconContainer,
  PaymentCartContainer,
  ProductCartContainer,
  TitleColorsAvailable,
  DeliveryNoteContainer,
  NoteDeliveryContainer,
  ProductQuantityControl,
  InformationItemContainer,
  DeliveryLocationContainer,
} from '@features/cart/CartPage/CartPage.elements'

export default function CartPage({ product }: { product?: ProductData }) {
  const [cartItems, setCartItems] = useState([] as ProductData[])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number[]>([])
  const { cart } = useCart()
  const [productCount, setProductCount] = useState(cart.length)
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({})
  const [colorsSelected, setColorsSelected] = useState(false)
  const [totalProductPrice, setTotalProductPrice] = useState(0)

  const saveToLocalStorage = (key: string, data: any) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(data))
    }
  }

  useEffect(() => {
    setProductCount(cart.length)
  }, [cart])

  useEffect(() => {
    const cart: ProductData[] = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartItems(cart)
  }, [])

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item, index) => {
      const price = item.price || 0
      return total + price * (quantity[index] || 0)
    }, 0)
    setTotalPrice(newTotalPrice)
  }, [cartItems, quantity])

  const handleRemoveFromCart = (productName: string) => {
    const updatedCart = cartItems.filter((item) => item.name !== productName)
    setCartItems(updatedCart)
  }

  useEffect(() => {
    saveToLocalStorage('cart', cartItems)
  }, [cartItems])

  const handleIncrementQuantity = (index: number) => {
    const updatedCart = [...cartItems]
    const item = updatedCart[index]

    if (item) {
      item.quantity = (item.quantity || 0) + 1
      setCartItems(updatedCart)

      const newTotalPrice = updatedCart.reduce((total, cartItem) => {
        return total + (cartItem.price || 0) * (cartItem.quantity || 0)
      }, 0)
      setTotalPrice(newTotalPrice)
    }
  }

  const handleDecrementQuantity = (index: number) => {
    const updatedCart = [...cartItems]
    const item = updatedCart[index]

    if (item && typeof item.quantity === 'number' && item.quantity > 0) {
      item.quantity = item.quantity - 1
      setCartItems(updatedCart)

      const newTotalPrice = updatedCart.reduce((total, cartItem) => {
        return total + (cartItem.price || 0) * (cartItem.quantity || 0)
      }, 0)
      setTotalPrice(newTotalPrice)
    }
  }

  const handleColorChange = (productId: string, color: string) => {
    const updatedSelectedColors = { ...selectedColors }
    updatedSelectedColors[productId] = color

    const allColorsSelected = cartItems.every((item) => updatedSelectedColors[item.name])

    setSelectedColors(updatedSelectedColors)

    setColorsSelected(allColorsSelected)
  }

  useEffect(() => {
    const allColorsSelected = cartItems.every((item) => selectedColors[item.name])
    setColorsSelected(allColorsSelected)
  }, [])

  const totalCartPrice = cartItems.reduce((total, item) => {
    const itemPrice = (item.price || 0) * Math.max(item.quantity || 1, 1)
    return total + itemPrice
  }, 0)

  useEffect(() => {
    saveToLocalStorage('cart', cartItems)
    saveToLocalStorage('selectedColors', selectedColors)
  }, [cartItems, selectedColors])

  const formattedTotalCartPrice = totalCartPrice.toLocaleString('en-US')

  saveToLocalStorage('totalCartPrice', totalCartPrice)

  useEffect(() => {
    const storedTotalCartPrice = localStorage.getItem('totalCartPrice')
    if (storedTotalCartPrice) {
      const totalCartPriceNumber = parseFloat(storedTotalCartPrice.replace(/,/g, ''))
      setTotalProductPrice(totalCartPriceNumber)
    }
  }, [])

  return (
    <CartPageContainer>
      <LocationContainer>
        <DeliveryLocationContainer>
          <IconoLocation />
          <p>Envíos sólo a Costa Rica</p>
        </DeliveryLocationContainer>
        <PaymentContainer>
          <SecurePaymentWrap>
            <Image src={pay.src} width={35} height={35} alt="" />
            <h3>Pago seguro</h3>
          </SecurePaymentWrap>
          <KeepShoppingWrap>
            <Link href="./products">Seguir Comprando</Link>
            <IconoNext />
          </KeepShoppingWrap>
        </PaymentContainer>
      </LocationContainer>

      <CartContainer>
        <ItemInformationCart>
          <NoteDeliveryContainer>
            <DeliveryNoteContainer>
              <IconoDelivery />
              <h3>Nota: Entrega de pedido</h3>
            </DeliveryNoteContainer>
            <p>
              La entrega dentro del <b>ÁREA</b> metropolitana es <b>GRATIS</b>
            </p>
          </NoteDeliveryContainer>

          <AllItemsContainer>
            <IconoScooter />
            <ItemText>
              <h2> Todos los Artículos</h2>
              <h2>({productCount || 0})</h2>
            </ItemText>
          </AllItemsContainer>

          <ChangeItemContainer>
            <div>
              <h3>¿Quieres Añadir más Artículos a tu carrito?</h3>
              <p>Presione el botón para regresar al menú de los productos.</p>
            </div>
            <ChangeButton>
              <Link href="./products">Volver</Link>
            </ChangeButton>
          </ChangeItemContainer>

          {cartItems.length === 0 ? (
            <EmptyCarContainer>
              <Image width={150} height={150} src={carts.src} alt="" />
              <h2>Tu carrito se encuentra vacío</h2>
              <BackProductText href="./products">
                <IconoAdd />
                Volver al área de productos
              </BackProductText>
              <BackProductsButton>
                <Link href="./products">Seguir Comprando</Link>
              </BackProductsButton>
            </EmptyCarContainer>
          ) : (
            cartItems.map((item, index) => (
              <ProductCartContainer key={index}>
                <IconoSegway>
                  <IconCheck src={check.src} width={30} height={30} alt="" />
                  <Image src={icono.src} width={60} height={40} alt="" />
                  <h2>Segway Powersports</h2>
                </IconoSegway>

                <ViewItemContainer>
                  <Image src={item.picture} width={170} height={170} alt="" />
                  <InformationItemContainer>
                    <div>
                      <h3>{item.name}</h3>

                      {item.colorsAvailable && item.colorsAvailable.length > 0 && (
                        <ColorAvailable>
                          {selectedColors[item.name] ? null : (
                            <TitleColorsAvailable>Elegir un color:</TitleColorsAvailable>
                          )}{' '}
                          <SelectColor>
                            {item.colorsAvailable.map((color) => (
                              <label key={color}>
                                <input
                                  type="radio"
                                  name={`color-${item.name}`}
                                  value={color}
                                  checked={selectedColors[item.name] === color}
                                  onChange={() => handleColorChange(item.name, color)}
                                />{' '}
                                {color}
                              </label>
                            ))}
                          </SelectColor>
                        </ColorAvailable>
                      )}
                    </div>
                    <ProductQuantityControl>
                      <h3>${(item.price || 0) * Math.max(item.quantity || 1, 1)}</h3>
                      <DeleteItemContainer>
                        <QuantityContainer>
                          <DecreaseButton onClick={() => handleDecrementQuantity(index)}>
                            <BiMinus />
                          </DecreaseButton>
                          <CountItem>{Math.max(item.quantity || 1, 1)}</CountItem>
                          <IncreaseButton onClick={() => handleIncrementQuantity(index)}>
                            <BiPlus />
                          </IncreaseButton>
                        </QuantityContainer>
                        <DeleteButton onClick={() => handleRemoveFromCart(item.name)}>
                          <IconoDelete />
                        </DeleteButton>
                      </DeleteItemContainer>
                    </ProductQuantityControl>
                  </InformationItemContainer>
                </ViewItemContainer>
              </ProductCartContainer>
            ))
          )}
        </ItemInformationCart>

        <PaymentCartContainer>
          <SummaryContainer>
            <h1>Resumen del Pedido</h1>
            <TotalPriceItem>${totalCartPrice.toLocaleString('en-US')}</TotalPriceItem>
            <TextTotalItem>Cantidad total</TextTotalItem>
            {cartItems.length > 0 && (
              <PaymentButton
                className={
                  cartItems.some(
                    (item) => item.colorsAvailable && item.colorsAvailable.length > 0,
                  ) && colorsSelected
                    ? 'disabled-button'
                    : ''
                }>
                <Link href="./checkout">Pagar ahora</Link>
                <h4>({productCount || 0})</h4>
              </PaymentButton>
            )}
            <p>Recuerda que el envío se coordina después de haber completado la compra.</p>
          </SummaryContainer>

          <TarjetContainer>
            <h2>ACEPTAMOS</h2>
            <TarjetIconContainer>
              <Image src={bac.src} width={110} height={60} alt="" />
              <Image src={bancoNational.src} width={100} height={60} alt="" />
              <Image src={bancoCostaRica.src} width={100} height={60} alt="" />
              <Image src={bancoPopular.src} width={100} height={60} alt="" />
            </TarjetIconContainer>
          </TarjetContainer>
        </PaymentCartContainer>
      </CartContainer>
    </CartPageContainer>
  )
}
