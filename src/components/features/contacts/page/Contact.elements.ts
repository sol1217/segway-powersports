import styled from 'styled-components'

/*message*/

export const ContactMainContainer = styled.div`
  margin-top: 120px;
  height: 700px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1260px) {
    height: 100vh;
  }
`

export const InformationContact = styled.h3`
  @media (max-width: 445px) {
    font-size: ;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  height: 700px;
  width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1260px) {
    flex-direction: column;
    top: 50%;
  }

  @media (max-width: 550px) {
    width: 270px;
  }
`

export const FormSectionContainer = styled.div`
  background-color: white;
  color: black;
  display: flex;
  width: 900px;
  max-width: 1100px;
  height: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0 0 20px;

  @media (max-width: 1260px) {
    width: 500px;
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 570px) {
    width: 80vw;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  gap: 20px;
  padding: 20px;
  font-size: 25px;

  @media (max-width: 1260px) {
    border-radius: 0 0 20px 20px;
  }
`

export const ContactInput = styled.input`
  border: none;
  border-bottom: 2px solid rgba(169, 169, 169, 0.71);
  height: 40px;
  font-size: 15px;

  &:focus {
    outline: none;
    border-bottom: 3px solid rgba(139, 0, 0, 0.7);
  }

  &:hover::placeholder {
    color: #c51d1d;
    font-weight: bold;
  }
`

export const MessageText = styled.textarea`
  border: none;
  border-bottom: 2px solid rgba(169, 169, 169, 0.71);
  height: 40px;
  font-family: Arial;
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 3px solid rgba(139, 0, 0, 0.7);
    color: black;
  }

  &:hover::placeholder {
    color: #c51d1d;
    font-weight: bold;
  }
`

export const SendMessage = styled.h2`
  @media (max-width: 460px) {
    font-size: 30px;
  }
`

export const SendButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #c51d1d;
  max-width: 127px;
  min-width: 118px;
  width: 10vw;
  height: 38px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
  text-align: center;
  align-self: flex-end;
  cursor: pointer;
  text-transform: uppercase;
`

/*contact info*/

export const InfoMainWrap = styled.div`
  padding: 20px;
  background-color: #16242a;
  font-size: 25px;
  border-radius: 0 20px 20px 0;
  width: 60%;
  height: 80%;

  @media (max-width: 1260px) {
    width: 500px;
    border-radius: 0 0 20px 20px;
  }

  @media (max-width: 570px) {
    width: 80vw;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`

export const InfoSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin: 10px;

  @media (max-width: 430px) {
    font-size: 20px;
  }
`

export const SocialMediasWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px auto;

  position: relative;

  @media (max-width: 1150px) {
    justify-content: center;
  }
`

export const SocialMedias = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const IconMotorcicle = styled.img`
  position: absolute;
  left: 90px;
  top: 80px;
  transform: rotate(10deg);
  opacity: 20%;
  width: 300px;

  @media (max-width: 1260px) {
    display: none;
  }
`
