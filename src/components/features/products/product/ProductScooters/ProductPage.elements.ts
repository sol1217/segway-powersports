'use client'

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

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 695px) {
    height: 100%;
  }
`

export const ImageProduct = styled.img`
  @media (max-width: 560px) {
    width: 70%;
  }
`

export const FeaturesProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  gap: 20px;

  @media (max-width: 760px) {
    width: 400px;
  }

  @media (max-width: 610px) {
    height: 100%;
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`

export const FeaturesTextContainer = styled.div`
  @media (max-width: 695px) {
    width: 70%;
    display: grid;
    justify-content: center;
    align-content: center;
    gap: 5px;
  }
`

export const DescriptionSection = styled.p`
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 790px) {
    font-weight: bold;
  }
`

export const ContactSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`

export const ProductAdded = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 15px;
  font-size: 20px;
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

  &:active {
    transform: scale(90%);
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
  text-align: center;

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

  @media (max-width: 1020px) {
    width: 50%;
  }

  @media (max-width: 765px) {
    width: 60%;
    box-shadow: 0 0 10px 0;
    border-radius: 20px;
  }

  @media (max-width: 550px) {
    width: 75%;
  }

  @media (max-width: 455px) {
    width: 90%;
    height: 500px;
  }
`

export const ImagesFeatures = styled.img`
  border-radius: 20px;
  @media (max-width: 550px) {
    height: 250px;
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

/*catalogo*/
export const CatalogueContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CatalogueSection = styled.button`
  width: 20%;
  height: 50px;
  display: flex;
  border: none;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to left, #d92a19, darkred);
  margin: 25px auto;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 40px;

  @media (min-width: 1600px) {
    width: 260px;
  }

  @media (max-width: 970px) {
    width: 260px;
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
