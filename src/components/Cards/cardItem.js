import React from 'react'
import Img from 'gatsby-image'

import { Card, CardId, CardDescription } from '../../styles/componentStyles'

const CardItem = (props) => {

    return(
        <Card>
            <CardId>{props.id}</CardId>
            <Img fixed={props.image} alt={props.title}></Img>
            <div style={{marginTop: '10px'}}></div>
            <h2>{props.title}</h2>
            <CardDescription>{props.description}</CardDescription>
        </Card>
    )
}

export default CardItem