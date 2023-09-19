'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const ProductPageContainer = styled.div`
  padding-top: 100px;
  position: relative;
`

export const LogoImage = styled.img`
  position: absolute;
  left: 30%;
  top: 10%;
  width: 50%;

  @media (max-width: 870px) {
    top: 8%;
  }

  @media (max-width: 765px) {
    top: 6%;
  }

  @media (max-width: 500px) {
    top: 5%;
  }
`

export const ViewProductContainer = styled.div`
  height: 80%;
  width: 100%;
  background: white;
  color: black;
`

export const NameModel = styled.div`
  background: black;
  width: 100%;
  text-align: center;
`

export const InformationProductContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: black;
  width: 100%;
`

export const InformationProduct = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  gap: 30px;

  @media (max-width: 980px) {
    width: 40%;
  }

  @media (max-width: 790px) {
    width: 35%;
  }

  @media (max-width: 660px) {
    width: 50%;
  }

  @media (max-width: 550px) {
    font-size: 16px;
    width: 100%;
  }
`

export const FeaturesProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  padding: 20px;
`

export const FeaturesProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;

  @media (max-width: 790px) {
    width: 400px;
  }

  @media (max-width: 550px) {
    width: 500px;
  }
`

export const DescriptionSection = styled.p`
  text-transform: uppercase;
`

export const ContactSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`

export const ProductImage = styled.img`
  position: absolute;
  left: 25%;
  top: -30px;
  width: 700px;

  @media (max-width: 1070px) {
    width: 65%;
  }

  @media (max-width: 865px) {
    top: 70px;
  }

  @media (max-width: 670px) {
    top: 120px;
  }

  @media (max-width: 550px) {
    width: 50%;
    top: 35%;
    left: 46%;
  }

  @media (max-width: 470px) {
    top: 49%;
    left: 46%;
  }
`

export const ContactContainer = styled.button`
  border-radius: 30px;
  width: 195px;
  height: 40px;
  padding: 10px;
  background: linear-gradient(darkred, red);
  color: white;
  font-size: 18px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`

export const DisplayProductContainer = styled.div`
  width: 100px;
  height: 80px;
  margin-top: 180px;
`

export const DisplayProduct = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;

  @media (max-width: 550px) {
    display: none;
  }
`

/*Caracteristicas*/

export const DesignFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 50px;

  @media (max-width: 765px) {
    height: 100%;
    gap: 20px;
  }
`

export const TitleFeaturesContainer = styled.h2`
  text-transform: uppercase;

  @media (max-width: 765px) {
    margin: 27px 0 0px 0;
  }
`

export const DesignFeatures = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  @media (max-width: 765px) {
    flex-direction: column;
    height: 100%;
    gap: 40px;
  }

  @media (max-width: 555px) {
    justify-content: space-evenly;
  }
`

export const DesignFeaturesItems = styled.div`
  width: 320px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;

  @media (max-width: 895px) {
    width: 50%;
  }

  @media (max-width: 550px) {
    width: 70%;
    height: 400px;
  }
`

export const TextInformation = styled.p`
  font-size: 22px;

  @media (max-width: 555px) {
    font-size: 18px;
  }
`
export const TitleFeatures = styled.h2`
  color: darkred;
`

/*ficha tecnica*/

export const DataSheetContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 100px 0;
  background: white;
  color: black;
  font-size: 20px;
  text-transform: uppercase;
`

export const DataSheet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const TextDowload = styled.p`
  font-size: 14px;
  color: darkgray;
`

export const DataSheetLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1040px) {
    width: 230px;
  }

  @media (max-width: 940px) {
    box-shadow: 0 0 10px 0;
    width: 48%;
    gap: 10px;
    padding: 10px;
  }

  @media (max-width: 550px) {
    width: 70%;
  }
`
/*images*/

export const ImagesSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
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

export const ImagesGallery = styled.img`
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

  @media (max-width: 690px) {
    height: 150px;
  }

  @media (max-width: 450px) {
    width: 160px;
    height: 90px;
  }
`
