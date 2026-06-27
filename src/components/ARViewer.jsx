import React, { useEffect, useRef, useState } from 'react'
import '@google/model-viewer'

const ARViewer = ({ modelPath = '/model.glb' }) => {
  const modelViewerRef = useRef(null)
  const [arSupported, setArSupported] = useState(null)

  useEffect(() => {
    const modelViewer = modelViewerRef.current
    
    if (modelViewer) {
      // Check if AR is supported
      const checkARSupport = async () => {
        try {
          const supported = await modelViewer.isArSupported()
          setArSupported(supported)
          console.log('AR Supported:', supported)
        } catch (error) {
          console.error('Error checking AR support:', error)
          setArSupported(false)
        }
      }
      
      checkARSupport()
      
      modelViewer.addEventListener('load', () => {
        console.log('Model loaded successfully')
      })
      
      modelViewer.addEventListener('error', (error) => {
        console.error('Model loading error:', error)
      })
    }
  }, [])

  return (
    <div className="w-full h-full relative">
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
            {arSupported === false 
              ? 'Your device or browser doesn\'t support AR. Try using a modern mobile browser like Chrome on Android or Safari on iOS.'
              : 'Checking AR support...'}
          </p>
        </div>
      </model-viewer>
    </div>
  )
}

export default ARViewer