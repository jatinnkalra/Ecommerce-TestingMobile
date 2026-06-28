import { useState, useEffect } from 'react'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import ProductCategoryPage from './components/ParticularCategoryPage.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart.jsx'
import Categories from './components/Categories.jsx'
function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)
  }, [cart]);
  return (
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
      <Route path="/shop" element={<Shop setCart={setCart} cart={cart} />} />
      <Route
        path="/product-detail/:id"
        element={<ProductDetail setCart={setCart} cart={cart} />}
      />

      <Route
        path="/category/:categoryname"
        element={<ProductCategoryPage setCart={setCart} cart={cart} />}
      />
      <Route path="/cart" element={<Cart setCart={setCart} cart={cart} />} />
      <Route path="/categories" element={<Categories setCart={setCart} cart={cart} />} />
      {/* <Route path="/cart" element={<Cart />} /> */}
    </Routes>


  )
}

export default App
