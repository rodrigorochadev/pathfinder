import React from 'react'

import { Button, SectionTitle } from "../../styles/globalStyles"

const Portfolio = () => {

    return(
        <>
            <SectionTitle>
                <h1>Some of our projects</h1>
                <p>We are currently building this section. However you can take a look at our portfolio pages. Get inspired and let’s build something together!</p>
            </SectionTitle>
            
            <div style={{marginTop: '-50px', display: 'flex', justifyContent: 'space-around', columnGap: '30px'}}>
                <Button>
                    <a href="https://dribbble.com/rodrigorocha" aria-label="Dribbble Button" rel="noreferrer" target="_blank">
                        <button>Dribbble</button>
                    </a>
                </Button>
                <Button>
                    <a href="https://behance.net/rodrigo-rocha" aria-label="Behance Button" rel="noreferrer" target="_blank">
                        <button>Behance</button>
                    </a>
                </Button>
            </div>
        </>
    )
}

export default Portfolio
