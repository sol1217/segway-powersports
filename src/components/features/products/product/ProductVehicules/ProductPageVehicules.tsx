'use client'

import React, { useState } from 'react'

import sx from '@assets/jpeg/sx.jpeg'
import visualizarVillain from '@assets/jpeg/visualize.jpeg'
import whatsapp from '@assets/png/icons-whatsapp.png'
import lx from '@assets/png/lx.png'
import { colorImages } from '@features/products/vehicule/types'
import fuglemanred from '@assets/images/SEGWAY-VEHICULOS/FUGLEMAN-UT10 X/white-fugleman.jpg'
import villaingreen from '@assets/images/SEGWAY-VEHICULOS/VILLAIN-SX10/green-villain.jpg'

import {
  DataSheet,
  LogoImage,
  ColorImages,
  TextDowload,
  ProductImage,
  DataSheetLink,
  ImagesGallery,
  TitleFeatures,
  DesignFeatures,
  DisplayProduct,
  ColorsContainer,
  FeaturesProduct,
  TextInformation,
  ContactContainer,
  DataSheetContainer,
  InformationProduct,
  ColorButtonsSection,
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
} from './ProductPage.elementsVehicules.elements'
import { ProductPageProps } from './ProductPageVehicules.types'

export const ProductPageVehicules = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  const selectedImage =
    productInfo?.imagesInfo && Array.isArray(productInfo.imagesInfo)
      ? productInfo.imagesInfo[0]?.url
      : null

  return (
    <ProductPageContainer>
      <div>
        <LogoImage src={productInfo?.logo} />
        <video width="100%" src={productInfo?.video} controls={false} autoPlay muted loop />
      </div>

      <ViewProductContainer>
        <InformationProductContainer>
          <InformationProduct>
            <img src={productInfo?.model} />
            <p>{productInfo?.completeDesciprtion}</p>
          </InformationProduct>
        </InformationProductContainer>

        {selectedImage && <ProductImage src={selectedImage} />}

        <FeaturesProductContainer>
          <FeaturesProduct>
            <h2>Caracteristicas</h2>
            {productInfo?.features?.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </FeaturesProduct>

          <ColorsContainer>
            <h4>Colores Disponibles</h4>
            <ColorButtonsSection>
              {productInfo?.imagesInfo?.map((s, i) => (
                <ColorImages src={colorImages[s.color]} key={i} />
              ))}
            </ColorButtonsSection>
            <ContactContainer>
              <img src={whatsapp.src} width={20} />
              <a href="https://wa.link/u2iq52">Cotizar</a>
            </ContactContainer>
          </ColorsContainer>
          <DisplayProductContainer>
            <DisplayProduct>
              <a href={productInfo?.panorama}>
                <img src={visualizarVillain.src} width="100%" />
              </a>
            </DisplayProduct>
          </DisplayProductContainer>
        </FeaturesProductContainer>
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
