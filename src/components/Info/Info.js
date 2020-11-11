import React from 'react';

import { UppercaseDescription, Padding } from '../../styles/globalStyles'
import { InfoContainer } from '../../styles/componentStyles'

const Info = (props) => {

    return(
        <Padding>
            <InfoContainer>
                <UppercaseDescription>{props.title}</UppercaseDescription>
                <p>{props.description}</p>
            </InfoContainer>
            
        </Padding>
    )
}

export default Info

