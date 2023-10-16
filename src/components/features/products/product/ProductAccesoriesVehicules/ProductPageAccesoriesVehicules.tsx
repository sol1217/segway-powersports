'use client'

import React, { useState } from 'react'

import madeLogo from '@assets/png/about-logo.png'
import icono from '@assets/png/accesories-vehicules-logo.png'
import whatsapp from '@assets/png/icons-whatsapp.png'
import useCart from '@hooks/useCart/useCart'

import {
  MadeLogo,
  NameModel,
  NameProduct,
  ImageProduct,
  ImagesGallery,
  TitleFeatures,
  ContactSection,
  DesignFeatures,
  ImagesFeatures,
  VideoContainer,
  FeaturesProduct,
  TextInformation,
  CatalogueSection,
  ContactContainer,
  CatalogueContainer,
  DescriptionSection,
  DesignFeaturesItems,
  ProductPageContainer,
  ViewProductContainer,
  FeaturesTextContainer,
  ImagesGalleryContainer,
  ImagesSectionContainer,
  TitleFeaturesContainer,
  DesignFeaturesContainer,
  FeaturesProductContainer,
} from './ProductPageAccesoriesVehicules.elements'
import { ProductPageProps } from './ProductPageAccesoriesVehicules.types'

export const ProductPageAccesoriesVehicules = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const { cart, addToCart } = useCart()

  const handleAddToCart = () => {
    if (!productInfo) return
    const { picture, name, price, colorsAvailable } = productInfo

    const productData = { picture, name, price, colorsAvailable, quantity: 1 }

    addToCart(productData)
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
          <ContactContainer onClick={handleAddToCart}>
            <img src={whatsapp.src} width={30} />
            Añadir al Carrito
          </ContactContainer>
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
