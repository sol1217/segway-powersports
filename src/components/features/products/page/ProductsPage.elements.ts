import styled from 'styled-components'

export const ProductsPageContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 20px;
  background-color: white;
  color: black;
`

export const TitleVehiculo = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: black;
  color: white;
  height: 150px;
  margin: 50px 0 50px 0;
`

export const NameBorder = styled.div`
  border-bottom: 1px solid darkred;
  padding: 10px;
  text-transform: uppercase;
`

export const ChangeLights = styled.div`
  position: relative;
`

export const SwitchMainContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 30%;
  height: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  color: white;
  text-transform: uppercase;
`

export const SwitchContainer = styled.div`
  display: inline-flex;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  width: 100px;
  height: 38px;
`

export const ControlLightText = styled.h2``

export const DivisionSwitchContainer = styled.div`
  flex: 1;
  padding: 10px;
`

export const CircleContainer = styled.div`
  background: url(https://powersports.segway.com/resources/web/img/ball_light.png);
  border-radius: 50%;
  transition: transform 0.3s ease;
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  margin-top: -30px;
  right: 60%;

  ${SwitchContainer}.encendido & {
    transform: translateX(80px);
  }

  ${SwitchContainer}.apagado & {
    transform: translateX(0);
  }
`

export const ImagesContainer = styled.div`
  position: relative;

  & > img {
    transition: opacity 0.5s;
  }

  & > img.on {
    opacity: 1 !important;
  }

  & > img:last-of-type {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const DownLoadingCatalogo = styled.button`
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
`
