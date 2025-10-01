import './App.css'
import Nav from './nav'
import Footer from './Footer'
import { Routes,Route } from 'react-router-dom'
import Shop from './Shop'
import Home from './Home'
import ScrollToTop from './ScrollToTop'
function App() {
  
  return (
    <>
    <ScrollToTop/>
     <Nav/>
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Home />} />
    </Routes>
     <Footer/>
    </>
  )
}

export default App
