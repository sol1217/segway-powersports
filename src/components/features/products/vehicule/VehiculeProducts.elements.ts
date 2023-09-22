import styled from 'styled-components'

export const ProductVehiculeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 30px;
  justify-content: center;
  align-content: center;
  transition: transform 0.5s ease;
  width: 100%;
  padding: 30px;

  @media (max-width: 1270px) {
    grid-template-columns: repeat(2, 400px);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 350px);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media (max-width: 530px) {
    grid-template-columns: repeat(1, 90%);
  }
`
