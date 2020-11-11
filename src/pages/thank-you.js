import { Link } from "gatsby"
import React from "react"

import SEO from "../components/seo"

import { Logo } from '../assets/svg/social'
import { Container } from '../styles/globalStyles'
import { Container404 } from '../styles/componentStyles'

const ThankYouPage = () => (
  <>
    <SEO title="Thank you" />
    <Container>
        <Container404>
        <Logo />
        <p>Thank you for your contact. We'll get back to you as soon as possible.</p>
        <Link to="/">Back to the homepage.</Link>
        </Container404>
    </Container>
  </>
)

export default ThankYouPage