'use client'

import React, { useState, useEffect } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import { BsScooter } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

import { Box } from '@core'
import pay from '@assets/png/candado.png'
import gray from '@assets/png/gray.png'
import icono from '@assets/png/icono-segway.png'
import {
  ItemText,
  CountItem,
  TextTaxes,
  TitleCart,
  NotesInput,
  RemoveIcon,
  TitleNotes,
  IconoSegway,
  ChangeButton,
  DeleteButton,
  ProductCount,
  SubtotalName,
  CartContainer,
  ProductButton,
  CheckoutButton,
  DecreaseButton,
  IncreaseButton,
  NotesContainer,
  OrderContainer,
  NameProductCart,
  ButtonsContainer,
  KeepShoppingWrap,
  PaymentContainer,
  AllItemsContainer,
  CartPageContainer,
  CheckoutContainer,
  LocationContainer,
  QuantityContainer,
  SecurePaymentWrap,
  SubTotalContainer,
  ViewItemContainer,
  ChangeItemContainer,
  AddQuantityContainer,
  ProductCartContainer,
  ViewProductContainer,
  DeliveryNoteContainer,
  NoteDeliveryContainer,
  ProductOrderContainer,
  InformationProductCart,
  ProductQuantityControl,
  InformationItemContainer,
  DeliveryLocationContainer,
} from '@features/cart/CartPage/CartPage.elements'
import { ProductCartProps } from '@features/cart/CartPage/CartPage.types'
import scooterred from '@assets/images/SEGWAY-VEHICULOS/escooter-e110s/segway-e110s.jpg'

import { Product } from '../../../../types/app'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([] as Product[])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number[]>([])

  useEffect(() => {
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

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
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

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

      localStorage.setItem('cart', JSON.stringify(updatedCart))
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

      localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
  }

  return (
    <CartPageContainer>
      <LocationContainer>
        <DeliveryLocationContainer>
          <GrLocation style={{ fontSize: '25px' }} />
          <p>Envios solo a Costa Rica</p>
        </DeliveryLocationContainer>
        <PaymentContainer>
          <SecurePaymentWrap>
            <img src={pay.src} width={35} height={35} />
            <h3>Pago seguro</h3>
          </SecurePaymentWrap>
          <KeepShoppingWrap>
            <h3>Seguir Comprando</h3>
            <MdOutlineNavigateNext style={{ fontSize: '30px' }} />
          </KeepShoppingWrap>
        </PaymentContainer>
      </LocationContainer>

      <CartContainer>
        <NoteDeliveryContainer>
          <DeliveryNoteContainer>
            <TbTruckDelivery style={{ fontSize: '25px' }} />
            <h3>Nota: Entrega de pedido</h3>
          </DeliveryNoteContainer>
          <p>
            Entrega dentro de la <b>ZONA</b> metropolitana es <b>GRATIS</b>
          </p>
        </NoteDeliveryContainer>

        <AllItemsContainer>
          <BsScooter style={{ fontSize: '28px' }} />
          <ItemText>
            <h2> Todos los Artículos</h2>
            <h2>(3)</h2>
          </ItemText>
        </AllItemsContainer>

        <ChangeItemContainer>
          <div>
            <h3>Añade articulos nuevo con descuento</h3>
            <p>Válido para llevarte un artículo extra</p>
          </div>
          <ChangeButton>Elegir</ChangeButton>
        </ChangeItemContainer>

        <ProductCartContainer>
          <IconoSegway>
            <img src={icono.src} width={60} height={40} />
            <h2>Segway Powersports</h2>
          </IconoSegway>

          <ViewItemContainer>
            <img src={scooterred.src} width={170} height={170} alt="" />

            <InformationItemContainer>
              <div>
                <h3>Ninebot ekickScooter ZING C8</h3>
              </div>
              <ProductQuantityControl>
                <h3>$11.23</h3>
                <QuantityContainer>
                  <DecreaseButton>
                    <BiMinus />
                  </DecreaseButton>
                  <CountItem>3</CountItem>
                  <IncreaseButton>
                    <BiPlus />
                  </IncreaseButton>
                </QuantityContainer>
                <DeleteButton>
                  <RiDeleteBinLine style={{ fontSize: '21px' }} />
                </DeleteButton>
              </ProductQuantityControl>
            </InformationItemContainer>
          </ViewItemContainer>
        </ProductCartContainer>
      </CartContainer>
      {/* <TitleCart>Carrito de Compras(3)</TitleCart>
      <CartContainer>
        {cartItems.map((item, index) => (
          <ProductOrderContainer key={index}>
            <ViewProductContainer>
              <InformationProductCart>
                <img src={item.picture} width={170} height={170} alt="" />
                <NameProductCart>{item.name}</NameProductCart>
                <h3>${((item.price || 0) * (item.quantity || 1)).toFixed(3)}</h3>
              </InformationProductCart>
              <ButtonsContainer>
                <DeleteButton onClick={() => handleRemoveFromCart(item.name)}>
                  <RemoveIcon />
                  Eliminar
                </DeleteButton>
                <AddQuantityContainer>
                  <Box justifyContent="space-between" width={120} margin="0 auto">
                    <ProductButton onClick={() => handleDecrementQuantity(index)}>
                      <BiMinus size={30} />
                    </ProductButton>
                    <ProductCount>{item.quantity || 1}</ProductCount>
                    <ProductButton onClick={() => handleIncrementQuantity(index)}>
                      <BiPlus size={30} />
                    </ProductButton>
                  </Box>
                </AddQuantityContainer>
              </ButtonsContainer>
            </ViewProductContainer>
          </ProductOrderContainer>
        ))}
        <OrderContainer>
          <NotesContainer>
            <TitleNotes>Notas de entrega/pedido</TitleNotes>
            <NotesInput />
          </NotesContainer>
          <CheckoutContainer>
            <SubTotalContainer>
              <SubtotalName>Subtotal</SubtotalName>
              <h3>${totalPrice.toFixed(2)}</h3>
            </SubTotalContainer>
            <TextTaxes>Sin incluir impuestos y envío</TextTaxes>
            <CheckoutButton>
              <Link href="/checkout">Verificar</Link>
            </CheckoutButton>
          </CheckoutContainer>
        </OrderContainer>
      </CartContainer>*/}
    </CartPageContainer>
  )
}
