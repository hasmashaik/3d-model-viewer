import React, { Suspense, useRef } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'
import LoadingSpinner from './LoadingSpinner'

// Model component that loads and displays the GLB file
function Model({ modelPath }) {
  // Load the GLB model
  const { scene } = useGLTF(modelPath)
  const modelRef = useRef()
  
  // Clone the scene to avoid mutation issues
  const clonedScene = React.useMemo(() => {
    const clone = scene.clone()
    // Apply some default transformations if needed
    clone.scale.set(1, 1, 1)
    return clone
  }, [scene])

  return (
    <primitive 
      ref={modelRef}
      object={clonedScene} 
      position={[0, 0, 0]}
    />
  )
}

// Main ModelViewer component
const ModelViewer = ({ modelPath = '/model.glb' }) => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [3, 2, 5], fov: 45 }}
        shadows
        className="rounded-xl"
        style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)' }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 7]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, 0, 5]} intensity={0.5} />
        <pointLight position={[0, -5, 0]} intensity={0.3} />
        
        {/* Environment for realistic reflections */}
        <Environment preset="studio" />
        
        {/* Orbit controls for 360 interaction */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          rotateSpeed={0.8}
          zoomSpeed={1.2}
          minDistance={2}
          maxDistance={10}
          target={[0, 0, 0]}
        />
        
        {/* Load the model with suspense for loading state */}
        <Suspense fallback={
          <Html center>
            <LoadingSpinner />
          </Html>
        }>
          <Model modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelViewer