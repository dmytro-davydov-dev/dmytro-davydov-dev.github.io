import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useTexture } from '@react-three/drei';

// Skill categories and skills
const SKILLSET = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'TypeScript', 'C++', 'Java'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Redux', 'Vue.js', 'HTML', 'CSS', 'SASS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'Flask', 'GraphQL'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Mocha', 'Cypress', 'Selenium'],
  },
];

function getSphereCoords(count, radius = 5) {
  // Evenly distribute points on a sphere
  const coords = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    coords.push([
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ]);
  }
  return coords;
}

function SkillNode({ position, category, skills, onHover, hovered }) {
  const meshRef = useRef();
  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={onHover}
        onPointerOut={onHover}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color={hovered ? '#ffb347' : '#4f8cff'} />
      </mesh>
      <Html center style={{ pointerEvents: 'none' }}>
        <div style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', textShadow: '0 0 8px #222' }}>
          {category}
        </div>
      </Html>
      {hovered && (
        <Html center style={{ pointerEvents: 'auto' }}>
          <div
            style={{
              background: 'rgba(30,30,30,0.95)',
              border: '1px solid #4f8cff',
              borderRadius: 8,
              padding: 12,
              marginTop: 20,
              minWidth: 140,
              color: '#fff',
              boxShadow: '0 2px 16px #0008',
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{category}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {skills.map(skill => (
                <li key={skill} style={{ marginBottom: 2 }}>{skill}</li>
              ))}
            </ul>
          </div>
        </Html>
      )}
    </group>
  );
}

function Background() {
  // Vite: use BASE_URL for correct asset path in subdirectory deployments
  const bgPath = (import.meta.env.BASE_URL || '/') + 'media/error/bg1.jpg';
  const bgTexture = useTexture(bgPath);
  return (
    <mesh scale={[50, 50, 1]} position={[0,0,-20]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={bgTexture} />
    </mesh>
  );
}

function Skillset3D() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const sphereCoords = getSphereCoords(SKILLSET.length, 6);
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }} style={{ height: '80vh', width: '100vw', background: '#000' }}>
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 7]} intensity={0.7} />
      {sphereCoords.map((pos, idx) => (
        <SkillNode
          key={SKILLSET[idx].category}
          position={pos}
          category={SKILLSET[idx].category}
          skills={SKILLSET[idx].skills}
          hovered={hoveredIdx === idx}
          onHover={e => setHoveredIdx(e.type === 'pointerover' ? idx : null)}
        />
      ))}
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}

export default function Skillset() {
  return (
    <div style={{ width: '100vw', height: '80vh', background: '#000', overflow: 'hidden' }}>
      <Suspense fallback={<div style={{color:'#fff'}}>Loading 3D Skillset Map...</div>}>
        <Skillset3D />
      </Suspense>
    </div>
  );
}
