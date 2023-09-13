'use client'

import Image from 'next/image'
import Link from 'next/link'

import facebook from '@assets/png/icons8-facebook-32.png'
import instagram from '@assets/png/icons8-instagram-viejo-50.png'
import whatsapp from '@assets/png/icons8-whatsapp-30.png'
import youtube from '@assets/png/icons8-youtube-30.png'
import {
  TitleText,
  LinkSection,
  FooterContainer,
  LinkSectionWrap,
  InformationContainer,
  TopFooterSectionContainer,
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
          <p>infoventasegwaycr@gmail.com</p>
          <p>Atendimento: (506) 8846-6680 </p>
          <p>Atendimento: (506) 83168462</p>
        </InformationContainer>

        <InformationContainer>
          <TitleText>INFORMACIÓN</TitleText>
          <p>Parque Empresarial Lindora, Local G2</p>
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
            <a href="https://wa.link/u2iq52">WHATSAPP</a>
          </LinkSection>
        </LinkSectionWrap>
      </TopFooterSectionContainer>
    </FooterContainer>
  )
}
