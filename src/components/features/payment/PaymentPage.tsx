'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWaze } from 'react-icons/fa'

import pay from '@assets/png/candado.png'
import whatsappPayment from '@assets/png/icons-whatsapp.png'
import bill from '@assets/png/pago_efectivo.png'
import sinpeMovil from '@assets/png/sinpe-movil.png'
import transfers from '@assets/png/transfers.png'
import whatsapp from '@assets/png/whatsapp-black.png'
import {
  CashText,
  CashButton,
  CommentText,
  SendPayment,
  ChangeButton,
  ChooseMethod,
  DataTransfer,
  LocationWaze,
  TransferText,
  CashContainer,
  PaymentImages,
  WhatsappPayment,
  CommentContainer,
  PaymentContainer,
  SecurePaymentWrap,
  TransferContainer,
  PaymentInformation,
  InformationTranfers,
  PaymentCardContainer,
  PaymentPageContainer,
  SendPaymentContainer,
  NoteDeliveryContainer,
  ProofPaymentContainer,
  TransferDataContainer,
  DetailsPaymentContainer,
} from '@features/payment/PaymentPage.elements'

export const PaymentPage = () => {
  const [isCashSelected, setIsCashSelected] = useState(false)

  const uploadInputRef = useRef<HTMLInputElement | null>(null)

  return (
    <PaymentPageContainer>
      <SecurePaymentWrap>
        <Image src={pay.src} width={35} height={35} alt="" />
        <h3>Pago seguro</h3>
      </SecurePaymentWrap>

      <PaymentContainer>
        <DetailsPaymentContainer style={{ opacity: isCashSelected ? 0.5 : 1 }}>
          <h1>Detalles del pago</h1>

          <PaymentInformation>
            <ChooseMethod>
              <h3>Metodos de pago:</h3>
              <PaymentCardContainer>
                <PaymentImages src={bill.src} width={100} height={50} alt="" />
                <PaymentImages src={transfers.src} width={100} height={50} alt="" />
                <PaymentImages src={sinpeMovil.src} width={100} height={50} alt="" />
              </PaymentCardContainer>
            </ChooseMethod>
            <InformationTranfers>
              En el lado izquierdo encontrarás la información para realizar el pago.
            </InformationTranfers>
          </PaymentInformation>

          <SendPaymentContainer>
            <h1>Envio de pago</h1>
            <ProofPaymentContainer>
              <h3>Comprobante de pago:</h3>
              <SendPayment href="https://wa.link/5f4szp">
                <WhatsappPayment src={whatsappPayment.src} />
                Enviar Comprobante
              </SendPayment>
            </ProofPaymentContainer>
            <InformationTranfers>
              Debes de llenar obligatoriamente todos los campos (mensaje de comprobante) para hacer
              la verificacion del pago y la compra.
            </InformationTranfers>
          </SendPaymentContainer>

          <NoteDeliveryContainer>
            <h3>Nota:</h3>
            <p>
              -Al transferir el pago, recuerde guardar el recibo y enviarlo al numero de whatsapp de
              la empresa para que uno de los asesores pueda verificarlo y responderle lo antes
              posible.
            </p>
          </NoteDeliveryContainer>

          <CommentContainer>
            <CommentText>Si deseas coordinar el método de entrega a domicilio</CommentText>
            <ChangeButton>
              <Link href="https://wa.link/xjt48l">Coordinar</Link>
            </ChangeButton>
          </CommentContainer>
        </DetailsPaymentContainer>

        <TransferContainer>
          <TransferText>Tranferencia Bancaria</TransferText>
          <TransferDataContainer style={{ opacity: !isCashSelected ? 1 : 0.5 }}>
            <DataTransfer>
              <h3>Nombre:</h3>
              <p>Ninebot Costa Rica S.A </p>
            </DataTransfer>
            <DataTransfer>
              <h3>Cédula:</h3>
              <p>3101818803</p>
            </DataTransfer>
            <DataTransfer>
              <h3>Numero Cuenta IBAN (Dólares):</h3>
              <p>CR77010200009475874816</p>
            </DataTransfer>
          </TransferDataContainer>

          <TransferText>Sinpe Móvil</TransferText>
          <TransferDataContainer style={{ opacity: !isCashSelected ? 1 : 0.5 }}>
            <DataTransfer>
              <h3>Nombre:</h3>
              <p>Ignacio Jimenez Jop:</p>
            </DataTransfer>
            <DataTransfer>
              <h3>Numero Teléfono:</h3>
              <p>8846-6680</p>
            </DataTransfer>
          </TransferDataContainer>

          <CashText>
            <input type="checkbox" onChange={() => setIsCashSelected(!isCashSelected)} />
            <h2>Efectivo</h2>
          </CashText>
          <h3>Habilitar opción de pago en efectivo</h3>
          <CashContainer>
            <DataTransfer style={{ opacity: isCashSelected ? 1 : 0.5 }}>
              <h3>Comunicarte</h3>
              <CashButton style={{ pointerEvents: isCashSelected ? 'auto' : 'none' }}>
                <a href="https://wa.link/at84vp">
                  <img src={whatsapp.src} width={25} height={25} alt="" />
                </a>
              </CashButton>
            </DataTransfer>
            <LocationWaze
              style={{ opacity: isCashSelected ? 1 : 0.5 }}
              href="https://www.waze.com/es-419/live-map/directions?to=ll.9.961574%2C-84.197309">
              <FaWaze />
              Ubicación del Waze
            </LocationWaze>
          </CashContainer>
        </TransferContainer>
      </PaymentContainer>
    </PaymentPageContainer>
  )
}
