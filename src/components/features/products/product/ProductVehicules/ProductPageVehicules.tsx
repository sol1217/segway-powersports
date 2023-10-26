'use client'

import React, { useState } from 'react'

import visualizarVillain from '@assets/jpeg/visualize.jpeg'
import fuglemanred from '@assets/jpg/fugleman-data.jpg'
import sx from '@assets/jpg/sx.jpg'
import villaingreen from '@assets/jpg/villain-data.jpg'
import whatsapp from '@assets/png/icons-whatsapp.png'
import lx from '@assets/png/lx.png'
import { colorImages } from '@features/products/vehicule/types'

import {
  DataImage,
  DataSheet,
  LogoImage,
  ColorButton,
  ColorImages,
  TextDowload,
  ColorSection,
  ProductImage,
  DataSheetLink,
  ImageFeatures,
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
} from './ProductPageVehicules.elements'
import { ProductPageProps } from './ProductPageVehicules.types'

export const ProductPageVehicules = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(
    productInfo?.imagesInfo && Array.isArray(productInfo.imagesInfo)
      ? productInfo.imagesInfo[0]?.url
      : null,
  )

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

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
            <h2>Características</h2>
            {productInfo?.features?.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </FeaturesProduct>

          <ColorsContainer>
            <h4>Colores Disponibles</h4>
            <ColorSection>
              {productInfo?.imagesInfo?.map((s, i) => (
                <ColorButton key={i} onClick={() => handleImageClick(s.url)}>
                  <ColorImages src={colorImages[s.color]} />
                </ColorButton>
              ))}
            </ColorSection>
            <ContactContainer>
              <img src={whatsapp.src} width={20} />
              <a href="https://wa.link/j1y335">Cotizar</a>
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
        <TitleFeaturesContainer>Características Diseño</TitleFeaturesContainer>
        <DesignFeatures>
          {productInfo?.featuresImage?.map(({ src, titleFeatures, featuresDescription }, i) => (
            <DesignFeaturesItems key={i}>
              <ImageFeatures src={src} width="100%" />
              <TitleFeatures>{titleFeatures}</TitleFeatures>
              <TextInformation>{featuresDescription}</TextInformation>
            </DesignFeaturesItems>
          ))}
        </DesignFeatures>
      </DesignFeaturesContainer>

      <DataSheetContainer>
        <h2>Fichas Técnicas</h2>
        <DataSheet>
          <DataSheetLink href="/ technical-sheets/snarler-at6-sx.pdf" download>
            <DataImage src={sx.src} width={250} />
            <p>SNARLER AT6 SX</p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
          <DataSheetLink href="/ technical-sheets/fugleman-u10x.pdf" download>
            <DataImage src={fuglemanred.src} width={220} />
            <p>Fugleman UT10 </p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
          <DataSheetLink href="/ technical-sheets/snaler-at6-lx.pdf" download>
            <DataImage src={lx.src} width={230} />
            <p>SNARLER AT6 LX</p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
          <DataSheetLink href="/ technical-sheets/villain.pdf" download>
            <DataImage src={villaingreen.src} width={250} />
            <p>Villain SX10 X</p>
            <TextDowload>Descargar</TextDowload>
          </DataSheetLink>
        </DataSheet>
      </DataSheetContainer>

      <ImagesSectionContainer>
        <h2>Galería {productInfo?.name}</h2>
        <ImagesGalleryContainer>
          {productInfo?.galleryImages?.map(({ src, width, height }, i) => (
            <ImagesGallery key={i} src={src} width={width} height={height} />
          ))}
        </ImagesGalleryContainer>
      </ImagesSectionContainer>
    </ProductPageContainer>
  )
}
