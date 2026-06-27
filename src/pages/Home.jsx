import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ModelViewer from '../components/ModelViewer'
import QRCodeGenerator from '../components/QRCodeGenerator'

const Home = () => {
  const [modelLoaded, setModelLoaded] = useState(false)
  const currentUrl = window.location.origin

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: 3D Model Viewer */}
          <div className="lg:col-span-2">
            <div className="card h-[600px] relative">
              <ModelViewer modelPath="/model.glb" />
              
              {/* Controls hint */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                🖱️ Drag to rotate • Scroll to zoom
              </div>
            </div>
          </div>
          
          {/* Right: Controls and Info */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Model Controls</h2>
              
              <div className="space-y-3">
                <button 
                  onClick={() => window.location.href = '/ar'}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>📱</span>
                  <span>View in AR</span>
                </button>
                
                <button 
                  onClick={() => {
                    const viewer = document.querySelector('canvas')
                    if (viewer) {
                      viewer.requestFullscreen?.()
                    }
                  }}
                  className="w-full btn-secondary flex items-center justify-center space-x-2"
                >
                  <span>⛶</span>
                  <span>Full Screen</span>
                </button>
              </div>
            </div>
            
            {/* QR Code Section */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Share via QR
              </h3>
              <QRCodeGenerator value={currentUrl} size={180} />
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Instructions
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">1.</span>
                  <span>Click "View in AR" for augmented reality experience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">2.</span>
                  <span>Scan QR code on mobile to open in AR</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">3.</span>
                  <span>Drag to rotate the model 360°</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">4.</span>
                  <span>Scroll to zoom in/out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home