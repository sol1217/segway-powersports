'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@assets/jpg/logo.jpg'

import {
  MobileMenu,
  ToggleButton,
  HeaderContainer,
  TopHeaderSection,
  DesctopNavigation,
  MobileMenuContainer,
  TopHeaderSectionContainer,
} from './Header.elements'
import { NavigationLinks } from './NavigationLinks'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <TopHeaderSectionContainer>
        <TopHeaderSection>
          <Link href="/">
            <Image src={logo.src} width={244} height={70} alt="logo" />
          </Link>
          <DesctopNavigation>
            <NavigationLinks />
          </DesctopNavigation>
          <ToggleButton onClick={() => setMenuOpen(!menuOpen)} $active={menuOpen} />
        </TopHeaderSection>
      </TopHeaderSectionContainer>
      {menuOpen && (
        <MobileMenuContainer>
          <MobileMenu>
            <NavigationLinks />
          </MobileMenu>
        </MobileMenuContainer>
      )}
    </HeaderContainer>
  )
}
