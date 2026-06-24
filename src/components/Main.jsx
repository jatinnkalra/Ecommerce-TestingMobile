import styles from './Main.module.css';
import Hero from './Hero.jsx'
import Category from './Category.jsx';
import TrendingProducts from './TrendingProducts.jsx';
import FlashSale from './FlashSale.jsx'
import TopRatedProducts from './TopRatedProducts.jsx'
import { useEffect, useState } from 'react';
function Main(props) {

    const categoryImages = {
        beauty: "/Images/beauty.jpg",
        fragrances: "/Images/fragnance.jpg",
        furniture: "/Images/furniture.jpg",
        groceries: "/Images/grocery.jpg",
        "home-decoration": "/Images/homedecor.jpg",
        "kitchen-accessories": "/Images/kitchen.jpg",
        laptops: "/Images/laptop.jpg"
    };

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
    }, [])

    return (
        <main>
            <Hero />
            <section className={styles.categoriesmaincont}>
                <h2>SHOP BY CATEGORY</h2>
                <div className={styles.categoriescont}>
                    {categories.slice(0, 6).map((category) => (
                        <Category
                            key={category.slug}
                            src={categoryImages[category.slug]}
                            name={category.name}
                        />
                    ))}
                </div>
            </section>

            <TrendingProducts cart={props.cart} setCart={props.setCart} />
            <FlashSale cart={props.cart} setCart={props.setCart} />
            <TopRatedProducts cart={props.cart} setCart={props.setCart} />




        </main>
    );
}

export default Main;
