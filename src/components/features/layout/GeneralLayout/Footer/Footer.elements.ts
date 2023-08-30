import styled from 'styled-components'

export const FooterWrap = styled.footer`
  background: #16242a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170px;
  z-index: 99;
  overflow: hidden;
`

export const InformationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  max-width: 60%;
  height: inherit;
  gap: 30px;

  @media (min-width: 1300px) {
    justify-content: space-evenly;
    gap: 0;
  }
`

export const TextFooter = styled.h5`
  color: red;
`

export const ContentListWrap = styled.ul`
  padding: 10px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;

  @media (min-width: 1300px) {
    gap: 5px;
  }

  @media (max-width: 700px) {
    display: none;
  }

  &:first-child {
    @media (max-width: 780px) {
      display: none;
    }
  }
`

export const ContactDisplayWrap = styled.ul`
  padding: 10px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;

  @media (min-width: 1300px) {
    gap: 5px;
  }

  @media (max-width: 550px) {
    margin-left: 30px;
  }
`

export const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  @media (min-width: 2100px) {
    flex-direction: row;
  }

  @media (max-width: 400px) {
    display: none;
  }
`

export const LinksButton = styled.button`
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
