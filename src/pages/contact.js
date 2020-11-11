import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import contactImg from '../assets/svg/contact.svg'

import { navigate } from "gatsby"
import { Button, Container } from "../styles/globalStyles"

import { BannerContainer, BannerImage, BannerText, FullBanner, Form } from "../styles/componentStyles"

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  

const Contact = () => {

    const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

    return(
        <Layout>
            <SEO title="Contact" />
            <Container>
                <FullBanner>
                    <BannerContainer>
                        <div style={{marginTop: '-50px'}}>
                            <BannerText>
                                <h1>Contact Us</h1>
                                <p>Fill in the form bellow and we will get back to you as soon as possible.</p>
                            </BannerText>
                        </div>
                        
                        <div style={{marginBottom: '50px'}}>
                            <Form >
                                <form
                                name="E-mails"
                                method="post"
                                action="/thank-you/"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="form-name" value="E-mails" />
                                <p hidden>
                                <label htmlFor="bot-field">
                                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                                </label>
                                </p>
                                <label htmlFor="name">
                                    Name <span className="req"> *</span>
                                    <br />
                                    <input id="name" type="text" name="name" onChange={handleChange} required/>
                                </label>
                                <label htmlFor="email">
                                    Email <span className="req"> *</span>
                                    <br />
                                    <input id="email" type="email" name="email" onChange={handleChange} required/>
                                </label>
                                <label htmlFor="msg">
                                    Message <span className="req"> *</span>
                                    <br />
                                    <textarea id="msg" name="message" onChange={handleChange} required/>
                                </label>
                                <Button>
                                    <button  type="submit">Submit »</button>
                                </Button>            
                                
                                </form>
                            </Form>
                        </div>
                    </BannerContainer>
                    <div style={{marginBottom: '50px'}}></div>
                </FullBanner>
                <BannerImage >
                    <img src={contactImg} alt="Banner" />
                </BannerImage> 
            </Container>
        </Layout>
    )
}

export default Contact