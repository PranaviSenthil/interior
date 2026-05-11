import { motion } from 'framer-motion';
import { useEffect, useState, useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Float, Points, PointMaterial, Text } from '@react-three/drei';
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
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 2.8 + (Math.random() - 0.5) * 0.5;
      
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
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function BrandText() {
  return (
    <group>
      <Text
        font="/fonts/playfair-display-v30-latin-regular.woff"
        fontSize={0.5}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        position={[0, 0.15, 0]}
        letterSpacing={0.15}
      >
        YOUR
      </Text>
      <Text
        font="/fonts/playfair-display-v30-latin-italic.woff"
        fontSize={0.5}
        color="#D4AF37"
        anchorX="center"
        anchorY="middle"
        position={[0, -0.45, 0]}
        letterSpacing={0.15}
      >
        BRAND
      </Text>
    </group>
  );
}

function AnimatedBubble() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.2}>
      <group ref={groupRef}>
        <Sphere args={[2.8, 64, 64]}>
          <GoldenBubbleMaterial />
        </Sphere>
        <SparkleParticles />
        <BrandText />
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

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0, y: loading ? 0 : '-100%' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    >
      {/* 3D Bubble with Brand */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#D4AF37" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#FFD700" />
          <CursorLight />
          <AnimatedBubble />
        </Canvas>
      </div>
      
      {/* Loading Progress Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-warm-white/10 overflow-hidden z-20">
        <motion.div 
          className="h-full bg-champagne"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
