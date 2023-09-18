import { ReactNode, CSSProperties } from 'react'
import { RuleSet } from 'styled-components'

import { LoaderSize } from '@core/Loader/Loader.types'
import { IProductImage } from '@features/products/vehicule/types'

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
  completeDesciprtion?: string
  video?: string
  features?: string[]
  panorama?: string
  featuresImage?: FeaturesProduct[]
  logo?: string
  model?: string
  galleryImages?: GalleryImages[]
}

export interface FeaturesProduct {
  titleFeatures: string
  featuresDescription: string
  src: string
}

export interface GalleryImages {
  src: string
  width?: number
  height?: number
}

export enum ProductEnum {
  SCOOTER_BAG = 'scooter-bag',
  NINEBOT_CASCO = 'ninebot-casco',
  NINEBOT_PHONE_HOLDER = 'phone-holder',
  SCOOTER_STORAGE_BAG = 'storage-bag',
  NINEBOT_PROTECTIVE_GEAR_SET = 'gear-set',
  NINEBOT_BAG = 'ninebot-bag',
}
