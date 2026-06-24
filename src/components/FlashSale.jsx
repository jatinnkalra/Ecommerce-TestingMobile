import { useState, useEffect } from 'react';
import styles from './FlashSale.module.css'
import Product from './Product.jsx'
import { useNavigate } from 'react-router-dom';
function FlashSale(props) {
    const [flashSaleProducts, setFlashSaleProducts] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=100")
            .then((res) => res.json())
            .then((data) => {
                const flashSale = data.products
                    .sort((a, b) => b.discountPercentage - a.discountPercentage)
                    .slice(0, 4);
                setFlashSaleProducts(flashSale);
            });
    }, []);

    return (
        <section className={styles.flashsaleoutercont}>
            <div className={styles.flashsaleinnercont} >
                <div className={styles.flashsaleinnercontleft}>
                    <div className={styles.flashsaleinnercontlefttxtdiv}>
                        <h3>FLASH SALE</h3>
                        <p>Limited time offer, Grab it now!</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className={styles.flashsaleinnercontright}>
                    {flashSaleProducts.map((product) => (
                        <Product
                            key={product.id}
                            name={product.title}
                            price={product.price}
                            rating={product.rating}
                            // discount={product.discountPercentage}
                            src={product.thumbnail}
                            ctnclr="white"
                            onClick={() => {
                                navigate(`/product-detail/${product.id}`)
                            }}
                            cart={props.cart} setCart={props.setCart} id={product.id}
                            quantity = {1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FlashSale;