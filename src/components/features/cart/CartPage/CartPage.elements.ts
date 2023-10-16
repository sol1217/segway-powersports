import Link from 'next/link'
import styled from 'styled-components'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsScooter } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import { VscEmptyWindow } from 'react-icons/vsc'

export const CartPageContainer = styled.div`
  margin-top: 100px;
  background-color: #f3f1f1;
  padding: 0 20px 40px 20px;
  color: black;
  gap: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 60px;
  margin-top: 20px;
`

export const PaymentContainer = styled.div`
  display: flex;
  padding: 10px;
  gap: 30px;
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
  user-select: none;
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
  font-size: 18px;

  &:hover {
    border-bottom: 1px solid rgba(169, 169, 169, 0.46);
  }

  &:active {
    color: #fc0004;
  }
`

export const NoteDeliveryContainer = styled.div`
  border: 1px solid rgba(195, 234, 215, 0.84);
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  width: 100%;
  background-color: rgba(223, 248, 237, 0.4);
`

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
`

export const ItemInformationCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  gap: 7px;

  @media (min-width: 1800px) {
    width: 1200px;
  }
`

export const DeliveryNoteContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const AllItemsContainer = styled.div`
  background-color: white;
  width: 100%;
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
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 10px 20px;
  background-color: white;
  gap: 5px;
  width: 100%;
`

export const IconoSegway = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(169, 169, 169, 0.47);
`

export const ViewItemContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InformationItemContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  width: 100%;
`

export const ProductQuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
`

export const QuantityContainer = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(169, 169, 169, 0.45);
  display: flex;
  width: 100px;
  height: 36px;
  justify-content: center;
  align-items: center;
`

export const DeleteItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

export const IncreaseButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  background-color: transparent;
  border-left: 1px solid rgba(169, 169, 169, 0.45);
  border-right: none;
  border-bottom: none;
  border-top: none;
  cursor: pointer;
`

export const DecreaseButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  background-color: transparent;
  border-right: 1px solid rgba(169, 169, 169, 0.45);
  border-left: none;
  border-bottom: none;
  border-top: none;
  cursor: pointer;
`

export const CountItem = styled.h3`
  width: 100%;
  text-align: center;
`

export const DeleteButton = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const IconoLocation = styled(GrLocation)`
  font-size: 25px;
`

export const IconoScooter = styled(BsScooter)`
  font-size: 28px;
`

export const IconoDelete = styled(RiDeleteBinLine)`
  font-size: 21px;
`

export const IconoDelivery = styled(TbTruckDelivery)`
  font-size: 25px;
`

export const IconoNext = styled(MdOutlineNavigateNext)`
  font-size: 30px;
`

export const IconoAdd = styled(VscEmptyWindow)`
  font-size: 20px;
`

export const EmptyCarContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
`

export const BackProductText = styled(Link)`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const BackProductsButton = styled.button`
  padding: 15px;
  width: 250px;
  background-color: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
`

export const PaymentCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  background-color: white;
  height: 250px;
  width: 100%;
  padding: 20px;
`

export const TotalPriceItem = styled.h2`
  text-align: right;
`

export const TextTotalItem = styled.p`
  text-align: right;
`

export const PaymentButton = styled.button`
  border: none;
  background-color: black;
  width: 90%;
  height: 100px;
  font-size: 20px;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  &.disabled-button {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.6;
  }
`

export const SelectColor = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 80px);
  gap: 5px;
`

export const ColorAvailable = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const TitleColorsAvailable = styled.h4`
  color: brown;
`

export const TarjetContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

export const TarjetIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
