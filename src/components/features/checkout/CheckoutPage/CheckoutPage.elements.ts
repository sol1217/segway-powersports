import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { AiTwotoneDelete } from 'react-icons/ai'
import { TbHomeCheck } from 'react-icons/tb'
import { TbTruckDelivery } from 'react-icons/tb'

export const CheckoutPageContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  background-color: white;
  color: black;

  @media (max-width: 1110px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;

  @media (min-width: 1700px) {
    align-items: center;
  }

  @media (max-width: 1110px) {
    justify-content: center;
    align-items: center;
  }
`

export const PaymentCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const PaymentImages = styled(Image)`
  @media (max-width: 1110px) {
    width: 90px;
    height: 50px;
  }
`

export const CardsContainer = styled(Link)<{ $background?: string }>`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MethodsName = styled.h2`
  text-align: center;
  margin-top: 40px;
`

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LineContainer = styled.span`
  border-bottom: 1px solid #b7b6b6;
  width: 33%;
`

export const IconHome = styled(TbHomeCheck)`
  font-size: 28px;
`

export const IconCar = styled(TbTruckDelivery)`
  font-size: 28px;
`

export const DeliveryMethodContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 1070px;

  @media (max-width: 1110px) {
    width: 86%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const CheckDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  height: 200px;
  border: 1px solid #c7c5c5;
  width: 100%;
`

export const MethodPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 23px;
  height: 100%;
  padding: 20px;
  border-bottom: 1px solid #c7c5c5;

  &:nth-child(3) {
    border-bottom: none;
  }
`

export const TypeTripContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 23px;
  height: 100%;
  padding: 20px;

  &:first-child {
    border-bottom: 1px solid #c7c5c5;
  }
`

export const DataDeliveryContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 80%;

  @media (min-width: 1750px) {
    align-items: center;
  }
`

export const DataDelivery = styled.input`
  height: 50px;
  max-width: 570px;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  font-weight: bold;
  border: 3px solid darkred;
  background-color: transparent;

  &::placeholder {
    color: darkred;
    font-weight: bold;
  }
`

export const SelectPyamentDelivery = styled.select`
  height: 50px;
  max-width: 570px;
  width: 100%;
  border-radius: 15px;
  padding-left: 20px;
  font-weight: bold;
  border: 3px solid darkred;
  background-color: transparent;
  color: darkred;
`

export const NameClientContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  max-width: 570px;
  width: 100%;
`

export const NameClient = styled.input`
  height: 50px;
  width: 280px;
  padding: 20px;
  border-radius: 15px;
  font-weight: bold;
  border: 3px solid darkred;
  background-color: transparent;

  &::placeholder {
    color: darkred;
    font-weight: bold;
  }
`

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const LocationContainer = styled.select`
  height: 55px;
  width: 120px;
  border-radius: 15px;
  font-weight: bold;
  border: 3px solid darkred;
  background-color: transparent;
  padding: 10px;
  color: darkred;
  font-weight: bold;
`

export const SubmitButton = styled.input`
  border: none;
  color: white;
  font-weight: bold;
  height: 55px;
  width: 150px;
  font-size: 17px;
  border-radius: 15px;
  background-color: black;
  cursor: pointer;
`

export const DeliverText = styled.p`
  color: #777474;
`

export const ColorProductContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`

export const SendMessageButton = styled.button`
  border: none;
  height: 46px;
  width: 120px;
  color: white;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(darkred, saddlebrown, rosybrown);
  padding: 10px;
  cursor: pointer;
  gap: 5px;
`

export const LocationDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  margin-left: 30px;

  @media (min-width: 1700px) {
    align-items: center;
  }
`

export const ProductTotalContainer = styled.div`
  border-left: 1px solid #c4c2c2;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  width: 50%;

  @media (min-width: 2600px) {
    align-items: center;
  }

  @media (max-width: 1110px) {
    border: none;
    width: 85%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const ProductToBuy = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`

export const ProductInformationWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  gap: 10px;
  width: 320px;
`

export const ProductToBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 2600px) {
    width: 800px;
  }
`

export const CountProduct = styled.h4`
  position: absolute;
  left: 70px;
  top: -10px;
  border-radius: 50%;
  background-color: rgba(59, 58, 58, 0.57);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
`

export const ImageProduct = styled.img`
  border: 1px solid rgba(169, 169, 169, 0.48);
  border-radius: 10px;
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

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 10px;
  background-color: rgba(223, 248, 237, 0.4);
  border: 1px solid rgba(195, 234, 215, 0.84);

  @media (min-width: 2600px) {
    width: 800px;
  }
`

export const CardTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: space-evenly;
    font-size: 14px;
    flex-direction: column;
    &:nth-child(2) {
      display: none;
    }
  }
`

export const CompletePayment = styled.h3`
  text-align: center;
  color: #db281c;
`
