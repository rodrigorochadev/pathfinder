import React from "react"
import { Link } from "gatsby"

import { Button, Container, Flex } from "../styles/globalStyles"
import { HeaderNav, LogoContainer } from '../styles/componentStyles'

import { Logo } from '../assets/svg/social'

const Header = () => {

  return(

      <HeaderNav id="home">
      <Container>
        <Flex spaceBetween noHeight>
        <LogoContainer>
            <Link to="/" aria-label="pathfinder designs">
              <Logo />
            </Link>
           </LogoContainer>
          <div>
            <Button>
              <Link to="/contact">
                <button>
                  Contact Us
                </button>
              </Link>
            </Button>
          </div>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
