import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from './Cart.module.css'

function Cart(props) {
    return (
        <>
            <Navbar cart={props.cart} />
            <main className={styles.cartmaincont} >
                <div className={styles.carttoptxtcont}>
                    <h1>{props.cart.length !== 0 ? "Your Cart" : "Cart is empty"}</h1>
                    <p className={styles.clear} onClick={() => {
                        props.setCart([])
                    }}>{props.cart.length !== 0 && "Clear cart"}</p>
                </div>
                <section className={styles.cartitemscont}>
                    {
                        props.cart.map((cartItem) => {
                            return <div className={styles.cartsingleitemcont}>
                                <div className={styles.cartsingleitemleft}>
                                    <img src={cartItem.src} alt="" />
                                    <div>
                                        <h2>{cartItem.name}</h2>
                                        <p className={styles.price}>$ {cartItem.price}</p>
                                    </div>
                                </div>
                                <div className={styles.cartsingleitemright}>
                                    <div className={styles.quantitydiv}>
                                        <button
                                            onClick={() => {
                                                props.setCart((prev) =>
                                                    prev.map((item) => {
                                                        if (item.id === cartItem.id) {

                                                            if (item.quantity > 1) {
                                                                return {
                                                                    ...item,
                                                                    quantity: item.quantity - 1
                                                                }
                                                            };
                                                        }
                                                        return item;
                                                    })
                                                );
                                            }}
                                        >-</button>
                                        <p>{cartItem.quantity}</p>
                                        <button onClick={() => {
                                            props.setCart((prev) => {
                                                return prev.map((item) => {
                                                    if (item.id === cartItem.id) {

                                                        if(item.quantity === 10){
                                                            alert("Max quantity for an item is 10")
                                                        }

                                                        if (item.quantity<10) {
                                                            return {
                                                                ...item,
                                                                quantity: item.quantity + 1
                                                            }
                                                        }
                                                        
                                                    }
                                                    return item
                                                })
                                            })
                                        }}>+</button>
                                    </div>
                                    <button className={styles.deletebtn} onClick={() => {
                                        props.setCart(props.cart.filter((item) => {
                                            return cartItem.id != item.id
                                        }))
                                    }}>
                                        <svg width="34px" height="24px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#fe6401"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>
                                    </button>
                                </div>
                            </div>
                        })
                    }
                </section>
                <div></div>
            </main>
            <Footer />
        </>
    );
}

export default Cart