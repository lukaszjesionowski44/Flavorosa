import './App.css'
import Header from './components/Header'
import MobileHeader from './components/MobileHeader'
import React, {useState} from 'react'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  const [mobileMenu, setMobileMenu] = useState(false)


  return (
    <div className="App">
      <Header setMobileMenu={setMobileMenu}/>
      {mobileMenu && <MobileHeader setMobileMenu={setMobileMenu} />}
      <Home />
      <About />
    </div>
  )
}

export default App
