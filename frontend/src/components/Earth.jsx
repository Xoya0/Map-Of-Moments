import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import worldMap from '../assets/world-map.jpg';

const Earth = () => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; 
    }
  });

  const texture = useTexture(worldMap);
  

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial 
        map={texture}
        metalness={0.1}
        roughness={0.7}
      />
    </mesh>
  );
};

export default Earth;