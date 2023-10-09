import styled from 'styled-components'
import { AiTwotoneDelete } from 'react-icons/ai'

export const CartPageContainer = styled.div`
  margin-top: 100px;
  background-color: #f3f1f1;
  color: black;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const TitleCart = styled.h1`
  border-bottom: 1px solid darkgrey;
  width: 600px;
  margin-left: 180px;
  padding: 20px;
  color: darkred;
`

export const NameProductCart = styled.h2`
  color: darkred;
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 60px;
`

export const PaymentContainer = styled.div`
  display: flex;
  padding: 10px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const DeliveryLocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 5px;
  height: 50px;
  margin: 0;
  background: #fff;
  border-radius: 23px;
  color: #666;
`

export const SecurePaymentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  color: #fc0004;
`

export const KeepShoppingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
`

export const NoteDeliveryContainer = styled.div`
  border: 1px solid rgba(195, 234, 215, 0.84);
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  width: 80%;
  background-color: rgba(223, 248, 237, 0.4);
`

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  border: 1px solid;
`
export const DeliveryNoteContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const AllItemsContainer = styled.div`
  background-color: white;
  width: 80%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  font-size: 20px;
`

export const ItemText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ChangeItemContainer = styled.div`
  background-color: #fff6f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 80%;
`

export const ChangeButton = styled.button`
  border-color: #000;
  background-color: #000;
  color: white;
  width: 90px;
  line-height: 28px;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`

export const ProductCartContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  width: 80%;
`

export const IconoSegway = styled.div`
  display: flex;
  align-items: center;
`

export const ViewItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid;
`

export const InformationItemContainer = styled.div`
  border: 1px solid;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  width: 70%;
`

export const ProductQuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  border: 1px solid;
  width: 60%;
  max-width: 600px;
`

export const QuantityContainer = styled.div`
  border-radius: 20px;
  border: 1px solid darkgray;
  display: flex;
  width: 110px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const IncreaseButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  background-color: transparent;
  border: none;
`

export const DecreaseButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  border: none;
  background-color: transparent;
`

export const CountItem = styled.h3`
  width: 100%;
  text-align: center;
`

export const DeleteButton = styled.div`
  border: none;
  background-color: transparent;
`

export const ProductOrderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
  align-items: center;
`

export const ViewProductContainer = styled.div`
  border-bottom: 1px solid darkgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InformationProductCart = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  gap: 30px;
  padding: 20px;
  height: 200px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  padding: 20px;
  margin-bottom: 15px;

  &:hover {
    color: darkred;
  }
`

export const ProductButton = styled.div`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  transition: all 0.2s;
  transform-origin: 50% 50%;
  user-select: none;
  border: 1px solid;

  &:hover {
    cursor: pointer;
    color: #8f14da;
    transform: scale(1.3);
  }
`

export const ProductCount = styled.div`
  font-size: 20px;
  font-weight: 500;
  width: 40px;
  text-align: center;
`

export const RemoveIcon = styled(AiTwotoneDelete)`
  font-size: 30px;

  &:hover {
    color: darkred;
  }
`

export const AddQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  width: 320px;
  padding: 20px;
  background-color: white;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

export const TitleNotes = styled.h2`
  color: darkred;
`

export const SubtotalName = styled.h2`
  color: darkred;
`

export const NotesInput = styled.textarea`
  width: 280px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
`

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`

export const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextTaxes = styled.h5`
  color: darkgrey;
`

export const CheckoutButton = styled.button`
  background: linear-gradient(darkred, saddlebrown, rosybrown);
  height: 55px;
  width: 170px;
  border: none;
  font-size: 22px;
  border-radius: 25px;
  color: white;
`
