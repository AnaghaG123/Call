import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Help from './Help'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Help' element={<Help />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
