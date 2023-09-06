import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: #16242a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  z-index: 99;
  overflow: hidden;
`

export const TopFooterSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  max-width: 65%;
  height: inherit;
  gap: 30px;

  @media (min-width: 1300px) {
    justify-content: space-evenly;
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
  gap: 10px;
  list-style: none;

  @media (min-width: 1300px) {
    gap: 0px;
  }

  @media (max-width: 700px) {
    display: none;
  }

  &:first-child {
    @media (max-width: 790px) {
      display: none;
    }
  }

  &:nth-child(3) {
    @media (max-width: 780px) {
      display: block;
      margin-left: 30px;
    }
  }
`

export const LinkSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  @media (max-width: 417px) {
    display: none;
  }
`

export const LinkSections = styled.button`
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
