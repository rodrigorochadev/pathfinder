import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./header"

import { GlobalStyle } from "../styles/globalStyles"
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'



const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div style={{padding: '0 10vw'}}>
          <Header />
        </div>
        
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
