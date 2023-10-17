'use client'

import React, { useState } from 'react'
import { FaCheck, FaCheckCircle } from 'react-icons/fa'
import { PiShoppingCartBold } from 'react-icons/pi'

import madeLogo from '@assets/png/about-logo.png'
import icono from '@assets/png/accesories-vehicules-logo.png'
import whatsapp from '@assets/png/icons-whatsapp.png'
import useCart from '@hooks/useCart/useCart'
import { ProductAdded } from '@features/products/product/ProductScooters/ProductPage.elements'

import {
  MadeLogo,
  NameModel,
  ImageProduct,
  ImagesGallery,
  ContactSection,
  VideoContainer,
  FeaturesProduct,
  CatalogueSection,
  ContactContainer,
  CatalogueContainer,
  DescriptionSection,
  ProductPageContainer,
  ViewProductContainer,
  FeaturesTextContainer,
  ImagesGalleryContainer,
  ImagesSectionContainer,
  FeaturesProductContainer,
} from './ProductPageAccesoriesVehicules.elements'
import { ProductPageProps } from './ProductPageAccesoriesVehicules.types'

export const ProductPageAccesoriesVehicules = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [isProductAdded, setProductAdded] = useState(false)
  const { cart, addToCart } = useCart()

  const handleAddToCart = () => {
    if (!productInfo) return
    const { picture, name, price, colorsAvailable } = productInfo

    const productData = { picture, name, price, colorsAvailable, quantity: 1 }

    addToCart(productData)
    setProductAdded(true)
  }

  return (
    <ProductPageContainer>
      <VideoContainer>
        <MadeLogo src={icono.src} />
        <video
          style={{ opacity: '.6' }}
          width="100%"
          src={productInfo?.video}
          controls={false}
          autoPlay
          muted
          loop
        />
      </VideoContainer>

      <ViewProductContainer>
        <NameModel>
          <img src={productInfo?.logo} />
        </NameModel>

        <FeaturesProductContainer>
          <ImageProduct src={productInfo?.picture} />
          <FeaturesProduct>
            <DescriptionSection>{productInfo?.completeDesciprtion}</DescriptionSection>
            <h2>Características</h2>
            <FeaturesTextContainer>
              {productInfo?.features?.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </FeaturesTextContainer>
          </FeaturesProduct>
        </FeaturesProductContainer>

        <ContactSection>
          {isProductAdded ? (
            <ProductAdded>
              <FaCheckCircle style={{ color: 'green' }} />
              <p>Añadido correctamente</p>
            </ProductAdded>
          ) : (
            <ContactContainer onClick={handleAddToCart}>
              <PiShoppingCartBold style={{ fontSize: '24px' }} />
              Añadir al Carrito
            </ContactContainer>
          )}
        </ContactSection>
      </ViewProductContainer>

      <ImagesSectionContainer>
        <h2>Galería {productInfo?.name}</h2>
        <ImagesGalleryContainer>
          {productInfo?.galleryImages?.map(({ src, width, height }, i) => (
            <ImagesGallery key={i} src={src} width={width} height={height} />
          ))}
        </ImagesGalleryContainer>
      </ImagesSectionContainer>

      <CatalogueContainer>
        <CatalogueSection>
          <a href="/catalogo.pdf" download>
            Descargar Catálogo
          </a>
        </CatalogueSection>
      </CatalogueContainer>
    </ProductPageContainer>
  )
}
