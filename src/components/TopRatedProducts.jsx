import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TopRatedProducts.module.css'
import Product from './Product.jsx'

function TopRatedProducts(props) {
    const navigate = useNavigate()
    const [topRatedProducts, setTopRatedProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setTopRatedProducts(data.products)
            })
    }, [])

    return (
        <section className={styles.trendingproductsoutercont}>
            <h3>TOP RATED PRODUCTS</h3>
            <div className={styles.trendingproductsgridcont}>
                {
                    topRatedProducts
                        .filter((product) => product.rating > 4)
                        .slice(0, 8)
                        .map((product) => (
                            <Product
                                key={product.id}
                                name={product.title}
                                bgColor="rgba(247, 242, 242, 1)"
                                price={product.price}
                                rating={product.rating}
                                src={product.thumbnail}
                                onClick = {()=>{
                                    navigate(`/product-detail/${product.id}`)
                                }}
                                cart={props.cart} setCart = {props.setCart} id={product.id} quantity={1}
                            />
                        ))
                }
            </div>
        </section>
    );
}

export default TopRatedProducts