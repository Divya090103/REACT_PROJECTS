import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from './components/Heading'
import Container from './components/Container'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Heading/>
  <Container/>
    </>
  )
}

export default App
