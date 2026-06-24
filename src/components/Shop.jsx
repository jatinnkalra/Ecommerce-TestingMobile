import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Shop.module.css'
import Product from './Product';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'
function Shop(props) {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [currentCateogory, setCurrentCategory] = useState('')
    const allProductsurl = 'https://dummyjson.com/products'
    const categoryUrl = `https://dummyjson.com/products/category/${currentCateogory}`
    const navigate = useNavigate()

    useEffect(() => {
        if (currentCateogory === '') {
            fetch(allProductsurl)
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data.products)
                })
        } else {
            fetch(categoryUrl)
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data.products)
                })
        }
    }, [currentCateogory])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])
    return (
        <>
            <Navbar cart={props.cart} />
            <section className={styles.shopoutercont}>
                <aside className={styles.shopleftcont} >
                    <h2>Filters</h2>
                    <div className={styles.categoriescont}>
                        <h3>Categories</h3>
                        <div className={styles.categorieslinkscont}>
                            {categories.map((category) => {
                                return <p href="" onClick={(e) => {
                                    setCurrentCategory(category.slug)
                                }}>{category.name}<span>→</span></p>
                            })}
                        </div>
                    </div>
                </aside>
                <main className={styles.shoprightcont}>
                    <div>
                        <h1>{currentCateogory === '' ? "ALL PRODUCTS" : currentCateogory.toLocaleUpperCase()}</h1>
                    </div>
                    <div className={styles.shopproductscont}>
                        {
                            products.map((product) => {
                                return <Product name={product.title} bgColor="rgba(247, 242, 242, 1)" price={product.price} rating={product.rating} src={product.thumbnail} onClick={() => {
                                    navigate(`/product-detail/${product.id}`)
                                }} cart={props.cart} setCart={props.setCart} id={product.id} quantity={1} />
                            })
                        }
                    </div>
                </main>
            </section>
            <Footer />
        </>
    );
}

export default Shop