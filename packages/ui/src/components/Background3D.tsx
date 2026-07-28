import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Lightformer, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Capsule = ({ position, color, scale }: any) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={mesh} scale={scale}>
        <capsuleGeometry args={[1, 2, 32, 32]} />
        <meshPhysicalMaterial 
          color={color} 
          transmission={0.9} 
          opacity={1} 
          metalness={0.1} 
          roughness={0.1} 
          ior={1.5} 
          thickness={2} 
          specularIntensity={1} 
          clearcoat={1} 
        />
      </mesh>
    </Float>
  );
};

export const Background3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-background overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <color attach="background" args={['#0b0e15']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#adc6ff" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#d0bcff" />
        
        <Capsule position={[-4, 2, -5]} color="#adc6ff" scale={0.8} />
        <Capsule position={[5, -1, -2]} color="#571bc1" scale={1.2} />
        <Capsule position={[-2, -3, 2]} color="#ffb786" scale={0.6} />
        <Capsule position={[3, 4, -8]} color="#adc6ff" scale={1.5} />
        
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 4, -0.3, 0]}>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[5, -1, -1]} scale={[10, 2, 1]} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 10, 1]} />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
};
