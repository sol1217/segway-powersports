'use client'

import { useState, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { ProductEnum } from '@types'

import { ProductPageContainer } from './ProductPage.elements'
import { ProductPageProps } from './ProductPage.types'

const BiciProduct = () => {
  return <div>Bici</div>
}

const MotoProduct = () => {
  return <div>Moto</div>
}

export const ProductPage = ({ productName }: ProductPageProps) => {
  const router = useRouter()

  const [component, setComponent] = useState<ReactNode | null>(null)

  useEffect(() => {
    const productsMap: Record<ProductEnum, ReactNode> = {
      bici: <BiciProduct />,
      moto: <MotoProduct />,
    }

    if (!Object.values(ProductEnum).includes(productName)) {
      router.push('/products')
    } else {
      setComponent(productsMap[productName])
    }
  }, [router, productName])

  return <ProductPageContainer>{component}</ProductPageContainer>
}
