import camo from '@assets/images/camuflado.webp'
import blue from '@assets/jpeg/azul.jpeg'
import gray from '@assets/png/gris.png'
import red from '@assets/png/rojo.png'
import green from '@assets/png/verde.jpeg'

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
}

export interface IProduct {
  images: IProductImage[]
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

export interface VProductImages {
  src: string
}

export interface GalleryImages {
  src: string
  width: number
}

export const colorImages = {
  [EColors.Greeen]: green.src,
  [EColors.Red]: red.src,
  [EColors.Blue]: blue.src,
  [EColors.Camouflaged]: camo.src,
  [EColors.Gray]: gray.src,
}
