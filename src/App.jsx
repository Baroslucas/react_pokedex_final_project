import { useState } from 'react'
import { Header } from './components/Header'
import { FilterBar } from './components/FilterBar'
import { PokemonList } from './components/PokemonList'


function App() {

  return (
    <>
      <Header />
      <FilterBar placeholder="Filter the pokemon list, ex: Pikachu"/>
      <PokemonList/>
    </>
  )
}

export default App
