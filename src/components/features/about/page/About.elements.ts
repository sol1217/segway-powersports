import Image from 'next/image'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding-top: 100px;
`

export const LogoNameContainer = styled.div`
  border-bottom: 2px solid darkred;
  padding: 20px 20px 40px 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 35px;
  letter-spacing: 15px;
  font-weight: 500 !important;
  font-style: normal;
  text-transform: uppercase;

  @media (max-width: 820px) {
    width: 100%;
  }
`

export const TextName = styled.h1`
  @media (max-width: 470px) {
    font-size: 25px;
  }
`

export const FoundationContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 800px;

  @media (max-width: 540px) {
    height: 900px;
  }
`

export const LogoImage = styled(Image)`
  @media (max-width: 820px) {
    width: 85%;
  }
`

export const InformationCompanyContainer = styled.div`
  text-align: center;
  width: 70%;
  font-size: 22px;

  @media (max-width: 820px) {
    width: 90%;
  }

  @media (max-width: 540px) {
    text-align: left;
  }
`

export const ImageInformationWrap = styled.div`
  width: 800px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 630px) {
    height: 500px;
    width: 400px;
  }
`

export const ImageInformation = styled(Image)`
  transition: transform 0.5s ease;
  border-radius: 20px;
  width: 600px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 995px) {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 540px) {
    width: 100%;
  }

  @media (max-width: 540px) {
    width: 80%;
  }
`

export const InformationSection = styled.div<{ $background?: string; $color: string }>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ $background }) => $background || 'white'};
  color: ${({ $color }) => $color || 'black'};
  padding: 30px;
  margin-bottom: 30px;
`

export const InformationCompany = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const InformationCompanyText = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  box-shadow: 0 0 7px 0;
  border-radius: 10px;
  border: 1px solid;

  @media (max-width: 630px) {
    height: 60%;
    width: 100%;
    min-width: 300px;
  }
`

export const TitleContainer = styled.div`
  border-bottom: 2px solid darkred;
  padding: 0px 0px 15px 0px;
  font-size: 18px;
  font-family: Fjalla One;
  text-align: center;
  line-height: 35px;
  letter-spacing: 15px;
  font-weight: 500 !important;
  font-style: normal;
  text-transform: uppercase;
`

export const InformationText = styled.p`
  text-align: center;
  font-size: 18px;
  padding-top: 20px;
`

export const SloganContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  padding: 30px;
`

export const SloganImage = styled(Image)`
  @media (max-width: 820px) {
    width: 90%;
    height: 30%;
  }
`

export const SloganDefinition = styled.p`
  font-size: 25px;
  text-align: center;
  color: darkgray;
`

export const ImagesSectionContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImagesGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  align-content: center;
  justify-content: center;
  padding: 30px;
  gap: 20px;

  @media (max-width: 960px) {
    width: 90%;
    height: 90%;
    grid-template-columns: repeat(3, 240px);
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 90%;
    grid-template-columns: repeat(3, 200px);
  }

  @media (max-width: 690px) {
    width: 100%;
    height: 90%;
    grid-template-columns: repeat(2, 200px);
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 90%;
    grid-template-columns: repeat(2, 160px);
  }
`

export const ImagesGallery = styled(Image)`
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 960px) {
    width: 250px;
    height: 200px;
  }

  @media (max-width: 800px) {
    width: 200px;
    height: 180px;
  }

  @media (max-width: 450px) {
    width: 160px;
    height: 90px;
  }
`

export const ContactText = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
`

export const ContactSectionWrap = styled.div`
  background-color: black;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  font-size: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  @media (max-width: 800px) {
    gap: 20px;
  }
`

export const ContactButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  height: 60px;
  width: 230px;
  color: white;
  font-size: 22px;
  box-shadow: 0 0 6px 0;
  cursor: pointer;
`
