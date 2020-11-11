import React from "react"

import CardItem from '../Cards/cardItem'

import { graphql, useStaticQuery } from "gatsby";
import {SectionTitle, Separator, CardsFlex} from "../../styles/globalStyles";

const Services = () => {
    
    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allMarkdownRemark(
                sort: {fields: frontmatter___id}
                filter: {frontmatter: {type: {eq: "service"}}}) {
                edges {
                    node {
                        frontmatter {
                            description
                            id
                            title
                            image {
                                childImageSharp {
                                    fixed(width: 200, quality: 75) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return(
        <div id="services">
            <SectionTitle>
                <h1>What can we do for you?</h1>
                <p>Check out our list of services. Need anything else? Contact us and we try to give you what you need.</p>
                <Separator />
            </SectionTitle>
            
            <CardsFlex>
                {data.allMarkdownRemark.edges.map(
                    service => {
                        return(
                            <CardItem 
                                key={service.node.frontmatter.id} 
                                id={service.node.frontmatter.id} 
                                title={service.node.frontmatter.title} 
                                description={service.node.frontmatter.description} 
                                image={service.node.frontmatter.image.childImageSharp.fixed} 
                            />
                        )
                    }
                )}
            </CardsFlex>
            
        </div>
    )

}

export default Services


