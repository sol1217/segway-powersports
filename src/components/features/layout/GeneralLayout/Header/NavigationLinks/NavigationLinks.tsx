import Link from 'next/link'

export const NavigationLinks = () => {
  return (
    <>
      <Link href="/">Inicio</Link>
      <Link href="/about">Sobre nosotros</Link>
      <Link href="/products">Productos</Link>
      <Link href="/contacts">Contactos</Link>
    </>
  )
}
