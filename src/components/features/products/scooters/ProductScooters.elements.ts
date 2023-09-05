import styled from 'styled-components'

export const SecondProductSectionWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 25px;
  padding: 20px;
`

export const CarouselImage = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
`
