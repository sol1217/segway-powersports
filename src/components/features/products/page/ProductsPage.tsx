'use client'

import React, { useState } from 'react'

import offLight from '@assets/jpeg/lucesoff.jpeg'
import onLight from '@assets/jpeg/lucesOn.jpeg'
import villainimg from '@assets/jpeg/villain.jpeg'
import { ProductScooters } from '@features/products/scooters'
import { ProductAccesories } from '@features/products/accesories/ProductAccesories'
import { VehiculeProducts } from '@features/products/vehicule/VehiculeProducts'

import {
  NameBorder,
  ChangeLights,
  TitleVehiculo,
  CircleContainer,
  ImagesContainer,
  SwitchContainer,
  ControlLightText,
  ProductsPageContainer,
  DivisionSwitchContainer,
} from './ProductsPage.elements'

export const ProductsPage = () => {
  const [encendido, setEncendido] = useState(false)

  const handleToggle = () => {
    setEncendido(!encendido)
  }

  return (
    <ProductsPageContainer>
      {/*<video width="100%" src="/videos/segway-video.mp4" controls={false} autoPlay muted loop />*/}
      <img src={villainimg.src} width="100%" />

      <TitleVehiculo style={{ margin: '0 0 30px 0' }}>
        <NameBorder>Utility&Recreational ATV</NameBorder>
      </TitleVehiculo>

      <VehiculeProducts />

      <iframe
        style={{ margin: '40px 0 0 0' }}
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/UbYxEFOz0pg?si=SN1LR2pct4TwnEjz"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>

      <TitleVehiculo>
        <NameBorder>NiNeBot Scooter</NameBorder>
      </TitleVehiculo>

      <ProductScooters />

      <ChangeLights>
        <ControlLightText>Control de Luces</ControlLightText>
        <SwitchContainer className={encendido ? 'encendido' : 'apagado'} onClick={handleToggle}>
          <CircleContainer />
          <DivisionSwitchContainer className="on">ON</DivisionSwitchContainer>
          <DivisionSwitchContainer className="off">OFF</DivisionSwitchContainer>
        </SwitchContainer>

        <ImagesContainer>
          <img src={onLight.src} width="100%" />
          <img src={offLight.src} width="100%" className={encendido ? 'on' : undefined} />
        </ImagesContainer>
      </ChangeLights>

      <TitleVehiculo style={{ margin: '40px 0 30px 0' }}>
        <NameBorder>Segway Accesorios</NameBorder>
      </TitleVehiculo>

      <ProductAccesories />
    </ProductsPageContainer>
  )
}
