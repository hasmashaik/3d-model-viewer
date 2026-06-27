import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ARViewer from '../components/ARViewer'

const ARPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Augmented Reality View
            </h1>
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Viewer
            </Link>
          </div>
          
          <div className="h-[600px] relative">
            <ARViewer modelPath="/model.glb" />
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              📱 On mobile: Tap "View in AR" button to experience the model in augmented reality.
              On desktop: Use mouse to rotate and explore the model.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ARPage