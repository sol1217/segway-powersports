'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import vehiculeadd from '@assets/jpeg/addvehicule.jpeg'
import villain from '@assets/jpeg/atv-gale-4.jpg'
import codes from '@assets/jpeg/codes.jpeg'
import fuglew from '@assets/jpeg/fugleman-w.jpeg'
import smartmoving from '@assets/jpeg/novingsmart.jpeg'
import phonesmart from '@assets/jpeg/phone smart.jpeg'
import snarleratv from '@assets/jpeg/product.jpeg'
import riding from '@assets/jpeg/riding.jpeg'
import villainatv from '@assets/jpeg/vl.jpeg'
import fearlogo from '@assets/png/fearnoplace-blanco-1024x158.png'
import { Carousel } from '@features/home/Carousel/Carousel'
import { PhoneCarousel } from '@features/home/PhoneCarousel/PhoneCarousel'
import scooterred from '@assets/images/SEGWAY VEHICULOS/escooter e110s/segway-e110s-2.jpg'
import fuglemanred from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/blanca.png'
import snarler from '@assets/images/SEGWAY VEHICULOS/SNARLER AT6 LE/BLANCO.png'
import villaingreen from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'

import {
  SloganImg,
  Namevideos,
  SLoganText,
  TitleVideos,
  NameVehicule,
  VideoSection,
  ImagesSection,
  VideoContainer,
  ImagesVehicules,
  VideosContainer,
  HomePageContainer,
  SeeProductsButton,
  TitleSomeProducts,
  VehiculesContainer,
  CarouselImagesContainer,
  ImagesVehiculesContainer,
} from './HomePage.elements'

export const HomePage = () => {
  const carouselImages = [snarleratv, villain, fuglew, villainatv].map((image) => image.src)
  const PhoneImages = [codes, riding, smartmoving, vehiculeadd, phonesmart].map(
    (imagePhone) => imagePhone.src,
  )
  return (
    <HomePageContainer>
      <VideoContainer>
        <SloganImg src={fearlogo.src} />
        <SLoganText>SEGWAY POWERSPORTS COSTA RICA</SLoganText>
        <video
          style={{ opacity: '.6 ' }}
          width="100%"
          src="/videos/VILLAIN%20SX10%20-%20A%20new%20feeling%20of%20power%20and%20control%20(1).mp4"
          controls={false}
          autoPlay
          muted
          loop
        />
      </VideoContainer>

      <VehiculesContainer>
        <TitleSomeProducts>Algunos de nuestros productos</TitleSomeProducts>
        <ImagesVehiculesContainer>
          <ImagesSection>
            <ImagesVehicules src={snarler.src} height={240} />
            <NameVehicule>Snarler at6</NameVehicule>
          </ImagesSection>
          <ImagesSection>
            <ImagesVehicules style={{ display: 'block' }} src={villaingreen.src} />
            <NameVehicule style={{ display: 'block' }}>Villain sx10</NameVehicule>
          </ImagesSection>
          <ImagesSection>
            <ImagesVehicules style={{ display: 'block' }} src={fuglemanred.src} />
            <NameVehicule style={{ display: 'block' }}>Fugleman ut10</NameVehicule>
          </ImagesSection>
          <ImagesSection>
            <ImagesVehicules src={scooterred.src} height={240} />
            <NameVehicule>Scooter e110s</NameVehicule>
          </ImagesSection>
        </ImagesVehiculesContainer>
        <SeeProductsButton>
          <Link href="/products">Ver en la seccíon de productos</Link>
        </SeeProductsButton>
      </VehiculesContainer>

      <CarouselImagesContainer>
        <Carousel images={carouselImages} />
      </CarouselImagesContainer>

      <PhoneCarousel imagesPhone={PhoneImages} />

      <TitleVideos>Videos Segway Powersports</TitleVideos>

      <VideosContainer>
        <VideoSection>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ckw9P2bhi0w?si=GcrmI22K4LkjtZOm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <Namevideos>Villain sx10</Namevideos>
        </VideoSection>
        <VideoSection>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TlcGvC-ymlo?si=W9SEX2CrRk7ukPM_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <Namevideos>Proceso de Diseño</Namevideos>
        </VideoSection>
        <VideoSection>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cR2Y-y8uhTc?si=R7hggCCZMHRYN9IW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <Namevideos>Snarler atv</Namevideos>
        </VideoSection>
      </VideosContainer>
    </HomePageContainer>
  )
}
