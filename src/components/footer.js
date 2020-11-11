import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import { Container, NonStyledButton } from '../styles/globalStyles'
import { FooterContainer, FooterSection, FooterCopyright, FooterBrand, FooterSocial, FooterContent } from '../styles/componentStyles'

import { Instagram, Messenger, Facebook, Dribbble, Behance, Logo } from '../assets/svg/social'

const Footer = () => {

    const social = [
        {name: 'Instagram', comp: <Instagram />, url: 'https://instagram.com/pathfinderdesigns'},
        {name: 'Facebook', comp: <Facebook />, url: 'https://facebook.com/pathfinderdesigns'},
        {name: 'Messenger', comp: <Messenger />, url: 'https://m.me/pathfinderdesigns'},
        {name: 'Behance', comp: <Behance />, url: 'https://behance.net/rodrigo-rocha'},
        {name: 'Dribbble', comp: <Dribbble />, url: 'https://dribbble.com/rodrigorocha'},
    ]

    return(
        <FooterContainer id="footer">
        <Container>
            <FooterContent>
                <FooterSection>
                    <FooterBrand>
                        <NonStyledButton>
                            <button aria-label="pathfinder" onClick={() => scrollTo('#home')}>
                                <Logo style={{fill: "#fff"}}/>
                            </button>
                        </NonStyledButton>
                        
                    </FooterBrand>
                </FooterSection>

                <FooterSection>
                    
                    <FooterSocial>
                        {social.map(elem => {
                            return (
                                <a href={elem.url} rel="noreferrer" target="_blank" aria-label={elem.name}>
                                    {elem.comp}
                                </a>
                            )
                        })}
                    </FooterSocial>
                </FooterSection>
            
                
            </FooterContent>
            
            <FooterCopyright>
                Pathfinder Designs © {new Date().getFullYear()}
            </FooterCopyright>
        </Container>
        </FooterContainer>
        
    )
}

export default Footer
