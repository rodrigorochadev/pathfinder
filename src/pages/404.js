import { Link } from "gatsby"
import React from "react"

import SEO from "../components/seo"

import { Logo } from '../assets/svg/social'
import { Container404 } from '../styles/componentStyles'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container404>
      <Logo />
      <p>Page Not Found</p>
      <Link to="/">Back to the homepage.</Link>
    </Container404>
  </>
)

export default NotFoundPage