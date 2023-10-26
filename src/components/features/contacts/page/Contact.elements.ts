import styled from 'styled-components'

/*message*/

export const ContactMainContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  padding: 0 20px;
  background: url('https://powersports.segway.com/upload/images/2021/06/18/095fa489df9b4823b8ea7e296bc70ab2.jpg');
`

export const ContactContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  color: black;
  gap: 20px;
  font-size: 25px;
  flex: 1 1 0;
  padding: 10px 30px;

  @media screen and (max-width: 800px) {
    padding: 30px;
  }
`

export const ContactInput = styled.input`
  border: none;
  border-bottom: 2px solid rgba(169, 169, 169, 0.71);
  height: 40px;
  font-size: 15px;

  &:focus {
    outline: none;
  }

  &:hover::placeholder {
    color: #540808;
    font-weight: bold;
  }
`

export const MessageText = styled.textarea`
  border: none;
  border-bottom: 2px solid rgba(169, 169, 169, 0.71);
  height: 40px;
  font-family: Arial, serif;
  font-size: 16px;

  &:focus {
    outline: none;
    color: black;
  }

  &:hover::placeholder {
    color: #540808;
    font-weight: bold;
  }
`

export const SendMessage = styled.h2`
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 26px;
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

export const InfoSection = styled.div`
  padding: 30px 20px;
  background-color: #16242a;
  font-size: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const InfoName = styled.h3`
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 26px;
  }
`

export const InfoSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 10px;

  @media (max-width: 430px) {
    font-size: 20px;
  }
`

export const SocialMedias = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`

export const IconMotorcicle = styled.img`
  transform: rotate(10deg);
  opacity: 15%;
  width: 220px;
`
