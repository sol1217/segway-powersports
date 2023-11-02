import styled from 'styled-components'

export const PhoneCarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 35%;
  background-color: white;
  color: black;
  padding: 20px;

  @media (max-width: 1060px) {
    flex-direction: column;
    gap: 60px;
  }
`

export const PhoneItemsContainer = styled.div`
  background: url('https://powersports.segway.com/resources/web/img/smart_moving08_2.png');
  background-size: 100% 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 400px;
`

export const PhoneItemCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VillainImage = styled.img`
  @media (max-width: 600px) {
    display: none;
  }
`

export const AppContainer = styled.div`
  font-size: 25px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 1060px) {
    text-align: center;
  }

  @media (max-width: 1060px) {
    width: 75%;
  }

  @media (max-width: 550px) {
    font-size: 20px;
  }

  @media (min-width: 1800px) {
    width: 30%;
  }
`

export const TitleAppContainer = styled.div`
  color: #000;
  font-size: 26px;
  border-bottom: 1px solid #db291b;
  text-shadow: 0 0 1.5px;
  padding: 10px;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`

export const NextPhoneButton = styled.div`
  position: absolute;
  left: 1%;
`

export const PrevPhoneButton = styled.div`
  position: absolute;
  right: 1%;
`
