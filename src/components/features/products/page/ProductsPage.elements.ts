import styled from 'styled-components'

export const ProductsPageContainer = styled.div`
  padding-top: 100px;
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

export const SwitchContainer = styled.div`
  display: inline-flex;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ccc;
  border-radius: 30px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  cursor: pointer;
  z-index: 99;
  width: 120px;
  height: 45px;
`

export const ControlLightText = styled.h2`
  background-color: yellow;
`

export const DivisionSwitchContainer = styled.div`
  flex: 1;
  padding: 10px;
`

export const CircleContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #ccc;
  border-radius: 50%;
  transition: transform 0.3s ease;

  ${SwitchContainer}.encendido & {
    transform: translateX(63px);
    background-color: #4caf50;
  }

  ${SwitchContainer}.apagado & {
    transform: translateX(0);
    background-color: #f44336;
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
