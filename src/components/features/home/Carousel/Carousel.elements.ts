import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 600px;
  width: 100%;

  @media (min-width: 1800px) {
    max-width: 70%;
  }

  @media (max-width: 900px) {
    height: 400px;
  }

  @media (max-width: 570px) {
    height: 300px;
  }

  @media (max-width: 400px) {
    height: 230px;
  }
`

export const CarouselItemContainer = styled.div`
  flex: 0 0 100%;
  transition: transform 0.3s ease-in-out;
`
export const CarouselNextButton = styled.button`
  position: absolute;
  right: 60px;
  top: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;

  @media (max-width: 570px) {
    right: 20px;
  }
`

export const CarouselPrevButton = styled.button`
  position: absolute;
  left: 60px;
  top: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;

  @media (max-width: 570px) {
    left: 20px;
  }
`
