'use client'

import {
  FooterWrap,
  TextFooter,
  ButtonsWrap,
  LinksButton,
  ContentListWrap,
  InformationWrap,
  ContactDisplayWrap,
} from '@features/layout/GeneralLayout/Footer/Footer.elements'

import facebook from './assets/icons8-facebook-32.png'
import instagram from './assets/icons8-instagram-viejo-50.png'
import whatsapp from './assets/icons8-whatsapp-30.png'
import youtube from './assets/icons8-youtube-30.png'

export default function Footer() {
  return (
    <FooterWrap>
      <InformationWrap>
        <ContentListWrap>
          <TextFooter>SERVICIOS</TextFooter>
          <li>Segway Power Sports Costa Rica</li>
          <li>
            <a>Productos</a>
          </li>
        </ContentListWrap>
        <ContentListWrap>
          <TextFooter>MENU</TextFooter>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="#">Sobre Nosotros</a>
          </li>
          <li>
            <a href="#">Contactenos</a>
          </li>
        </ContentListWrap>
        <ContactDisplayWrap>
          <TextFooter>CONTACTO</TextFooter>
          <li>infoventasegwaycr@gmail.com</li>
          <li>Atendimento: (506) 8846-6680 </li>
          <li>Atendimento: (506) 83168462</li>
        </ContactDisplayWrap>
        <ContentListWrap>
          <TextFooter>INFORMACION</TextFooter>
          <li>Parque Empresarial Lindora, Local G2</li>
        </ContentListWrap>
        <ButtonsWrap>
          <LinksButton>
            <img src={facebook.src} width={15} height={15} />
            <a href="https://www.facebook.com/Segway506?mibextid=LQQJ4d">FACEBOOK</a>
          </LinksButton>
          <LinksButton>
            <img src={instagram.src} width={20} height={20} />
            <a href="https://instagram.com/segwaypowersports_cr?igshid=OGQ5ZDc2ODk2ZA==">
              INSTAGRAM
            </a>
          </LinksButton>
          <LinksButton>
            <img src={whatsapp.src} width={20} height={20} />
            <a href="https://wa.link/u2iq52">WHATSAPP</a>
          </LinksButton>
          <LinksButton>
            <img src={youtube.src} width={25} height={25} />
            <a href="https://www.youtube.com/@SegwayPowersportsCostaRica">YOU TUBE</a>
          </LinksButton>
        </ButtonsWrap>
      </InformationWrap>
    </FooterWrap>
  )
}
