import {theme} from './theme'
import styled, {css} from 'styled-components';

// Header
export const HeaderNav = styled.div`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
  background: ${theme.colors.background};
`

export const LogoContainer = styled.div`

    svg {
      width: 40px;
      height: 40px;
      fill: ${theme.colors.primary};
      transition: ${theme.transitions.default};

      &:hover {
        cursor: pointer;
        fill: ${theme.colors.accent};
      }
    }
  
`

// Banner
export const BannerContainer = styled.div`
    min-height: 100vh;
    padding-top: 35vh;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
`

export const BannerText = styled.div`
    margin-bottom: 30px;
`

export const FullBanner = styled.div`
    width: 100%;

    @media ${theme.media.small} {
        width: 50%;
    }

`

export const BannerImage = styled.div`
    display: none;

    @media ${theme.media.small} {
        margin-top: 20vh;
        position: absolute;
        top: 0;
        right: 0;
        height: 105vh;
        
        display: initial;
        width: 40%;
        z-index: 0;
        
        img {
            max-height: 100%;
            width: auto;
        }
    }

`

// Info
export const InfoContainer = styled.div`
    width: 100%;

    @media ${theme.media.medium} {
        width: 50%;
    }

    ${props =>
        props.left &&
        css`
        display: flex;
        justify-content: right;
    `};


`

export const ClientRelationship = styled.div`

    @media ${theme.media.small} {
        margin-top: 0px;
        margin-bottom: 250px;
        width: 50%;
    }
`
// Item Card

export const Card = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 70px;

    &::last-child {
        margin-bottom: 0;
    }

    @media ${theme.media.small} {
        width: 35%;
    }
`

export const CardId = styled.div`
    font-family: 'Merienda', cursive;
    position: absolute;
    top: -100px;
    right: 0%;
    font-weight: 700;
    font-size: 10rem;

    background: -webkit-linear-gradient(rgba(0,0,0,0.1) 0%, rgba(255, 255, 255, 1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${theme.media.small} {
        top: -50px;
    }
`

export const CardDescription = styled.div`
    margin-top: 10px;
`

// Footer

export const FooterContainer = styled.div`
    background: #111;
    color: ${theme.colors.white};
    padding: 30px 0;
`

export const FooterSection = styled.div`
    margin-bottom: 30px;

    h2 {
        margin-bottom: 10px;
    }
    
`

export const FooterCopyright = styled.div`
    text-align: center;

    /* @media ${theme.media.small} {
        text-align: center;
    } */
`

export const FooterBrand = styled.div`
    text-align: left;

    svg:hover {
        transition: ${theme.transitions.default};
        fill: ${theme.colors.accent};
        cursor: pointer;
    }
`

export const FooterSocial = styled.div`

    display: flex;
    flex-wrap: wrap;

    a {
        margin-right: 30px;
    

        svg:hover {
            transition: ${theme.transitions.default};
            fill: ${theme.colors.accent};
            cursor: pointer;
        }

        

        &:last-child {
            margin-right: 0px;
        }
    }

`

export const FooterContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 20px 0; 

    @media ${theme.media.small} {
        flex-direction: column;
    }

    /* h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    } */
`

// Pages - 404

export const Container404 = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  svg {
    width: 100px;
    height: 100px;
    fill: ${theme.colors.primary};
  }

  p, a{
    font-family: ${theme.fontFamilies.regular};
    color: ${theme.colors.secondary};
  }
  
  p {
    font-size: 1.5rem;
  }
`

// Pages - Contact

export const Form = styled.div`

    label {
        font-family: ${theme.fontFamilies.regular};
        font-size: ${theme.fontSizes.base};
        text-transform: uppercase;
    }

    .req {
        color: red;
    }

    input, textarea {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        height: 30px;
        width: 100%;
        
        border: 1px solid rgba(0,0,0,0.5);
        margin-bottom: 20px;

        &:focus {
            border: 1px solid ${theme.colors.accent};
        }
    }

    textarea {
        height: 150px;
    }

    .send-button {
        padding: 1em 2em;
        border: 1px solid ${theme.colors.accent};
        background-color: ${theme.colors.accent};
        transition: 0.3s ease-in;

        &:hover {
            cursor: pointer;
            background-color: black;
            color: white;
            border: 1px solid black;

        }

        a {
            color: white;
            text-decoration: none;
        }
    }
`