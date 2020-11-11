import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import bannerImg from '../../assets/svg/banner.svg'

import { Button } from '../../styles/globalStyles'
import { FullBanner, BannerContainer, BannerText, BannerImage } from '../../styles/componentStyles'

const Banner = () => {


    return(
        <>
            <FullBanner >
                <BannerContainer>
                    <BannerText>
                        <h1>Allow us to give you, your dream website.</h1>
                        <p>Make your business grow with a better online presence. We provide you with what you need with a great perfomance.</p>
                    </BannerText>
                    <Button>
                        <button onClick={() => scrollTo('#services')}>Learn More</button>
                    </Button>
                </BannerContainer>
            </FullBanner>
            <BannerImage >
                <img src={bannerImg} alt="Banner" />
            </BannerImage> 
        </>
    )
}

export default Banner
