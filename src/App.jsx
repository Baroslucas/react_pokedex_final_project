import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonProvider } from './context/PokemonContext'
import './index.css'
import { HomePage } from './pages/HomePage'
import { PokemonStats } from './components/PokemonStats/PokemonStats'


function App() {

  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/pokemon/:id" element={<PokemonStats/>} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App
