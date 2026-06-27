import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const ARPage = () => {
  useEffect(() => {
    // Auto-launch AR when page loads
    const autoLaunchAR = () => {
      const modelViewer = document.querySelector('model-viewer')
      if (modelViewer && modelViewer.canActivateAR) {
        modelViewer.activateAR()
      }
    }

    // Try to launch AR after model loads
    const handleLoad = () => {
      setTimeout(autoLaunchAR, 1000) // Wait 1 second for model to load
    }

    const modelViewer = document.querySelector('model-viewer')
    if (modelViewer) {
      modelViewer.addEventListener('load', handleLoad)
      // If already loaded, try immediately
      if (modelViewer.loaded) {
        autoLaunchAR()
      }
    }

    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener('load', handleLoad)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              AR Experience
            </h1>
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back
            </Link>
          </div>
          
          <div className="h-[600px] relative">
            <model-viewer
              src="/model.glb"
              alt="3D Model in AR"
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              touch-action="pan-y"
              auto-rotate
              rotation-per-second="30deg"
              environment-image="neutral"
              exposure="1.0"
              shadow-intensity="1"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '500px',
                backgroundColor: '#1a1a2e',
                borderRadius: '12px',
              }}
            >
              <button
                slot="ar-button"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                }}
              >
                🌐 View in AR
              </button>
              
              <div
                slot="unsupported"
                className="flex flex-col items-center justify-center h-full text-white p-8 text-center"
              >
                <p className="text-xl font-semibold mb-2">AR Not Supported</p>
                <p className="text-gray-300">
                  Your device doesn't support AR. Try using a modern mobile browser.
                </p>
              </div>
            </model-viewer>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              📱 Point your camera at a flat surface to place the 3D model in the real world.
              Move around to see it from different angles.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ARPage