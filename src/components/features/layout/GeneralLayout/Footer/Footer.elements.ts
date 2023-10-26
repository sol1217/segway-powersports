import Link from 'next/link'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: #16242a;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 180px;
  z-index: 99;
  overflow: hidden;
  font-size: 18px;
`

export const TopFooterSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: inherit;

  @media (min-width: 1600px) {
    justify-content: space-evenly;
    width: 65%;
  }
`

export const TitleText = styled.h5`
  color: red;
`

export const InformationContainer = styled.nav`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 9px;
  list-style: none;
  height: 110px;
  width: 250px;

  &:first-child {
    width: 160px;
    @media (max-width: 1090px) {
      display: none;
    }
  }

  &:nth-child(2) {
    width: 140px;
  }

  &:nth-child(3) {
    @media (max-width: 900px) {
      display: block;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const LinkSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  @media (max-width: 480px) {
    display: none;
  }
`

export const LinkSection = styled.button`
  border-radius: 20px;
  width: 130px;
  height: 30px;
  background-color: #c51d1d;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`

export const InformationFooterContainer = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
`
