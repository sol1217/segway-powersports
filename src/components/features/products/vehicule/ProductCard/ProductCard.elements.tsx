import Link from 'next/link'
import styled from 'styled-components'

export const VehiculeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 5px #d3c8c8;

  @media (max-width: 440px) {
    width: 100%;
  }
`

export const ImageProduct = styled.img`
  transform: translateY(0);
  transition: opacity 0.5s ease, height 0.5s ease, transform 0.5s ease;

  @media (max-width: 780px) {
    width: 100%;
  }

  @media (max-width: 530px) {
    width: 70%;
  }

  @media (max-width: 430px) {
    width: 90%;
  }
`

export const ColorsContainer = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const ColorImage = styled.img`
  border-radius: 50%;
  transition: transform 0.5s ease;

  &:active {
    transform: scale(0.01);
  }
`

export const ChangeColorContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const DescriptionContainer = styled.p`
  text-transform: uppercase;

  @media (max-width: 650px) {
    display: none;
  }

  @media (max-width: 530px) {
    display: block;
  }
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

export const SeeInformationButton = styled(Link)`
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
