import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom shader for golden glowing wireframe effect
const GoldenBubbleMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color('#D4AF37') },
      uGlowColor: { value: new THREE.Color('#FFD700') },
    }),
    []
  );

  return (
    <shaderMaterial
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={`
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        uniform float uTime;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          vUv = uv;
          
          // Subtle organic distortion
          vec3 pos = position;
          float distortion = sin(pos.x * 3.0 + uTime * 0.5) * 
                            cos(pos.y * 2.0 + uTime * 0.3) * 
                            sin(pos.z * 2.5 + uTime * 0.4) * 0.15;
          pos += normal * distortion;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `}
      fragmentShader={`
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec3 uGlowColor;
        
        void main() {
          // Fresnel effect for edge glow
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 3.0);
          
          // Animated flowing lines
          float lines = sin(vUv.y * 40.0 + uTime * 2.0) * 0.5 + 0.5;
          lines *= sin(vUv.x * 30.0 - uTime * 1.5) * 0.5 + 0.5;
          
          // Combine effects
          vec3 color = mix(uColor, uGlowColor, fresnel * 0.8);
          float alpha = fresnel * 0.9 + lines * 0.15;
          
          // Add bright edge highlights
          alpha += pow(fresnel, 5.0) * 0.8;
          
          gl_FragColor = vec4(color, alpha * 0.85);
        }
      `}
      transparent
      side={THREE.DoubleSide}
      depthWrite={false}
      blending={THREE.AdditiveBlending}
    />
  );
};

// Sparkle particles around the bubble
function SparkleParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      // Distribute on sphere surface with some variation
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.5 + (Math.random() - 0.5) * 0.5;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#FFD700"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={meshRef}>
        <Sphere args={[2.5, 64, 64]}>
          <GoldenBubbleMaterial />
        </Sphere>
        <SparkleParticles />
      </group>
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
    <pointLight ref={lightRef} position={[0, 0, 4]} intensity={3} color="#FFD700" distance={12} />
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.2, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 1.2, 0.05);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#D4AF37" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FFD700" />
        <CursorLight />
        <AnimatedSphere />
        <Rig />
      </Canvas>
    </div>
  );
}
