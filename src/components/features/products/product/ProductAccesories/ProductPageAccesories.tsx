'use client'

import React, { useState } from 'react'

import whatsapp from '@assets/png/icons-whatsapp.png'

import { ProductPageProps } from './ProductPageAccesorie.types'
import {
  LogoImage,
  NameModel,
  ImageProduct,
  ImagesGallery,
  TitleFeatures,
  ContactSection,
  DesignFeatures,
  ImagesFeatures,
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
} from './ProductPageAccesories.elements'

export const ProductPageAccesories = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  return (
    <ProductPageContainer>
      <div>
        <LogoImage src={productInfo?.model} />
        <video width="100%" src={productInfo?.video} controls={false} autoPlay muted loop />
      </div>

      <ViewProductContainer>
        <NameModel>
          <img src={productInfo?.logo} />
        </NameModel>

        <FeaturesProductContainer>
          <ImageProduct src={productInfo?.picture} />
          <FeaturesProduct>
            <DescriptionSection>{productInfo?.completeDesciprtion}</DescriptionSection>
            <h2>Caracteristicas</h2>
            <FeaturesTextContainer>
              {productInfo?.features?.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </FeaturesTextContainer>
          </FeaturesProduct>
        </FeaturesProductContainer>

        <ContactSection>
          <ContactContainer>
            <img src={whatsapp.src} width={30} />
            <a href="https://wa.link/u2iq52">Cotizar Producto</a>
          </ContactContainer>
        </ContactSection>
      </ViewProductContainer>

      <DesignFeaturesContainer>
        <TitleFeaturesContainer>Caracteristicas Diseño</TitleFeaturesContainer>
        <DesignFeatures>
          {productInfo?.featuresImage?.map(({ src, titleFeatures, featuresDescription }, i) => (
            <DesignFeaturesItems key={i}>
              <ImagesFeatures src={src} width="100%" />
              <TitleFeatures>{titleFeatures}</TitleFeatures>
              <TextInformation>{featuresDescription}</TextInformation>
            </DesignFeaturesItems>
          ))}
        </DesignFeatures>
      </DesignFeaturesContainer>

      <CatalogueContainer>
        <CatalogueSection>
          <a href="/catalogo.pdf" download>
            Descargar Catálogo
          </a>
        </CatalogueSection>
      </CatalogueContainer>

      <ImagesSectionContainer>
        <h2>Galeria {productInfo?.name}</h2>
        <ImagesGalleryContainer>
          {productInfo?.galleryImages?.map(({ src, width, height }, i) => (
            <ImagesGallery key={i} src={src} width={width} height={height} />
          ))}
        </ImagesGalleryContainer>
      </ImagesSectionContainer>
    </ProductPageContainer>
  )
}
