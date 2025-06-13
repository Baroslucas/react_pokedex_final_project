import { useState } from 'react'
import { Header } from './components/Header'
import { FilterBar } from './components/FilterBar'


function App() {

  return (
    <>
      <Header />
      <FilterBar placeholder="Filter the pokemon list, ex: Pikachu"/>
    </>
  )
}

export default App
