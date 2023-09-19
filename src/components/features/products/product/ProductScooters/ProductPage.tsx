'use client'

import React, { useState } from 'react'

import sx from '@assets/jpeg/sx.jpeg'
import visualizarVillain from '@assets/jpeg/visualize.jpeg'
import whatsapp from '@assets/png/icons-whatsapp.png'
import lx from '@assets/png/lx.png'
import fuglemanred from '@assets/images/SEGWAY-VEHICULOS/FUGLEMAN-UT10 X/white-fugleman.png'
import villaingreen from '@assets/images/SEGWAY-VEHICULOS/VILLAIN-SX10/green-villain.png'

import {
  DataSheet,
  LogoImage,
  NameModel,
  TextDowload,
  ProductImage,
  DataSheetLink,
  ImagesGallery,
  TitleFeatures,
  ContactSection,
  DesignFeatures,
  DisplayProduct,
  FeaturesProduct,
  TextInformation,
  ContactContainer,
  DataSheetContainer,
  DescriptionSection,
  InformationProduct,
  DesignFeaturesItems,
  ProductPageContainer,
  ViewProductContainer,
  ImagesGalleryContainer,
  ImagesSectionContainer,
  TitleFeaturesContainer,
  DesignFeaturesContainer,
  DisplayProductContainer,
  FeaturesProductContainer,
  InformationProductContainer,
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
          <img src={productInfo?.picture} />
          <FeaturesProduct>
            <DescriptionSection>{productInfo?.completeDesciprtion}</DescriptionSection>
            <div>
              <h2>Caracteristicas</h2>
              {productInfo?.features?.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
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
              <img src={src} width="100%" />
              <TitleFeatures>{titleFeatures}</TitleFeatures>
              <TextInformation>{featuresDescription}</TextInformation>
            </DesignFeaturesItems>
          ))}
        </DesignFeatures>
      </DesignFeaturesContainer>

      <DataSheetContainer>
        <h2>Fichas Tecnicas</h2>
        <DataSheet>
          <DataSheetLink href="/Snarler%20S.pdf" download>
            <img src={sx.src} width={280} />
            <p>SNARLER SX</p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
          <DataSheetLink href="/fugleman.pdf" download>
            <img src={fuglemanred.src} width={230} />
            <p>Fugleman UT10</p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
          <DataSheetLink href="/Snarler%20LX.pdf" download>
            <img src={lx.src} width={210} />
            <p>SNARLER LX</p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
          <DataSheetLink href="/Villain.pdf" download>
            <img src={villaingreen.src} width={230} />
            <p>Villain SX10</p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
        </DataSheet>
      </DataSheetContainer>

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
