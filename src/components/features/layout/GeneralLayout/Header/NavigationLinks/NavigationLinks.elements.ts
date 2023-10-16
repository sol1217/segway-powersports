import Link from 'next/link'
import styled from 'styled-components'

export const CountContainer = styled.div`
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 20px;
  padding: 10px;
  position: absolute;
  left: 24px;
  top: -10px;
  font-size: 16px;
  background-color: darkred;

  @media (max-width: 800px) {
    position: static;
    left: auto;
    top: auto;
    color: white;
  }
`

export const CartLinkContainer = styled(Link)`
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 2px;
  }
`
