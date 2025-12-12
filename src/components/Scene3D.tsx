import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingIcon = ({ position, color, shape }: { position: [number, number, number]; color: string; shape: "box" | "sphere" | "torus" | "octahedron" | "cone" }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const getGeometry = () => {
    switch (shape) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[0.6, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.7]} />;
      case "cone":
        return <coneGeometry args={[0.5, 1, 32]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={2}
    >
      <mesh ref={meshRef} position={position}>
        {getGeometry()}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#00f0ff" intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.8} />
      <spotLight position={[0, 5, 0]} color="#f472b6" intensity={0.5} />

      {/* UI/UX Icon - Box */}
      <FloatingIcon position={[-4, 2, 0]} color="#00f0ff" shape="box" />
      
      {/* Coding Icon - Octahedron */}
      <FloatingIcon position={[4, 1, -2]} color="#8b5cf6" shape="octahedron" />
      
      {/* Design Icon - Torus */}
      <FloatingIcon position={[-3, -2, 1]} color="#f472b6" shape="torus" />
      
      {/* Tool Icon - Sphere */}
      <FloatingIcon position={[3, -1.5, 0]} color="#00f0ff" shape="sphere" />
      
      {/* Extra Icon - Cone */}
      <FloatingIcon position={[0, 3, -3]} color="#8b5cf6" shape="cone" />
      
      {/* Additional floating elements */}
      <FloatingIcon position={[-5, 0, -2]} color="#f472b6" shape="box" />
      <FloatingIcon position={[5, 2.5, -1]} color="#00f0ff" shape="octahedron" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Scene3D;
