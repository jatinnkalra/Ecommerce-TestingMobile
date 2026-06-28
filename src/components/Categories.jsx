import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import styles from './Categories.module.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function Categories(props) {
    const navigate = useNavigate()
    const categoryImages = {
        beauty: "/Images/beauty.jpg",
        fragrances: "/Images/fragrance.jpg",
        furniture: "/Images/furniture.jpg",
        groceries: "/Images/grocery.jpg",
        "home-decoration": "/Images/home-decoration.jpg",
        "kitchen-accessories": "/Images/kitchen-accessories.jpg",
        laptops: "/Images/laptop.jpg",
        "mens-shirts": "/Images/mens-shirts.jpg",
        "mens-shoes": "/Images/mens-shoes.jpg",
        "mens-watches": "/Images/mens-watches.jpg",
        "mobile-accessories": "/Images/mobile-accessories.jpg",
        motorcycle: "/Images/motorcycle.jpg",
        "skin-care": "/Images/skin-care.jpg",
        smartphones: "/Images/smartphones.jpg",
        "sports-accessories": "/Images/sports-accessories.jpg",
        sunglasses: "/Images/sunglasses.jpg",
        tablets: "/Images/tablets.jpg",
        tops: "/Images/tops.jpg",
        vehicle: "/Images/vehicle.jpg",
        "womens-bags": "/Images/womens-bags.jpg",
        "womens-dresses": "/Images/womens-dresses.jpg",
        "womens-jewellery": "/Images/womens-jewellery.jpg",
        "womens-shoes": "/Images/womens-shoes.jpg",
        "womens-watches": "/Images/womens-watches.jpg"
    };
    const [categories, setCategories] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
    }, [])
    return (
        <>
            <Navbar cart={props.cart} />
            <main className={styles.categoriesmaincont}>
                {categories.map((category) => {
                    return (
                        <div onClick={() => {
                            navigate(`/category/${category.slug}`)
                        }} className={styles.categoriescont} key={category.slug}>
                            <img alt="" className={styles.categoriesimg} src={categoryImages[category.slug]} />
                            <p>{category.name}</p>
                        </div>
                    );
                })}
            </main>
            <Footer />
        </>
    )
}

export default Categories