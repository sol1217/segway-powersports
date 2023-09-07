import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 600px;
  width: 100%;
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
`

export const CarouselPrevButton = styled.button`
  position: absolute;
  left: 60px;
  top: 50%;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
