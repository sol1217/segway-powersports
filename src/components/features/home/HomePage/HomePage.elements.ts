'use client'

import styled from 'styled-components'

export const HomePageContainer = styled.div`
  margin-top: 90px;
  margin-bottom: 30px;
`

export const CarouselImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
`

export const VideoContainer = styled.div`
  position: relative;
`

export const SloganImg = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  text-align: center;
  font-weight: 200;
  width: 65%;
`

export const SLoganText = styled.h2`
  position: absolute;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 200;
  color: #fff;
  font-size: 19px;
  line-height: 32px;
  text-shadow: 1px 1px 2px #000;
  text-transform: uppercase;

  @media (max-width: 620px) {
    top: 70%;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }

  @media (min-width: 1600px) {
    font-size: 28px;
  }
`

export const TitleSomeProducts = styled.h2`
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  color: darkred;

  @media (max-width: 620px) {
    font-size: 25px;
  }
`

export const SeeProductsButton = styled.button`
  background-color: darkred;
  height: 60px;
  width: 250px;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  max-width: 260px;
  text-shadow: 0 0 3px;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  padding: 10px;

  @media (max-width: 640px) {
    width: 220px;
    height: 50px;
    font-size: 12px;
  }
`

export const NameVehicule = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`

export const VehiculesContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: white;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  border: 1px solid red;

  @media (max-width: 1330px) {
    font-size: 17px;
  }

  @media (max-width: 850px) {
    font-size: 22px;
  }

  @media (max-width: 620px) {
    height: 500px;
    gap: 20px;
  }
`

export const ImagesVehiculesContainer = styled.div`
  background-color: white;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  text-transform: uppercase;
  color: darkred;
  width: 100%;
`

export const ImagesSection = styled.div`
  width: 60%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1330px) {
    width: 100%;
  }

  @media (max-width: 1070px) {
    width: 700px;
  }

  @media (max-width: 1000px) {
    width: 800px;
  }
`

export const ImagesVehicules = styled.img`
  transition: transform 0.5s ease;
  width: 85%;
  height: 230px;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1330px) {
    width: 100%;
  }

  @media (max-width: 1000px) {
    display: none;
    height: 75%;
    width: 260px;
  }

  @media (max-width: 620px) {
    width: 200px;
  }

  @media (max-width: 470px) {
    width: 170px;
    height: 60%;
  }
`

export const TitleVideos = styled.h2`
  text-align: center;
  margin: 30px 0;
  font-size: 35px;
`

export const VideosContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (min-width: 1800px) {
    padding: 30px;
  }

  @media (max-width: 750px) {
    gap: 25px;
  }

  @media (max-width: 450px) {
    gap: 0px;
  }
`

export const VideoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  font-size: 12px;
  width: 60%;
  height: 300px;
  text-transform: uppercase;
  position: relative;
  max-width: 85%;

  @media (max-width: 1000px) {
    width: 80%;
    height: 400px;
  }

  @media (min-width: 2000px) {
    width: 80%;
    height: 400px;
  }

  @media (max-width: 750px) {
    width: 100%;
    height: 290px;
  }

  @media (max-width: 550px) {
    width: 100%;
    height: 220px;
  }
`

export const Namevideos = styled.h2`
  @media (max-width: 1000px) {
    display: none;
  }
`
