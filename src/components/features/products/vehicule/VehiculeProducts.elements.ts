import styled from 'styled-components'

export const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 5px #d3c8c8;
`

export const ProductViewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 30px;
  justify-content: center;
  align-content: center;
  transition: transform 0.5s ease;
  width: 100%;
  padding: 30px;
`
export const ImageProduct = styled.img`
  transform: translateY(0);
  transition: opacity 0.5s ease, height 0.5s ease, transform 0.5s ease;
`

export const ButtonProduct = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const ButtonImage = styled.img`
  border-radius: 50%;
  transition: transform 0.5s ease;

  &:active {
    transform: scale(0.01);
  }
`

export const ChangeImageColor = styled.div`
  display: flex;
  gap: 20px;
`

export const ProductContentContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
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

export const NameOfProdyct = styled.h3`
  text-transform: uppercase;
`
