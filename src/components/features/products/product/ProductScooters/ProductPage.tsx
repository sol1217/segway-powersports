'use client'

import React, { useState } from 'react'

import sx from '@assets/jpeg/sx.jpeg'
import visualizarVillain from '@assets/jpeg/visualize.jpeg'
import whatsapp from '@assets/png/icons-whatsapp.png'
import lx from '@assets/png/lx.png'
import fuglemanred from '@assets/images/SEGWAY-VEHICULOS/FUGLEMAN-UT10 X/white-fugleman.png'
import villaingreen from '@assets/images/SEGWAY-VEHICULOS/VILLAIN-SX10/green-villain.png'

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
} from './ProductPage.elements'
import { ProductPageProps } from './ProductPage.types'

export const ProductPageScooter = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  return (
    <ProductPageContainer>
      <div>
        <LogoImage src={productInfo?.logo} />
        <video width="100%" src={productInfo?.video} controls={false} autoPlay muted loop />
      </div>

      <ViewProductContainer>
        <NameModel>
          <img src={productInfo?.model} />
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
        <TitleFeaturesContainer>Caracteristicas de Diseño</TitleFeaturesContainer>
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
