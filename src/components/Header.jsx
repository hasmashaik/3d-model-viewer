import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">3D</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Model Viewer</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/ar" className="text-gray-600 hover:text-blue-600 transition-colors">
            AR View
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header