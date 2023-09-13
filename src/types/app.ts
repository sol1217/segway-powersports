import { ReactNode, CSSProperties } from 'react'
import { RuleSet } from 'styled-components'

import { LoaderSize } from '@core/Loader/Loader.types'
import bagtwo from '@assets/images/SEGWAY VEHICULOS/accesorios/5_e6756e81-5439-49cf-b8f2-48983c773343.webp'

export type RootLayoutProps = {
  children: ReactNode
}

export type TextVariant = {
  fontFamily: CSSProperties['fontFamily']
  fontWeight: CSSProperties['fontWeight']
  fontSize: CSSProperties['fontSize']
  lineHeight: CSSProperties['lineHeight']
  letterSpacing: CSSProperties['letterSpacing']
  textTransform: CSSProperties['textTransform']
}

export type ButtonVariant = (disabled: boolean) => {
  styles: RuleSet
  loader?: {
    size?: LoaderSize
    color?: string
  }
  disabledLoader: {
    size?: LoaderSize
    color?: string
  }
}
export type ProductImage = {
  src: string
  width: number
  price: string
}

export type Product = {
  name: string
  alias: string
  images: ProductImage[]
  description?: ''
}

export enum ProductEnum {
  SCOOTER_BAG = 'scooter-bag',
  NINEBOT_CASCO = 'ninebot-casco',
  NINEBOT_PHONE_HOLDER = 'phone-holder',
  SCOOTER_STORAGE_BAG = 'storage-bag',
  NINEBOT_PROTECTIVE_GEAR_SET = 'gear-set',
  NINEBOT_BAG = 'ninebot-bag',
}
