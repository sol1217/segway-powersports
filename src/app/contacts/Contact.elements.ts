import styled from 'styled-components'

/*message*/

export const MainWrap = styled.div`
  margin-top: 120px;
  height: 700px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1150px) {
    height: 100vh;
  }
`

export const ContactWrap = styled.div`
  display: flex;
  position: absolute;
  left: 20%;
  top: 160px;

  @media (max-width: 1150px) {
    flex-direction: column;
    top: 100px;
    left: 30%;
  }

  @media (max-width: 1150px) {
    height: 500px;
  }

  @media (max-width: 550px) {
    width: 270px;
    left: 20%;
  }
`

export const MessageContactWrap = styled.div`
  background-color: white;
  color: black;
`

export const ImageContact = styled.img`
  width: 90%;
  border: rgba(218, 41, 28, 0.41) solid;
  height: 280px;
`

export const ContactInput = styled.input`
  border: none;
  border-bottom: 2px solid rgba(169, 169, 169, 0.71);
  height: 40px;
  font-size: 15px;
`

export const MessageText = styled.textarea`
  border: none;
  border-bottom: 2px solid rgba(169, 169, 169, 0.71);
  color: rgba(169, 169, 169, 0.49);
  height: 40px;
`

export const EnviarButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #c51d1d;
  max-width: 130px;
  min-width: 100px;
  width: 10vw;
  height: 38px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
  text-align: center;
  align-self: flex-end;
`

export const FormContactWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 40vw;
  gap: 20px;
  padding: 20px;

  @media (max-width: 550px) {
    width: 270px;
  }
`

/*contact info*/

export const InfoMainWrap = styled.div`
  width: 25vw;
  padding: 20px;
  background-color: #16242a;
  padding: 10px;

  @media (max-width: 1150px) {
    width: 45vw;
  }

  @media (max-width: 550px) {
    width: 270px;
    padding: 5px;
  }
`

export const InfoSpan = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: inherit;
`
export const SocialMedias = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const SocialMediasWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 10px;
  position: relative;

  @media (max-width: 1150px) {
    justify-content: center;
  }
`

export const IconMotorcicle = styled.img`
  position: absolute;
  left: 40px;
  top: 30px;
  transform: rotate(10deg);
  opacity: 20%;

  @media (max-width: 1150px) {
    display: none;
  }

  @media (min-width: 2500px) {
    left: 280px;
    top: -80px;
    width: 300px;
    height: 300px;
  }
`
