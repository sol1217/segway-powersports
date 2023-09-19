'use client'

import React, { useState } from 'react'

import offLight from '@assets/jpeg/luces-off.jpeg'
import onLight from '@assets/jpeg/luces-On.jpeg'
import villainimg from '@assets/jpeg/product-villain-two.jpeg'
import { ProductScooters } from '@features/products/scooters'
import { VehiculeProducts } from '@features/products/vehicule'
import { AccesoriesVehicule } from '@features/products/accesories-vehicules/AccesoriesVehicules'
import { ProductAccesories } from '@features/products/accesories/ProductAccesories'

import {
  NameVehicule,
  VideoContainer,
  CircleContainer,
  ImagesContainer,
  SwitchContainer,
  ControlLightText,
  CatalogoContainer,
  VehiculeContainer,
  SwitchMainContainer,
  ChangeLightsContainer,
  NameVehiculeContainer,
  SwitchDivisionContainer,
} from './ProductsPage.elements'

export const ProductsPage = () => {
  const [encendido, setEncendido] = useState(false)

  const handleToggle = () => {
    setEncendido(!encendido)
  }
  const onLightImageUrl = 'https://powersports.segway.com/resources/web/img/open_light.png'
  const offLightImageUrl = 'https://powersports.segway.com/resources/web/img/close_light.png'

  return (
    <VehiculeContainer>
      <img src={villainimg.src} width="100%" />
      <NameVehiculeContainer style={{ margin: '0 0 30px 0' }}>
        <NameVehicule>Segway PowerSports Vehículos</NameVehicule>
      </NameVehiculeContainer>

      <VehiculeProducts />

      <VideoContainer>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/UbYxEFOz0pg?si=SN1LR2pct4TwnEjz"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </VideoContainer>

      <NameVehiculeContainer>
        <NameVehicule>NiNeBot Scooters</NameVehicule>
      </NameVehiculeContainer>

      <ProductScooters />

      <ChangeLightsContainer>
        <SwitchMainContainer>
          <ControlLightText>Control de Luces Snarler</ControlLightText>
          <SwitchContainer className={encendido ? 'encendido' : 'apagado'} onClick={handleToggle}>
            <CircleContainer />
            <SwitchDivisionContainer
              style={{
                backgroundImage: `url(${encendido ? onLightImageUrl : offLightImageUrl})`,
                width: '100%',
                height: '100%',
              }}
            />
          </SwitchContainer>
        </SwitchMainContainer>
        <ImagesContainer>
          <img src={onLight.src} width="100%" />
          <img src={offLight.src} width="100%" className={!encendido ? 'on' : undefined} />
        </ImagesContainer>
      </ChangeLightsContainer>

      <NameVehiculeContainer style={{ margin: '40px 0 30px 0' }}>
        <NameVehicule>Segway PowerSports Accesorios</NameVehicule>
      </NameVehiculeContainer>

      <ProductAccesories />

      <NameVehiculeContainer style={{ margin: '40px 0 30px 0' }}>
        <NameVehicule>Segway PowerSports Accesorios de Vehiculos</NameVehicule>
      </NameVehiculeContainer>

      <AccesoriesVehicule />

      <CatalogoContainer>
        <a href="/catalogo.pdf" download>
          Descargar Catálogo
        </a>
      </CatalogoContainer>
    </VehiculeContainer>
  )
}
