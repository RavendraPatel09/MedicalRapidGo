import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingMedicines() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-2, 1, -3]}>
        <Cylinder args={[0.3, 0.3, 1.2, 32]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#3B82F6" roughness={0.1} metalness={0.8} />
        </Cylinder>
        <Sphere args={[0.3, 32, 32]} position={[0, 0.6, 0]}>
          <meshStandardMaterial color="#3B82F6" roughness={0.1} metalness={0.8} />
        </Sphere>
        <Sphere args={[0.3, 32, 32]} position={[0, -0.6, 0]}>
          <meshStandardMaterial color="#111827" roughness={0.1} metalness={0.8} />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1.5} position={[2, -1, -2]}>
        <Icosahedron args={[0.6, 1]}>
          <meshStandardMaterial color="#10B981" wireframe transparent opacity={0.3} />
        </Icosahedron>
        <Icosahedron args={[0.3, 0]}>
          <meshStandardMaterial color="#10B981" roughness={0.2} metalness={0.5} />
        </Icosahedron>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={3} position={[0, 2, -4]}>
        <Cylinder args={[0.4, 0.4, 1.5, 32]} rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#8B5CF6" roughness={0.3} metalness={0.2} />
        </Cylinder>
      </Float>
      
      {/* Background Particles/Nodes */}
      {Array.from({ length: 30 }).map((_, i) => (
        <Float 
          key={i}
          speed={1} 
          rotationIntensity={1} 
          floatIntensity={1} 
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15 - 5
          ]}
        >
          <Sphere args={[0.05, 16, 16]}>
            <meshBasicMaterial color="#ffffff" transparent opacity={Math.random() * 0.5 + 0.1} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}
