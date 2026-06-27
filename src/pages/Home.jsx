import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import ModelViewer from '../components/ModelViewer'
import QRCodeGenerator from '../components/QRCodeGenerator'

const Home = () => {
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
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                🖱️ Drag to rotate • Scroll to zoom
              </div>
            </div>
          </div>
          
          {/* Right: Controls and Info */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">AR Experience</h2>
              
              <div className="space-y-3">
                <Link to="/ar" className="block">
                  <button className="w-full btn-primary flex items-center justify-center space-x-2">
                    <span>📱</span>
                    <span>View in AR</span>
                  </button>
                </Link>
                
                <p className="text-sm text-gray-600 text-center">
                  Place the 3D model in your real environment using AR
                </p>
              </div>
            </div>
            
            {/* QR Code Section */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Scan to View in AR
              </h3>
              <QRCodeGenerator value={currentUrl} size={180} />
              <p className="text-xs text-gray-500 mt-2 text-center">
                Scan with your phone camera to instantly launch AR
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                How to Use AR
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">1.</span>
                  <span>Scan QR code with your phone</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">2.</span>
                  <span>Point camera at a flat surface</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">3.</span>
                  <span>Tap "View in AR" to place the model</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600">4.</span>
                  <span>Move around to inspect from all angles</span>
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