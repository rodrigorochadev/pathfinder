import React from "react"
import CardItem from "../Cards/cardItem"

import { graphql, useStaticQuery } from "gatsby";
import { SectionTitle, CardsFlex, Separator } from "../../styles/globalStyles"


const Metodology = () => {

    const data = useStaticQuery(graphql`
        query MetodologyQuery {
            allMarkdownRemark(
                sort: {fields: frontmatter___id}
                filter: {frontmatter: {type: {eq: "metodology"}}}) {
                edges {
                    node {
                        frontmatter {
                            description
                            id
                            title
                            image {
                                childImageSharp {
                                    fixed(width: 200) {
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
        <>
            <SectionTitle>
                <h1>How we work</h1>
                <p>Every project is different, but somethings always remain the same.</p>
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
        </>
    )
}

export default Metodology