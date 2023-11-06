'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaWaze } from 'react-icons/fa'

import facebook from '@assets/png/icons-facebook.png'
import instagram from '@assets/png/icons-instagram.png'
import whatsapp from '@assets/png/icons-whatsapp.png'
import {
  TitleText,
  LinkSection,
  FooterContainer,
  LinkSectionWrap,
  InformationContainer,
  TopFooterSectionContainer,
  InformationFooterContainer,
} from '@features/layout/GeneralLayout/Footer/Footer.elements'

export default function Footer() {
  return (
    <FooterContainer>
      <TopFooterSectionContainer>
        <InformationContainer>
          <TitleText>SERVICIOS</TitleText>
          <p>Segway Power Sports Costa Rica</p>
          <Link href="/products">Productos</Link>
        </InformationContainer>

        <InformationContainer>
          <TitleText>MENÚ</TitleText>
          <Link href="/">Inicio</Link>
          <Link href="/about">Sobre Nosotros</Link>
          <Link href="/contacts">Contáctenos</Link>
        </InformationContainer>

        <InformationContainer>
          <TitleText>CONTACTO</TitleText>
          <p>ventas@segwaypowersportscr.com</p>
          <p>Contacto-Asesor: 8989-5005 </p>
        </InformationContainer>

        <InformationContainer>
          <TitleText>INFORMACIÓN</TitleText>
          <p>Parque Empresarial Lindora, Local G2</p>
          <InformationFooterContainer href="https://www.waze.com/es-419/live-map/directions?to=ll.9.961574%2C-84.197309">
            Dirección de Waze:
            <FaWaze style={{ fontSize: '26px' }} />
          </InformationFooterContainer>
        </InformationContainer>

        <LinkSectionWrap>
          <LinkSection>
            <Image src={facebook.src} width={15} height={15} alt="" />
            <a href="https://www.facebook.com/Segway506?mibextid=LQQJ4d">FACEBOOK</a>
          </LinkSection>

          <LinkSection>
            <Image src={instagram.src} width={20} height={20} alt="" />
            <a href="https://instagram.com/segwaypowersports_cr?igshid=OGQ5ZDc2ODk2ZA==">
              INSTAGRAM
            </a>
          </LinkSection>

          <LinkSection>
            <Image src={whatsapp.src} width={20} height={20} alt="" />
            <a href="https://wa.link/s2ryli">WHATSAPP</a>
          </LinkSection>
        </LinkSectionWrap>
      </TopFooterSectionContainer>
    </FooterContainer>
  )
}
