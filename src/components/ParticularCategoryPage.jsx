import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import styles from './ParticularCategory.module.css'
import { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'
import Category from './Category.jsx'
import Product from './Product.jsx'

function ParticularCategoryPage(props) {
    const navigate = useNavigate()
    const { categoryname } = useParams()
    const [categoryData, setCategoryData] = useState([])
    const categoryUrl = `https://dummyjson.com/products/category/${categoryname}`

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(categoryUrl)
            .then((res) => res.json())
            .then((data) => {
                setCategoryData(data.products)
            })
    },)
    return (
        <>
            <Navbar cart={props.cart} />
            <h1 className={styles.particulatcategoryh1}>{categoryname.toUpperCase()}</h1>
            <main className={styles.maincont}>
                {categoryData.map((product) => {
                    return <Product
                        key={product.id}
                        bgColor="rgba(247, 242, 242, 1)"
                        src={product.thumbnail}
                        name={product.title}
                        price={product.price}
                        rating={product.rating}
                        onClick={() => {
                            navigate(`/product-detail/${product.id}`)
                        }}
                    />

                })}
            </main>
            <Footer />
        </>
    )
}

export default ParticularCategoryPage