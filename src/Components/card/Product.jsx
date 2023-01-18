import React from 'react'
import styled from 'styled-components'

const Product = ({img, title, price}) => {

    const ProductCard = styled.section`
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        margin: 15px;
        width: 250px;
        height: 320px;
        background-color: white;
        box-shadow: 0 0 10px #0000006f;
    `
    const Banner = styled.img`
        width: 100px;
    `
    const Title = styled.p`
        margin: 0;
        font-family: sans-serif;
        max-width: 240px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    `
    const Price = styled.p`
        margin: 5px;
        font-family: sans-serif;
        font-weight: bold;
    `
    const Div = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
    `

    return (
        <ProductCard>
            <Banner alt={title} src={img}/>
            <Div>
                <Title>{title}</Title>
                <Price>R${price}</Price>
            </Div>
        </ProductCard>
    )
}

export default Product