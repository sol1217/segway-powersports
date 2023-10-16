'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsUpload } from 'react-icons/bs'
import { FaWaze } from 'react-icons/fa'
import { FaMoneyBillTransfer } from 'react-icons/fa6'

import { Box } from '@core'
import pay from '@assets/png/candado.png'
import whatsapp from '@assets/png/whatsapp-black.png'
import {
  CashText,
  CashButton,
  DataTransfer,
  DetailsInput,
  LocationWaze,
  VoucherImage,
  VoucherLabel,
  CashContainer,
  DetailsContainer,
  PaymentContainer,
  VoucherContainer,
  SecurePaymentWrap,
  SendDetailsButton,
  TransferContainer,
  PaymentPageContainer,
  NoteDeliveryContainer,
  TransferDataContainer,
  DetailsPaymentContainer,
} from '@features/ payment/PaymentPage.elements'

export const PaymentPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isCashSelected, setIsCashSelected] = useState(false)

  const handleImageChange = (e: any) => {
    const file = e.target.files[0] && e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target) {
          setSelectedImage(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadInputRef = useRef<HTMLInputElement | null>(null)

  const handleUploadClick = () => {
    if (uploadInputRef.current) {
      uploadInputRef.current.click()
    }
  }

  const handleSendDetails = () => {
    if (!isCashSelected) {
    }
  }

  return (
    <PaymentPageContainer>
      <SecurePaymentWrap>
        <Image src={pay.src} width={35} height={35} alt="" />
        <h3>Pago seguro</h3>
      </SecurePaymentWrap>

      <PaymentContainer>
        <DetailsPaymentContainer style={{ opacity: isCashSelected ? 0.5 : 1 }}>
          <h1>Detalles del pago</h1>
          <p>
            Al transferir el pago, recuerde guardar el recibo y subirlo al detalle de pago para que
            uno de los asesores pueda verificarlo.
          </p>
          <DetailsContainer>
            <DetailsInput
              required
              type="text"
              placeholder="Nombre Completo"
              readOnly={isCashSelected}
            />
            <DetailsInput
              required
              type="text"
              placeholder="Metodo de pago"
              readOnly={isCashSelected}
            />
            <DetailsInput
              required
              type="number"
              placeholder="Numero de Teléfono"
              readOnly={isCashSelected}
            />
            <DetailsInput
              required
              type="email"
              placeholder="Correo Electrónico"
              readOnly={isCashSelected}
            />
            <VoucherContainer style={{ display: 'flex', alignItems: 'center' }}>
              <VoucherImage
                required
                type="file"
                accept="image/*"
                multiple
                ref={uploadInputRef}
                onChange={handleImageChange}
                style={{ display: 'none' }}
                disabled={isCashSelected}
              />
              <VoucherLabel style={{ cursor: 'pointer' }} onClick={handleUploadClick}>
                <BsUpload style={{ fontSize: '2rem', marginRight: '8px' }} />
                Subir Comprobante de pago
              </VoucherLabel>
            </VoucherContainer>
            {selectedImage && (
              <Image src={selectedImage} alt="Imagen seleccionada" width={400} height={600} />
            )}
            <SendDetailsButton
              onClick={() => !isCashSelected && handleSendDetails}
              disabled={isCashSelected}>
              Enviar Detalle de pago
            </SendDetailsButton>
          </DetailsContainer>
          <NoteDeliveryContainer>
            <h3>Nota:</h3>
            <p>
              Recuerda si quieres que el envío se realice a tu domicilio, en la parte método de
              envío del carrito de compras. Marca envío a domicilio en el botón coordinar y un
              asesor se comunicará contigo a la brevedad.
            </p>
          </NoteDeliveryContainer>
        </DetailsPaymentContainer>

        <TransferContainer>
          <CashText>
            <input type="checkbox" onChange={() => setIsCashSelected(!isCashSelected)} />
            <h2>Efectivo</h2>
          </CashText>
          <p>Habilitar opción de pago en efectivo</p>
          <CashContainer>
            <DataTransfer style={{ opacity: isCashSelected ? 1 : 0.5 }}>
              <h3>Comunicarte</h3>
              <CashButton style={{ pointerEvents: isCashSelected ? 'auto' : 'none' }}>
                <a href="https://wa.link/u9ezfl">
                  <Image src={whatsapp.src} width={25} height={25} alt="" />
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

          <h2>Tranferencia Bancaria</h2>
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

          <h2>Sinpe Móvil</h2>
          <TransferDataContainer style={{ opacity: !isCashSelected ? 1 : 0.5 }}>
            <DataTransfer>
              <h3>Nombre:</h3>
              <p>Ignacio Jimenez Jop:</p>
            </DataTransfer>
            <DataTransfer>
              <h3>Numero Teléfono</h3>
              <p>8846-6680</p>
            </DataTransfer>
          </TransferDataContainer>
        </TransferContainer>
      </PaymentContainer>
    </PaymentPageContainer>
  )
}
