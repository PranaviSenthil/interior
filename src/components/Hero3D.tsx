import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.5}>
        <MeshDistortMaterial
          color="#D4AF37"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.05}
          metalness={0.95}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
}

function CursorLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (lightRef.current) {
      const x = (state.pointer.x * viewport.width) / 2;
      const y = (state.pointer.y * viewport.height) / 2;
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, x, 0.1);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, y, 0.1);
    }
  });

  return (
    <pointLight ref={lightRef} position={[0, 0, 3]} intensity={2} color="#ffffff" distance={10} />
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 1.5, 0.05);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#D4AF37" />
        <CursorLight />
        <AnimatedSphere />
        <Rig />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
