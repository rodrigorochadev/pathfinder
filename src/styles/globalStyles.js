import styled, { css } from "styled-components"
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const Padding = styled.div`
    margin: 100px 0;
`

export const SectionImageContainer = styled.div`

    @media ${theme.media.small} {
        margin: 200px 0;
    }
`

export const SectionTitle = styled.div`
    margin-bottom: 120px;

    h1 {
        margin-bottom: 5px;
    }

    @media ${theme.media.small} {
        text-align: center;
        margin-bottom: 100px;
    }
`

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 10vw;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    padding: 0 32px;
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
`
export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
`

// export const Section = styled.div`
//     background-color: #ddd;
//     border-radius: 20px;
//     padding: -10px;
// `

export const UppercaseDescription = styled.div`
    text-transform: uppercase;
    font-weight: bold;
`

export const Separator = styled.div`
    margin-bottom: 40px;
`

export const CardsFlex = styled.div`
    display: flex;
    flex-direction: column;

    @media ${theme.media.small} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 100px;
    }
`

export const NonStyledButton = styled.div`

    button {
        border: none;
        padding: 0;
        background: transparent;
        transition: none !important; 
        transform: none !important;
    }
`

export const Button = styled.div`
    button {
        padding: 15px 25px;
        border: 2px solid ${theme.colors.accent};
        /* border-radius: 10px; */
        background: ${theme.colors.background};
        color: ${theme.colors.primary};
        font-size: 1.1rem;
        transition: ${theme.transitions.default};
        font-weight: bold;
        z-index: 10;
        
        &:hover {
            cursor: pointer;
            background: ${theme.colors.accent};
            color: white;
            /* transform: scale(1.1); */
        }
    }
`

// Images

export const ImageFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;

    @media ${theme.media.small} {
        justify-content: center;
        
    }
`

export const SectionImage = styled.div`

    
    height: auto;
    width: 250px;

    @media ${theme.media.small} {
        width: 300px;
    }

    @media ${theme.media.medium} {
        width: 400px;
    }
`

const styles = () => `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::-moz-selection { /* Code for Firefox */
            color: ${theme.colors.primary};
            background: ${theme.colors.accent};
        }
        
        ::selection {
            color: ${theme.colors.primary};
            background: ${theme.colors.accent};
        }
    }
    
    h1, h2, h3, h4, h5 {
        color: ${theme.colors.primary};
        font-family: ${theme.fontFamilies.headings};
    }

    html, body {
        overflow-x: hidden;
    }

    body {
        color: ${theme.colors.secondary};
        font-size: ${theme.fontSizes.base};
        font-family: ${theme.fontFamilies.regular};
        background: ${theme.colors.background};

        @media ${theme.media.small} {
            font-size: ${theme.fontSizes.base};
        }

        @media ${theme.media.medium} {
            font-size: ${theme.fontSizes.medium};
        }

        @media ${theme.media.large} {
            font-size: ${theme.fontSizes.large};
        }

        @media ${theme.media.xlarge} {
            font-size: ${theme.fontSizes.xlarge};
        }

        @media ${theme.media.xxlarge} {
            font-size: ${theme.fontSizes.xxlarge};
        }
    }
`
    

export const GlobalStyle = createGlobalStyle`
    ${styles()}
`;