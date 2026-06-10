import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useLenis from './hooks/useLenis'
import Layout from './components/Layout'
import Home from './pages/Home'
import Fabricacion from './pages/Fabricacion'
import Distribucion from './pages/Distribucion'
import Bombeo from './pages/Bombeo'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Servicios from './pages/Servicios'
import AvisoLegal from './pages/AvisoLegal'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'

function App() {
  useLenis()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/fabricacion" element={<Fabricacion />} />
          <Route path="/distribucion" element={<Distribucion />} />
          <Route path="/bombeo" element={<Bombeo />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
