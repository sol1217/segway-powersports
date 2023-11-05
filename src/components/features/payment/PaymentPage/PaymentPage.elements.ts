import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const PaymentPageContainer = styled.div`
  margin-top: 80px;
  background-color: #f3f1f1;
  color: black;
  padding: 20px;

  @media (min-width: 1800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const SecurePaymentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  color: #fc0004;
  padding: 20px;
`

export const PaymentContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const DetailsPaymentContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  background-color: white;
  width: 60%;

  @media (min-width: 1800px) {
    width: 900px;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const TransferContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1800px) {
    width: 880px;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 630px) {
    text-align: center;
  }
`

export const CashContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 1800px) {
    width: 550px;
  }
`

export const CashText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 630px) {
    justify-content: center;
  }
`

export const TransferDataContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 20px;
`

export const TransferText = styled.h2`
  @media (max-width: 1200px) {
  }

  @media (max-width: 630px) {
    text-align: center;
  }
`

export const DataTransfer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(169, 169, 169, 0.44);
  border-radius: 20px;
  padding: 10px;
  background-color: whitesmoke;
  box-shadow: 0 1px 3px 1px red;

  @media (min-width: 1800px) {
    width: 500px;
  }

  @media (max-width: 1200px) {
    width: 600px;
  }

  @media (max-width: 680px) {
    width: 90%;
    border: 1px solid;
  }

  @media (max-width: 500px) {
    width: 100%;

    &:last-child {
      flex-direction: column;
      gap: 10px;
    }
  }
`
export const CashButton = styled.div`
  border: none;
  background-color: transparent;
`

export const NoteDeliveryContainer = styled.div`
  padding: 20px;
  width: 75%;
  color: #198055;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: rgba(223, 248, 237, 0.4);
  border: 1px solid rgba(195, 234, 215, 0.84);

  @media (min-width: 1800px) {
    text-align: center;
    width: 40rem;
  }

  @media (max-width: 880px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`

export const LocationWaze = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: brown;
`

export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #fff6f3;
  padding: 10px;

  @media (min-width: 2600px) {
    width: 800px;
  }

  @media (max-width: 1200px) {
    width: 50rem;
  }

  @media (max-width: 880px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    font-size: 13px;
  }
`

export const CommentText = styled.p`
  width: 250px;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  background-color: transparent;
`

export const ChangeButton = styled.button`
  height: 45px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`

export const PaymentCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px;
  border-radius: 10px;

  @media (max-width: 580px) {
  }
`

export const PaymentImages = styled(Image)`
  background-color: rgba(176, 196, 222, 0.25);
  padding: 3px;

  @media (max-width: 1110px) {
    width: 90px;
    height: 50px;
  }
`

export const PaymentInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`

export const ChooseMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`

export const SendPaymentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
`

export const SendPayment = styled(Link)`
  width: 35%;
  background-color: #d72a1c;
  padding: 10px;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 1550px) {
    font-size: 16px;
  }

  @media (max-width: 1350px) {
    font-size: 14px;
    width: 200px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
  }
`

export const WhatsappPayment = styled.img`
  @media (max-width: 450px) {
    display: none;
  }

  @media (max-width: 1500px) {
    width: 25px;
    height: 25px;
  }
`

export const ProofPaymentContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 525px) {
    text-align: center;
    font-size: 12px;
  }
`

export const InformationTranfers = styled.span`
  color: rgba(133, 131, 131, 0.73);

  @media (max-width: 800px) {
    display: none;
  }
`
