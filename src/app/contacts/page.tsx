'use client'

import celular from './assets/celular.png'
import segway from './assets/cr.png'
import email from './assets/email.png'
import enviar from './assets/enviar.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import icon from './assets/segway.svg'
import whatsapp from './assets/whatsapp.png'
import youtube from './assets/youtube.png'
import {
  InfoSpan,
  MainWrap,
  ContactWrap,
  MessageText,
  ContactInput,
  EnviarButton,
  ImageContact,
  InfoMainWrap,
  SocialMedias,
  IconMotorcicle,
  FormContactWrap,
  SocialMediasWrap,
  MessageContactWrap,
} from './Contact.elements'

export default function Contacts() {
  return (
    <MainWrap>
      <img src={segway.src} width="100%" height="100%" />
      <ContactWrap>
        <MessageContactWrap>
          <FormContactWrap>
            <h2>Envia un mensaje</h2>
            <ContactInput placeholder="Nombre" type="text" />
            <ContactInput placeholder="Apellidos" type="text" />
            <ContactInput placeholder="Telefono" type="number" />
            <ContactInput placeholder="Email" type="email" />
            <MessageText placeholder="¿Como Podemos Ayudarte?" />
            <EnviarButton>
              <img src={enviar.src} width={20} height={20} />
              SUBMIT
            </EnviarButton>
          </FormContactWrap>
        </MessageContactWrap>
        <InfoMainWrap>
          <h3>Contacto Info</h3>
          <InfoSpan>
            <img src={celular.src} />
            <p>+506 8846-6680 </p>
          </InfoSpan>
          <InfoSpan>
            <img src={email.src} width={25} height={25} />
            <p>infoventasegwaycr@gmail.com</p>
          </InfoSpan>
          <SocialMediasWrap>
            <SocialMedias>
              <a href="https://www.facebook.com/Segway506?mibextid=LQQJ4d">
                <img src={facebook.src} width={45} height={45} />
              </a>
            </SocialMedias>
            <SocialMedias>
              <a href="https://instagram.com/segwaypowersports_cr?igshid=OGQ5ZDc2ODk2ZA==">
                <img src={instagram.src} width={45} height={45} />
              </a>
            </SocialMedias>
            <SocialMedias>
              <a href="https://wa.link/u2iq52">
                <img src={whatsapp.src} width={40} height={40} />
              </a>
            </SocialMedias>
            <SocialMedias>
              <a href="https://www.youtube.com/@SegwayPowersportsCostaRica">
                <img src={youtube.src} width={45} height={45} />
              </a>
            </SocialMedias>
            <IconMotorcicle src={icon.src} width={220} height={220} />
          </SocialMediasWrap>
        </InfoMainWrap>
      </ContactWrap>
    </MainWrap>
  )
}
