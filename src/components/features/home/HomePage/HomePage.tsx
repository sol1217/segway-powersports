'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import vehiculeadd from '@assets/jpeg/addvehicule.jpeg'
import codes from '@assets/jpeg/codes.jpeg'
import smartmoving from '@assets/jpeg/novingsmart.jpeg'
import phonesmart from '@assets/jpeg/phone smart.jpeg'
import riding from '@assets/jpeg/riding.jpeg'
import snarler from '@assets/jpeg/snarler-04.jpg'
import snarleratv from '@assets/jpeg/snarler.jpeg'
import villainatv from '@assets/jpeg/villain-08.jpg'
import villain from '@assets/jpeg/villain.jpeg'
import fearlogo from '@assets/png/fearnoplace-blanco-1024x158.png'
import screenfugleman from '@assets/png/screenflugleman.png'
import screenvillain from '@assets/png/screenvillain.png'
import snarl from '@assets/png/snarl.png'
import { Carousel } from '@features/home/Carousel/Carousel'
import { PhoneCarousel } from '@features/home/PhoneCarousel/PhoneCarousel'
import scooterred from '@assets/images/SEGWAY VEHICULOS/escooter e110s/segway-e110s-2.jpg'
import fuglemanred from '@assets/images/SEGWAY VEHICULOS/FUGLEMAN UT10 X/blanca.png'
import at6 from '@assets/images/SEGWAY VEHICULOS/SNARLER AT6 LE/BLANCO.png'
import villaingreen from '@assets/images/SEGWAY VEHICULOS/VILLAIN SX10/verde.png'

import {
  SnarlImg,
  Namevideos,
  TitleVideos,
  ImagesScreen,
  NameVehicule,
  ProductButton,
  VideoContainer,
  ImagesVehicules,
  SegwayCostaRica,
  VideosContainer,
  CarItemContainer,
  HomePageContainer,
  SeeProductsButton,
  TitleSomeProducts,
  ScreenItemContainer,
  VideoItemsContainer,
  ImagesItemsVehicules,
  ScreenItemTwoContainer,
  ScreenVehicleContainer,
  ImagesVehiculesContainer,
} from './HomePage.elements'

export const HomePage = () => {
  const carouselImages = [snarleratv, villainatv, villain, snarler].map((image) => image.src)
  const PhoneImages = [codes, riding, smartmoving, vehiculeadd, phonesmart].map(
    (imagePhone) => imagePhone.src,
  )
  return (
    <HomePageContainer>
      <VideoContainer>
        <SnarlImg src={fearlogo.src} />
        <SegwayCostaRica>SEGWAY POWERSPORTS COSTA RICA</SegwayCostaRica>
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

      <ImagesVehiculesContainer>
        <TitleSomeProducts>Algunos de nuestros productos</TitleSomeProducts>
        <ImagesVehicules>
          <div>
            <ImagesItemsVehicules src={fuglemanred.src} width={320} height={240} />
            <NameVehicule>Snarler at6</NameVehicule>
          </div>
          <div>
            <ImagesItemsVehicules style={{ display: 'block' }} src={villaingreen.src} width={320} />
            <NameVehicule style={{ display: 'block' }}>Villain sx10</NameVehicule>
          </div>
          <div>
            <ImagesItemsVehicules style={{ display: 'block' }} src={fuglemanred.src} width={320} />
            <NameVehicule style={{ display: 'block' }}>Fugleman ut10</NameVehicule>
          </div>
          <div>
            <ImagesItemsVehicules src={scooterred.src} width={350} height={240} />
            <NameVehicule>Scooter e110s</NameVehicule>
          </div>
        </ImagesVehicules>
        <SeeProductsButton>Ver en la seccion de productos</SeeProductsButton>
      </ImagesVehiculesContainer>

      <Carousel images={carouselImages} />

      <PhoneCarousel imagesPhone={PhoneImages} />

      <TitleVideos>Videos Segway Powersports</TitleVideos>
      <VideosContainer>
        <VideoItemsContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ckw9P2bhi0w?si=GcrmI22K4LkjtZOm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <Namevideos>Villain sx10</Namevideos>
        </VideoItemsContainer>
        <VideoItemsContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TlcGvC-ymlo?si=W9SEX2CrRk7ukPM_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <Namevideos>Proceso de Diseño</Namevideos>
        </VideoItemsContainer>
        <VideoItemsContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cR2Y-y8uhTc?si=R7hggCCZMHRYN9IW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <Namevideos>Snarler atv</Namevideos>
        </VideoItemsContainer>
      </VideosContainer>
    </HomePageContainer>
  )
}
