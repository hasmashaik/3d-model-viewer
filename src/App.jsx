import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ARPage from './pages/ARPage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ar" element={<ARPage />} />
      </Routes>
    </div>
  )
}

export default App