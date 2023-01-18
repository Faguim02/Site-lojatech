import './App.css'
import NavBar from './Components/NavBar'
import MainProducts from './Components/MainProducts'
import { useState } from 'react'

function App() {

    const[search, setSearch] = useState('')

    return (
      <>
        <NavBar setSearch={setSearch} seach={search}/>
        <MainProducts search={search}/>
      </>
    )
}

export default App
