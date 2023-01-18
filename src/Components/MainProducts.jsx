import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Product from './card/Product'

const MainProducts = ({search}) => {

    const[products, setProducts] = useState([])
    const lowerSearch = search.toLowerCase()

    useEffect(()=>{
        axios.get('https://api.mercadolibre.com/sites/MLB/search?q=Inform%C3%A1tica')
        .then((res)=>setProducts(res.data.results))
    },[])

    const Main = styled.main`
        display: flex;
        align-items: center;
        flex-flow: row wrap;
        justify-content: center;
        padding: 10px;
    `

    return (
        <Main>
            {
                products.map(product =>{
                    if(product.title.toLowerCase().includes(lowerSearch)){
                        return(
                            <Product 
                            title={product.title}
                            price={product.price}
                            img={product.thumbnail}
                            />
                        )
                    }
                })
            }
        </Main>
    )
}

export default MainProducts