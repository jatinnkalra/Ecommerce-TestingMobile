import styled from "styled-components";
import Product from './Product.jsx'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function TrendingProducts(props) {
    const navigate = useNavigate()
    const [trendingProducts, setTrendingProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=5')
            .then((res) => res.json())
            .then((data) => {
                setTrendingProducts(data.products)
                console.log(data.products)
            })
    }, [])
    return (
        <CONTAINER>
            <h2>TRENDING PRODUCTS</h2>
            <div className="trendingproductscont">
                {
                    trendingProducts.map((product) => {
                        return <Product key={product.id} name={product.title} bgColor="rgba(247, 242, 242, 1)" price={product.price} rating={product.rating} src={product.thumbnail} onClick={() => {
                            navigate(`/product-detail/${product.id}`)
                        }} cart={props.cart} setCart={props.setCart} id={product.id} quantity={1} />
                    })
                }
            </div>
        </CONTAINER>
    )
}

const CONTAINER = styled.div`
width:100%;
padding: 20px 40px;
display:flex;
flex-direction:column;
gap:10px;

h2{
letter-spacing: 1px; 
font-size: 1.1rem;
}

.trendingproductscont{
display : grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
gap:15px;
}
@media (max-width:640px){
.trendingproductscont{
grid-template-columns: 1fr 1fr 1fr  ;
}
}


`


export default TrendingProducts