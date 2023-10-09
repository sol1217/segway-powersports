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
`

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
`

export const PaymentCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const CheckDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  height: 150px;
  border: 1px solid #c7c5c5;
`

export const TypeTripContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 23px;
  height: 100%;
  font-family: 'Roboto Thin';
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
`

export const DataDelivery = styled.input`
  height: 50px;
  width: 570px;
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

export const NameClientContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
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
  width: 270px;
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
  background: linear-gradient(darkred, saddlebrown, rosybrown);
  cursor: pointer;
`

export const DeliverText = styled.p`
  color: #777474;
`

export const LocationDeliverContainer = styled.select`
  height: 60px;
  width: 280px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: darkred;
  padding: 10px;
  font-weight: bold;
  border: 3px solid darkred;
  background-color: transparent;
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
  margin-right: 400px;
`

export const ProductTotalContainer = styled.div`
  border-left: 1px solid #c4c2c2;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
  width: 50%;
`

export const ProductToBuy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;
`

export const ProductToBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
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

export const ImageProduct = styled(Image)`
  background-color: rgba(87, 87, 87, 0.38);
  border: 1px solid;
  border-radius: 10px;
`

export const CommentText = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  background-color: transparent;
  color: #c5c2c2;
`

export const ChangeButton = styled.button`
  height: 45px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: 3px solid darkred;
  background-color: transparent;
  color: darkred;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const TotalContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`

export const CardTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
