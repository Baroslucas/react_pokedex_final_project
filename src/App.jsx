import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonProvider } from './context/PokemonContext'
import './index.css'
import { HomePage } from './pages/HomePage'
import { DescriptionPage } from './pages/DescriptionPage'
import { HeaderLayout } from './layout/HeaderLayout'


function App() {

  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderLayout/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/pokemon/:id" element={<DescriptionPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App
