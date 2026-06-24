import Navbar from './Navbar.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
function Home(props) {
    return (
        <>
            <Navbar cart={props.cart}/>
            <Main cart={props.cart} setCart = {props.setCart}/>
            <Footer />
        </>
    )
}

export default Home