import blue from '@assets/jpeg/blue.jpeg'
import camo from '@assets/jpg/camouflaged.jpg'
import gray from '@assets/png/gray.png'
import green from '@assets/png/green.jpeg'
import red from '@assets/png/red.png'

export enum EColors {
  Greeen = 'green',
  Gray = 'Gray',
  Red = 'red',
  Blue = 'Blue',
  Camouflaged = 'camouflaged',
}

export interface IProductImage {
  url: string
  color: EColors
  width?: number
  height?: number
}

export interface IProduct {
  images: IProductImage[]
  imagesInfo?: IProductImage[]
  name: string
  description: string
  alias: string
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

export const colorImages = {
  [EColors.Greeen]: green.src,
  [EColors.Red]: red.src,
  [EColors.Blue]: blue.src,
  [EColors.Camouflaged]: camo.src,
  [EColors.Gray]: gray.src,
}
