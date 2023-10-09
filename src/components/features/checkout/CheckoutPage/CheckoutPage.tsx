'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiMailSend } from 'react-icons/bi'

import icono from '@assets/png/icono-segway.png'
import paypal from '@assets/png/paypal.png'
import visa from '@assets/png/visa.png'
import { ProductCartProps } from '@features/cart/CartPage/CartPage.types'
import {
  IconCar,
  IconHome,
  NameClient,
  CommentText,
  DeliverText,
  MethodsName,
  ChangeButton,
  CountProduct,
  DataDelivery,
  ImageProduct,
  ProductToBuy,
  SubmitButton,
  IconContainer,
  LineContainer,
  CardsContainer,
  TotalContainer,
  SubmitContainer,
  CommentContainer,
  PaymentContainer,
  LocationContainer,
  SendMessageButton,
  TypeTripContainer,
  CardTotalContainer,
  NameClientContainer,
  PaymentCardContainer,
  CheckoutPageContainer,
  DataDeliveryContainer,
  ProductToBuyContainer,
  ProductTotalContainer,
  CheckDeliveryContainer,
  DeliveryMethodContainer,
  LocationDeliverContainer,
  LocationDeliveryContainer,
} from '@features/checkout/CheckoutPage/CheckoutPage.elements'
import scooterred from '@assets/images/SEGWAY-VEHICULOS/escooter-e110s/segway-e110s.jpg'

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>('retirar')

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method)
  }
  return (
    <CheckoutPageContainer>
      <PaymentContainer>
        <MethodsName>Metodos de Pago</MethodsName>
        <PaymentCardContainer>
          <CardsContainer $background="#f3ba35" href="">
            <img src={visa.src} width={70} height={70} />
          </CardsContainer>
          <CardsContainer $background="#f1e9e9" href="">
            <img style={{ borderRadius: '50%' }} src={paypal.src} width={70} height={70} />
          </CardsContainer>
          <CardsContainer $background="#EE1616FF" href="">
            <img src={visa.src} width={70} height={70} />
          </CardsContainer>
          <CardsContainer $background="#f1e9e9" href="">
            <img style={{ borderRadius: '50%' }} src={paypal.src} width={70} height={70} />
          </CardsContainer>
        </PaymentCardContainer>
        <IconContainer>
          <LineContainer />
          <Image src={icono.src} width={70} height={40} alt="" />
          <LineContainer />
        </IconContainer>

        <DeliveryMethodContainer>
          <h3>Metodo de Entrega</h3>
          <CheckDeliveryContainer>
            <TypeTripContainer>
              <div>
                <input
                  type="radio"
                  id="retirar-checkbox"
                  name="delivery-method"
                  checked={selectedMethod === 'retirar'}
                  onChange={() => handleMethodChange('retirar')}
                />
              </div>
              <IconCar />
              Retirar en la tienda
            </TypeTripContainer>
            <TypeTripContainer>
              <div>
                <input
                  type="radio"
                  id="enviar-checkbox"
                  name="delivery-method"
                  checked={selectedMethod === 'enviar'}
                  onChange={() => handleMethodChange('enviar')}
                />
              </div>
              <IconHome />
              Enviar a domicilio
            </TypeTripContainer>
          </CheckDeliveryContainer>
        </DeliveryMethodContainer>
        {selectedMethod === 'retirar' && (
          <DataDeliveryContainer>
            <div>
              <h2>Datos para Entrega</h2>
              <DeliverText>
                Necesitamos esta información para coordinar la entrega en la tienda
              </DeliverText>
            </div>
            <NameClientContainer>
              <NameClient required placeholder="Nombre " type="text" />
              <NameClient required placeholder="Apellidos" type="text" />
            </NameClientContainer>
            <DataDelivery placeholder="Email" type="email" />
            <DataDelivery required placeholder="Teléfono" type="number" />
            <DataDelivery placeholder="Dirección" type="text" />
            <DataDelivery required placeholder="Descripción Producto" type="text" />
            <SubmitContainer>
              <LocationContainer name="miInput">
                <option value="opcion1">San josé</option>
                <option value="opcion2">Cartago</option>
                <option value="opcion3">Heredía</option>
                <option value="opcion4">Alajuela</option>
                <option value="opcion5">Limón</option>
                <option value="opcion6">Guanacaste</option>
                <option value="opcion4">Puntarenas</option>
              </LocationContainer>
              <SubmitButton type="submit" value="Enviar" />
            </SubmitContainer>
          </DataDeliveryContainer>
        )}
        {selectedMethod === 'enviar' && (
          <LocationDeliveryContainer>
            <h2>Entrega a Domicilio</h2>
            <DeliverText>Envio se coordina después de la compra.</DeliverText>
            <SendMessageButton>
              <BiMailSend style={{ fontSize: '23px' }} />
              Coordinar
            </SendMessageButton>
          </LocationDeliveryContainer>
        )}
      </PaymentContainer>

      <ProductTotalContainer>
        <h1>Carrito de Compras</h1>
        <ProductToBuyContainer>
          <ProductToBuy>
            <ImageProduct src={scooterred.src} width={100} height={90} alt="" />
            <CountProduct>1</CountProduct>
            <h3>Ninebot Kickscooter F30 by Segway</h3>
            <h3>$450.99</h3>
          </ProductToBuy>

          <ProductToBuy>
            <ImageProduct src={scooterred.src} width={100} height={90} alt="" />
            <CountProduct>1</CountProduct>
            <h3>Ninebot Kickscooter F30 by Segway</h3>
            <h3>$450.99</h3>
          </ProductToBuy>
        </ProductToBuyContainer>
        <h3>Nota de pedido:</h3>

        <CommentContainer>
          <CommentText>Comentario acerca de el pedido se encuentra vacío</CommentText>
          <ChangeButton>
            <Link href="/cart">Cambiar</Link>
          </ChangeButton>
        </CommentContainer>

        <TotalContainer>
          <CardTotalContainer>
            <h3>Metodo de Envio</h3>
            <h3>Retirar en la tienda</h3>
          </CardTotalContainer>
          <CardTotalContainer>
            <h3>Impuestos</h3>
            <h3>$123,78</h3>
          </CardTotalContainer>
          <CardTotalContainer>
            <h2>Total</h2>
            <h2>$3,049.97</h2>
          </CardTotalContainer>
        </TotalContainer>
      </ProductTotalContainer>
    </CheckoutPageContainer>
  )
}
