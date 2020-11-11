import React from 'react'
import Img from 'gatsby-image'

import {SectionTitle, Separator, ImageFlex, SectionImage, SectionImageContainer} from '../../styles/globalStyles'
import { graphql, useStaticQuery } from 'gatsby'

const SectionWithImage = (props) => {

    const data = useStaticQuery(graphql`
        query {
            growth: file(relativePath: {eq: "growth.png"}) {
                childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    }  
                }
            }

            analytics: file(relativePath: {eq: "analytics.png"}) {
                childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                    }  
                }
            }
        }
    `);
    
    var img1;

    if(props.image === "analytics") {
        img1 = data.analytics.childImageSharp.fluid;
    } else {
        img1 = data.growth.childImageSharp.fluid;
    }

    return(
        <SectionImageContainer>
            <SectionTitle>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <Separator />  
            </SectionTitle>

            <ImageFlex >
                <SectionImage>
                    <Img fluid={img1} alt={props.alt} />                
                </SectionImage>
            </ImageFlex>
        </SectionImageContainer>
    )
}

export default SectionWithImage