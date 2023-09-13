'use client'

import React, { useState } from 'react'

import camo from '@assets/images/camuflado.webp'
import sx from '@assets/jpeg/AT6-Sx-azul-galeria-900x600-1.jpg'
import azul from '@assets/jpeg/azul.jpeg'
import iluminacion from '@assets/jpeg/diseñosnarler.jpeg'
import robusto from '@assets/jpeg/iluminacion sn.jpeg'
import segwayblue from '@assets/jpeg/segwayblue.jpeg'
import segwaygreen from '@assets/jpeg/segwaygreen.jpeg'
import segwaynew from '@assets/jpeg/segwaynew.jpeg'
import segwaytwo from '@assets/jpeg/segwaytwo.jpeg'
import segwaycuadra from '@assets/jpeg/serwaycuadra.jpeg'
import diseño from '@assets/jpeg/sn robusto.jpeg'
import segwaystreet from '@assets/jpeg/streetsegway.jpeg'
import visualizarVillain from '@assets/jpeg/visualizar.jpeg'
import whatsapp from '@assets/png/icons8-whatsapp-30.png'
import lx from '@assets/png/lx.png'
import rojo from '@assets/png/rojo.png'
import nameSnarler from '@assets/png/snarler-at6-le-logo-cinza.png'
import logoSnarler from '@assets/png/Snarler-Logo.png'
import verde from '@assets/png/verde.jpeg'
import { colorImages } from '@features/products/vehicule/types'
import fuglemanred from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/blanca.png'
import snarler from '@assets/images/SEGWAY VEHICULOS/SNARLER AT6 LE/BLANCO.png'
import villaingreen from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'

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
} from './ProductPage.elements'
import { ProductPageProps } from './ProductPage.types'

export const ProductPage = ({ productName, productInfo }: ProductPageProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [selectedImage, setSelectedImage] = useState(productInfo?.images[0].url)

  {
    /*const { description, name, images, video, completeDesciprtion, galleryImages, featuresImage, panorama, features, alias } = productInfo*/
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

        <ProductImage src={selectedImage} />

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
              {productInfo?.images.map((s, i) => (
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
        <h2>Galeria Snarler LE</h2>
        <ImagesGalleryContainer>
          <ImagesGallery src={segwayblue.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaynew.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaygreen.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaystreet.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaytwo.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaycuadra.src} alt="" width={300} height={200} />
        </ImagesGalleryContainer>
      </ImagesSectionContainer>
    </ProductPageContainer>
  )
}
