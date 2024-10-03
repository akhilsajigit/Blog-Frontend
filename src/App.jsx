import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import AddBlog from './AddBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <AddBlog></AddBlog>
    </div>

  )
}

export default App
