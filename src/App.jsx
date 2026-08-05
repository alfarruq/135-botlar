
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/header'
import Home from './pages/home'
import Catalog from './pages/Catalog'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'


function App() {

  return (
    <>


      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
