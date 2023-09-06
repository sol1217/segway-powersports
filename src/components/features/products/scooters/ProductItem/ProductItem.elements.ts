import styled from 'styled-components'

export const ButtonInformation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const ChangeImage = styled.img<{ $isFlipped?: string }>`
  transition: transform 0.5s ease;
`

export const PrevButton = styled.button`
  z-index: 99;
  position: absolute;
  left: 0;
  bottom: 160px;
  background-color: transparent;
  border: none;
  width: 60px;
  font-size: 35px;
  color: rgba(169, 169, 169, 0.34);

  &:hover {
    color: #332e2e;
  }
`

export const NextButton = styled.button`
  z-index: 99;
  position: absolute;
  right: 0;
  bottom: 160px;
  background-color: transparent;
  border: none;
  width: 60px;
  font-size: 35px;
  color: rgba(169, 169, 169, 0.34);

  &:hover {
    color: #332e2e;
  }
`

export const SeeInformationProduct = styled.button`
  background: linear-gradient(to left, #d92a19, darkred);
  border: none;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  font-size: 15px;
  border-radius: 20px;
`

export const SecondProductSection = styled.div`
  box-shadow: 0 0 10px 0 #d3c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  position: relative;
`
