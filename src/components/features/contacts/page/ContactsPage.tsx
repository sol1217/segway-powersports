'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import { Box } from '@core'
import emailjs from '@emailjs/browser'
import facebook from '@assets/png/facebook.png'
import instagram from '@assets/png/instagram.png'
import phone from '@assets/png/phone.png'
import send from '@assets/png/send.png'
import whatsapp from '@assets/png/whatsapp.png'
import youtube from '@assets/png/youtube.png'
import motorcycle from '@assets/svg/segway-seeklogo.svg'

import {
  InfoName,
  InfoSpan,
  SendButton,
  FormSection,
  InfoSection,
  MessageText,
  SendMessage,
  ContactInput,
  SocialMedias,
  IconMotorcicle,
  ContactContainer,
  ContactMainContainer,
} from './Contact.elements'

export default function ContactsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [buttonText, setButtonText] = useState('Enviar')

  const handleInputChange = (e: any) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '')
    setInputValue(numericValue)
  }

  const formMessage = useRef(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    if (formMessage.current) {
      emailjs
        .sendForm('service_fu04b3h', 'template_5b6oxzn', formMessage.current, 'eVV5LaeW7q_SV6WCE')
        .then(
          (result) => {
            console.log(result.text)
            setFormSubmitted(true)
            setButtonText('Enviado')
            setTimeout(() => {
              window.location.reload()
            }, 2000)
          },
          (error) => {
            console.log(error.text)
          },
        )
    }
  }

  return (
    <ContactMainContainer>
      <ContactContainer>
        <FormSection ref={formMessage} onSubmit={sendEmail}>
          <SendMessage>Envía un mensaje</SendMessage>

          <ContactInput required placeholder="Nombre Completo" type="text" name="user_name" />
          <ContactInput placeholder="Asunto" type="text" name="user_issue" />
          <ContactInput
            required
            maxLength={9}
            minLength={8}
            placeholder="Teléfono"
            type="text"
            inputMode="tel"
            name="user_cellphone"
            value={inputValue}
            onChange={handleInputChange}
          />
          <ContactInput required placeholder="Email" type="email" name="user_email" />

          <MessageText
            minLength={30}
            required
            placeholder="¿Cómo Podemos Ayudarte?"
            name="user_message"
          />

          <SendButton type="submit" value="Send">
            <Image src={send.src} width={20} height={20} alt="" />
            {buttonText}
          </SendButton>
        </FormSection>

        <Box>
          <InfoSection>
            <Box flexDirection="column" gap={8}>
              <InfoName>Información de Contacto</InfoName>

              <InfoSpan>
                <Image alt="" src={phone.src} width={50} height={50} />
                <p>+506 8846-6680 </p>
              </InfoSpan>

              <InfoSpan>infoventasegwaycr@gmail.com</InfoSpan>

              <Box gap={16}>
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
                  <a href="https://wa.link/s2ryli">
                    <Image src={whatsapp.src} width={40} height={40} alt="" />
                  </a>
                </SocialMedias>
                <SocialMedias>
                  <a href="https://www.youtube.com/@SegwayPowersportsCostaRica">
                    <Image src={youtube.src} width={45} height={45} alt="" />
                  </a>
                </SocialMedias>
              </Box>
            </Box>

            <Box>
              <IconMotorcicle src={motorcycle.src} width={220} height={220} />
            </Box>
          </InfoSection>
        </Box>
      </ContactContainer>
    </ContactMainContainer>
  )
}
