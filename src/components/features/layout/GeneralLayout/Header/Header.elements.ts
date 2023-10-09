import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
`

export const TopHeaderSectionContainer = styled.div`
  height: 100px;
  background-color: #000;
  width: 100%;
  padding: 10px 30px;
`

export const TopHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  height: 100%;
`

export const DesctopNavigation = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & > a {
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      color: #d9281a;
    }

    &:active {
      cursor: pointer;
      color: #a81e11;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const ToggleButton = styled.div<{ $active: boolean }>`
  width: 30px;
  height: 30px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: '';
    background-color: #fff;
    height: 1px;
    width: 30px;
    position: absolute;
    transform-origin: 50% 50%;
    top: ${({ $active }) => ($active ? '50%' : 'calc(50% - 5px)')};
    transform: ${({ $active }) => ($active ? 'rotateZ(45deg)' : undefined)};
  }

  &:after {
    content: '';
    background-color: #fff;
    height: 1px;
    width: 30px;
    position: absolute;
    transform-origin: 50% 50%;
    bottom: ${({ $active }) => ($active ? 'calc(50% - 1px)' : 'calc(50% - 5px)')};
    transform: ${({ $active }) => ($active ? 'rotateZ(-45deg)' : undefined)};
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`

export const MobileMenuContainer = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  padding: 20px 30px;

  @media screen and (min-width: 800px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  align-items: center;
  gap: 10px;

  & > a {
    text-transform: uppercase;
    color: #222;
    width: 100%;
    text-align: center;
    user-select: none;

    &:hover {
      cursor: pointer;
      color: #d9281a;
    }

    &:active {
      cursor: pointer;
      color: #a81e11;
    }
  }
`
