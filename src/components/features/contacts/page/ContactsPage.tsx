'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

import segway from '@assets/jpeg/segway-powersports-motoviedo-sl-23.jpg'
import celular from '@assets/png/celular.png'
import enviar from '@assets/png/enviar.png'
import facebook from '@assets/png/facebook.png'
import instagram from '@assets/png/instagram.png'
import whatsapp from '@assets/png/whatsapp.png'
import youtube from '@assets/png/youtube.png'
import motorcicleta from '@assets/svg/segway-seeklogo.com.svg'

import {
  InfoSpan,
  SendButton,
  FormSection,
  MessageText,
  SendMessage,
  ContactInput,
  InfoMainWrap,
  SocialMedias,
  IconMotorcicle,
  ContactContainer,
  SocialMediasWrap,
  ContactMainContainer,
  FormSectionContainer,
} from './Contact.elements'

export default function ContactsPage() {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) {
      console.log('Form is not available.')
      return
    }

    emailjs.sendForm('service_et7hfpy', 'template_97zjhuj', form.current, 'eVV5LaeW7q_SV6WCE').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
    )
  }

  return (
    <ContactMainContainer>
      <img src={segway.src} width="100%" height="100%" />
      <ContactContainer>
        <FormSectionContainer>
          <FormSection ref={form} onSubmit={sendEmail}>
            <SendMessage>Envia un mensaje</SendMessage>
            <ContactInput required placeholder="Nombre" type="text" name="user_name" />
            <ContactInput placeholder="Apellidos" type="text" name="user_last" />
            <ContactInput placeholder="Telefono" type="number" name="user_phone" />
            <ContactInput required placeholder="Email" type="email" name="user_email" />
            <MessageText required placeholder="¿Como Podemos Ayudarte?" name="user_message" />
            <SendButton value="Send">
              <Image src={enviar.src} width={20} height={20} alt="" />
              Enviar
            </SendButton>
          </FormSection>
        </FormSectionContainer>

        <InfoMainWrap>
          <h3>Contacto Info</h3>
          <InfoSpan>
            <Image alt="" src={celular.src} width={50} height={50} />
            <p>+506 8846-6680 </p>
          </InfoSpan>
          <InfoSpan>infoventasegwaycr@gmail.com</InfoSpan>
          <SocialMediasWrap>
            <SocialMedias>
              <a href="https://www.facebook.com/Segway506?mibextid=LQQJ4d">
                <Image src={facebook.src} width={45} height={45} alt="" />
              </a>
            </SocialMedias>
            <SocialMedias>
              <a href="https://instagram.com/segwaypowersports_cr?igshid=OGQ5ZDc2ODk2ZA==">
                <Image src={instagram.src} width={45} height={45} alt="" />
              </a>
            </SocialMedias>
            <SocialMedias>
              <a href="https://wa.link/u2iq52">
                <Image src={whatsapp.src} width={40} height={40} alt="" />
              </a>
            </SocialMedias>
            <SocialMedias>
              <a href="https://www.youtube.com/@SegwayPowersportsCostaRica">
                <Image src={youtube.src} width={45} height={45} alt="" />
              </a>
            </SocialMedias>
            <IconMotorcicle src={motorcicleta.src} width={220} height={220} />
          </SocialMediasWrap>
        </InfoMainWrap>
      </ContactContainer>
    </ContactMainContainer>
  )
}
