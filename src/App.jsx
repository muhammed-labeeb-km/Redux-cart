
import './App.css'
import { Route,Routes,Navigate } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Carts from './Pages/Carts'
import View from './Pages/View'

function App() {
  

  return (
    <div>
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/wishlist' element={<Wishlist/>} />
    <Route path='/cart' element={<Carts/>} />
    <Route path='/views/:id' element={<View/>} />
    <Route path='*' element={<Navigate to="/" />} />

    </Routes>
    <Footer/>
    </div>
  )
}

export default App
