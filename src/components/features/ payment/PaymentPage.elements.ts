import Link from 'next/link'
import styled from 'styled-components'

export const PaymentPageContainer = styled.div`
  margin-top: 80px;
  background-color: #f3f1f1;
  color: black;
  padding: 20px;
`

export const SecurePaymentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  color: #fc0004;
  width: 100%;
  padding: 20px;
`

export const PaymentContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const DetailsPaymentContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  width: 100%;
`

export const DetailsContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  gap: 30px;
`

export const DetailsInput = styled.input`
  height: 55px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(169, 169, 169, 0.47);
`

export const VoucherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`

export const VoucherLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const VoucherImage = styled.input`
  background-color: darkgray;
  height: 55px;
`

export const SendDetailsButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-size: 17px;
  padding: 20px;
  cursor: pointer;
`

export const TransferContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const CashContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 20px;
`

export const CashText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TransferDataContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 20px;
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
`
export const CashButton = styled.div`
  border: none;
  background-color: transparent;
`

export const NoteDeliveryContainer = styled.div`
  padding: 20px;
  width: 70%;
  color: #198055;
`

export const LocationWaze = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: brown;
`
