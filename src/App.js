import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from "./Model";

export default function App() {
  return (
    <Canvas
      camera={{ position: [5, 5, 10], fov: 10 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <Model />
        </group>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}