'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FearText,
  FearImage,
  SegwayImage,
  FearTextWrap,
  ContactButton,
  ImagesGallery,
  AboutContainer,
  TextNameSegway,
  InformationText,
  ImageInformation,
  ImagesSectionWrap,
  ContactSectionWrap,
  GeneralInformation,
  InformationCompany,
  FoundationContainer,
  SegwayNameContainer,
  TextContactInCharge,
  ImageInfromationWrap,
  ImagesGallerySection,
  TitleInformationWrap,
  InformationCompanyText,
  InformationCompanyWrap,
} from '@features/about/page/About.elements'

import segwaycar from '@assets/jpeg/montainsegway.jpeg'
import segwaymula from '@assets/jpeg/mulasegway.jpeg'
import segwayblue from '@assets/jpeg/segwayblue.jpeg'
import segwayvillain from '@assets/jpeg/segwaycar.jpeg'
import segwaygreen from '@assets/jpeg/segwaygreen.jpeg'
import segwaynew from '@assets/jpeg/segwaynew.jpeg'
import segwaytwo from '@assets/jpeg/segwaytwo.jpeg'
import segwaycuadra from '@assets/jpeg/serwaycuadra.jpeg'
import segwaystreet from '@assets/jpeg/streetsegway.jpeg'
import fear from '@assets/png/fear place.png'
import segwaylogo from '@assets/png/logo-red.png'

export default function AboutUsPage() {
  return (
    <AboutContainer>
      <video
        style={{ marginTop: '-8%', marginBottom: '-8%' }}
        width="100%"
        src="/videos/ATV%20(online-video-cutter.com).mp4"
        controls={false}
        autoPlay
        muted
        loop
      />

      <FoundationContainer>
        <SegwayNameContainer>
          <TextNameSegway>Segway PowerSports</TextNameSegway>
        </SegwayNameContainer>
        <SegwayImage src={segwaylogo.src} alt="Segway Powersports" width={500} height={200} />
        <GeneralInformation>
          Segway, fundada en 1999 por el renombrado empresario Dean Kamen en los EUA. Fundada en
          Estados Unidos como una de las empresas pioneras en dispositivos VMP, Segway ha crecido
          hasta convertirse en un monstruo tecnológico que se ha ido ramificando con el paso de los
          años y la evolución del sector. Fue en 2019 cuando segway presentó en el salón de Milán su
          división SEGWAY POWERSPORTS como constatación del crecimiento de la compañía, yendo un
          paso más allá de los dispositivos de movilidad personal y las alianzas con grandes
          compañías del sector tecnológico como de la automoción.
        </GeneralInformation>
      </FoundationContainer>

      <InformationCompanyWrap $background="#fff" $color="#000">
        <InformationCompany>
          <ImageInfromationWrap>
            <ImageInformation src={segwaycar.src} width={450} height={450} alt="" />
          </ImageInfromationWrap>
          <InformationCompanyText>
            <TitleInformationWrap>Perfil de la compañia</TitleInformationWrap>
            <InformationText>
              Segway Powersports redobla su presencia y ha querido darnos a conocer su catálogo de
              productos offroad. Ellos han sido los encargados de montar un plan perfecto para
              cualquiera al que le guste el motor y hacer gamberradas sobre ruedas poniendo a
              nuestra disposición el ATV Snarler AT6, el UTV Fugleman y el SXS Villain. Un trío de
              (supuestas) herramientas de trabajo pero que dan mucho, mucho juego.
            </InformationText>
          </InformationCompanyText>
        </InformationCompany>
      </InformationCompanyWrap>

      <InformationCompanyWrap $background="#000" $color="#fff">
        <InformationCompany>
          <InformationCompanyText>
            <TitleInformationWrap>Filosofias</TitleInformationWrap>
            <InformationText>
              La empresa se dedica a la venta y servicio de unidades. Vela por el bienestar,
              satisfacción y diversión de sus clientes. Siempre buscando el desarrollo y la
              superación.
            </InformationText>
          </InformationCompanyText>
          <ImageInfromationWrap>
            <ImageInformation src={segwayvillain.src} width={450} height={450} alt="" />
          </ImageInfromationWrap>
        </InformationCompany>
      </InformationCompanyWrap>

      <InformationCompanyWrap $background="#fff" $color="#000">
        <InformationCompany>
          <ImageInfromationWrap>
            <ImageInformation src={segwaymula.src} width={450} height={450} alt="" />
          </ImageInfromationWrap>
          <InformationCompanyText>
            <TitleInformationWrap>Perfil de la compañia</TitleInformationWrap>
            <InformationText>
              Segway Powersports é uma subsidiária do Segway-Ninebot Group, que é um unicórnio na
              indústria global de mobilidade inteligente. O Segway-Ninebot possui três grandes
              regiões de negócios, incluindo Ásia-Pacífico, Europa e América, e seus produtos são
              vendidos em mais de 100 países e regiões ao redor do mundo. Possui mais de 1.000
              patentes de núcleo global. Seus produtos incluem veículos todo-o-terreno, robótica,
              go-karts, patinetes com balanceamento automático.
            </InformationText>
          </InformationCompanyText>
        </InformationCompany>
      </InformationCompanyWrap>

      <FearTextWrap>
        <FearImage src={fear.src} width={800} height={150} alt="" />
        <FearText>
          &quot;FEAR NO PLACE&quot; significa que el Segway no sólo es usado, sino que, vive, se
          esfuerza, supera sus límites cada día y es valiente para explorar cualquier terreno.
        </FearText>
      </FearTextWrap>

      <ImagesSectionWrap>
        <ImagesGallerySection>
          <ImagesGallery src={segwayblue.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaynew.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaygreen.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaystreet.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaytwo.src} alt="" width={300} height={200} />
          <ImagesGallery src={segwaycuadra.src} alt="" width={300} height={200} />
        </ImagesGallerySection>
      </ImagesSectionWrap>

      <ContactSectionWrap>
        <TextContactInCharge>
          Segway Powersports ponte en contacto con uno de nuestros encargados.
        </TextContactInCharge>
        <ContactButton>
          <Link href="/contacts">Enviar Mensaje</Link>
        </ContactButton>
      </ContactSectionWrap>
    </AboutContainer>
  )
}
