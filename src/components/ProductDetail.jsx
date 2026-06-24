import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx'
import styles from './ProductDetail.module.css'
import Product from './Product.jsx';
import Footer from './Footer.jsx'
function ProductDetail(props) {
    const { id } = useParams()
    const [productData, setProductData] = useState({})
    const [category, setCategory] = useState()
    const [relatedProducts, setRelatedProducts] = useState([])
    const navigate = useNavigate()
    const [selectVal, setSelectValue] = useState(1);
    useEffect(() => {
        window.scrollTo(0, 0)
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProductData(data)
                setCategory(data.category)
            })
    }, [id])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedProducts(data.products)
            })
    }, [category])
    return (
        <>
            <Navbar cart={props.cart} />
            <main className={styles.productdetailmaincont}>

                <section className={styles.productdetailuppercont}>
                    <div className={styles.productdetailuppercontleft}>
                        <img src={productData.thumbnail} alt="" />
                    </div>
                    <div className={styles.productdetailuppercontright}>
                        <h1>{productData.title}</h1>
                        <p className={styles.review}>
                            <span style={{ color: "#FFD700" }}>★</span> {productData.rating}
                        </p>
                        <p className={styles.price}>${productData.price}</p>
                        <p className={styles.desc}>{productData.description}</p>
                        <div className={styles.quantitymaincont}>
                            <p>Quantity :</p>
                            <span className={styles.quantitycont}>
                                <select
                                    value={selectVal}
                                    onChange={(e) => setSelectValue(Number(e.target.value))}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </span>
                        </div>
                        <div className={styles.btncont}>
                            <button className={styles.addtocartbtn} onClick={() => {
                                props.setCart((prev) => {
                                    const existingProduct = prev.find((item) => {
                                        return item.id === productData.id
                                    })



                                    if (existingProduct) {

                                        if (existingProduct.quantity + selectVal > 10) {
                                            alert("Maximum quantity for this product is 10. Please update the quantity from the cart.");
                                            return prev;
                                        }


                                        return prev.map((item) => {
                                            return item.id === productData.id
                                                ? {
                                                    ...item,
                                                    quantity: item.quantity + selectVal
                                                }
                                                : item
                                        })
                                    }

                                    return [
                                        ...prev,
                                        {
                                            "id": productData.id,
                                            "name": productData.title,
                                            "src": productData.thumbnail,
                                            "rating": productData.rating,
                                            "desc": productData.description,
                                            "price": productData.price,
                                            "quantity": selectVal
                                        }
                                    ]
                                })
                            }}>Add to Cart</button>
                            <button className={styles.buynowbtn}>Buy Now</button>
                        </div>
                    </div>
                </section>

                <section className={styles.productdetailmiddlecont}>
                    <div className={styles.productmiddlecontdivs}>
                        <div></div>
                        <div>
                            <h2>Free Shipping</h2>
                            <p>On orders above $50</p>
                        </div>
                    </div>
                    <div className={`${styles.productmiddlecontdivs} ${styles.sevendaydiv}`}>
                        <div></div>
                        <div>
                            <h2>7 Days Returns</h2>
                            <p>Money back gurantee</p>
                        </div>
                    </div>
                    <div className={styles.productmiddlecontdivs}>
                        <div></div>
                        <div>
                            <h2>Secure Payment</h2>
                            <p>100% Secure Payment</p>
                        </div>
                    </div>
                </section>

                <section className={styles.productdetaillowercont}>
                    <h3>Related Products</h3>
                    <div className={styles.relatedproductsCont}>
                        {relatedProducts.filter((product) => {
                            return product.id != id
                        }).map((product) => {
                            return <Product cart={props.cart} key={product.id}
                                setCart={props.setCart} id={product.id} name={product.title} quantity={1} bgColor="rgba(247, 242, 242, 1)" price={product.price} rating={product.rating} src={product.thumbnail} onClick={() => {
                                    navigate(`/product-detail/${product.id}`)
                                }} />
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ProductDetail
