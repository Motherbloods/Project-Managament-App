
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  console.log('App component rendered', sidebarOpen)
  return (
    <>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} />
    </>
  )
}

export default App
