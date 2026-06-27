import React, { useEffect, useRef } from 'react'
import '@google/model-viewer'

const ARViewer = ({ modelPath = '/model.glb' }) => {
  const modelViewerRef = useRef(null)

  useEffect(() => {
    // Check if model-viewer is supported
    const modelViewer = modelViewerRef.current
    if (modelViewer) {
      // Add iOS AR quick look support
      modelViewer.addEventListener('load', () => {
        console.log('Model loaded successfully')
      })
    }
  }, [])

  // Get the current URL for AR sharing
  const currentUrl = window.location.origin

  return (
    <div className="w-full h-full relative">
      {/* @ts-ignore */}
      <model-viewer
        ref={modelViewerRef}
        src={modelPath}
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
        {/* AR Button */}
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
        
        {/* Fallback content for unsupported browsers */}
        <div
          slot="unsupported"
          className="flex flex-col items-center justify-center h-full text-white p-8 text-center"
        >
          <p className="text-xl font-semibold mb-2">AR Not Supported</p>
          <p className="text-gray-300">
            Your device or browser doesn't support AR. Try using a modern mobile browser.
          </p>
        </div>
      </model-viewer>
    </div>
  )
}

export default ARViewer