'use client'

import React, { useState } from 'react'

import segwaymotor from '@assets/jpeg/segway-powersports-motoviedo-sl-23.jpg'
import villainimg from '@assets/jpeg/villain.jpeg'
import { ProductScooters } from '@features/products/scooters'
import { ProductAccesories } from '@features/products/accesories/ProductAccesories'
import { VehiculeProducts } from '@features/products/vehicule/VehiculeProducts'

import { NameBorder, TitleVehiculo, ProductsPageContainer } from './ProductsPage.elements'

export const ProductsPage = () => {
  return (
    <ProductsPageContainer>
      {/*<video width="100%" src="/videos/segway-video.mp4" controls={false} autoPlay muted loop />*/}
      <img src={villainimg.src} width="100%" />

      <TitleVehiculo>
        <NameBorder>Utility&Recreational ATV</NameBorder>
      </TitleVehiculo>

      <VehiculeProducts />

      <img src={segwaymotor.src} width="100%" />

      <TitleVehiculo>
        <NameBorder>NiNeBot Scooter</NameBorder>
      </TitleVehiculo>

      <ProductScooters></ProductScooters>

      <TitleVehiculo>
        <NameBorder>Segway Accesorios</NameBorder>
      </TitleVehiculo>

      <ProductAccesories />
    </ProductsPageContainer>
  )
}
