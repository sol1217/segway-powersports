import { RootLayoutProps } from '@types'
import StyledComponentsRegistry from '@lib/registry'
import Footer from '@features/layout/GeneralLayout/Footer/Footer'
import Header from '@features/layout/GeneralLayout/Header/Header'

import '@styles/globals.css'

export const GeneralLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
