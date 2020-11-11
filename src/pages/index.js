import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Services/services"

import { Container, Padding, UppercaseDescription } from "../styles/globalStyles"
import Banner from '../components/Banner/Banner'

import Metodology from "../components/Metodology/Metodology"
import Portfolio from "../components/Portfolio/Porfolio"
import SectionWithImage from "../components/SectionWithImage/SectionWithImage"
import { ClientRelationship } from "../styles/componentStyles"


const IndexPage = (props) => {

  return(
  <Layout>
    <SEO title="Welcome" />
    <Container>
      <Banner />
      

      <Padding>
        <Services />
      </Padding>

      <ClientRelationship>
          <UppercaseDescription>Relationship with our clients</UppercaseDescription>
          <p>We take our time to work directly with you. Understanding your business needs is very important for us to give you our best work.</p>
      </ClientRelationship>

      <Padding>
        <SectionWithImage 
          title="High performance"  
          description="When a customer goes to a restaurant, slow service leads to impantience, frustration and poor reviews. Poor reviews, means less people eat at that restaurant, which is equivalent as less revenue. Similarly, slow websites result is poor search engine rankings, negative user experience and worst case scenario not seeing the website. A slow website is like a slow serving restaurant, eventually, customers will stop visiting."
          image="growth"
          alt="Growth"
        />
      </Padding>

      <Padding>
        <Metodology />
      </Padding>
        
      <Padding>
        <SectionWithImage 
          title="Site Analytics"
          description="We provide you with analytics of your website. This is important because you get to know your visitors, leading to better user experience. Analyzing your website data, can be used to remove unnecessary features, know the demographic of your audience, trafic directed to your website, amongst other things."
          image="analytics"
          alt="Analytics"
        />
      </Padding>
      
      <Padding>
        <Portfolio />
      </Padding>
      
    </Container>
    
    
  </Layout>)
}

export default IndexPage
