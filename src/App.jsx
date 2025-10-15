import './App.css'
import Nav from './nav'
import Footer from './Footer'
import { Routes,Route } from 'react-router-dom'
import Shop from './Shop'
import Home from './Home'
import ScrollToTop from './ScrollToTop'
import Cart from './Cart'
function App() {
  
  return (
    <>
    <ScrollToTop/>
     <Nav/>
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
