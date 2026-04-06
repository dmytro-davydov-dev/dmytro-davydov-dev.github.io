import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

// Skill categories and skills
const SKILLSET = [
  {
    category: 'Frontend',
    skills: ['React', 'Redux', 'Vue.js', 'HTML', 'CSS', 'SASS'],
    color: '#4f8cff',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'Flask', 'GraphQL'],
    color: '#facc15',
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    color: '#6ee7b7',
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Nginx'],
    color: '#f87171',
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: '#a78bfa',
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Mocha', 'Cypress', 'Selenium'],
    color: '#f472b6',
  },
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'TypeScript', 'C++', 'Java'],
    color: '#ffb347',
  },
];

// Solar system layout parameters
const SUN_RADIUS = 1.3 * 0.75;
const PLANET_RADIUS = 0.7 * 0.75;
const ORBIT_RADII = [3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5];
const ORBIT_COLORS = ['#e0e7ff','#fef9c3','#fce7f3','#e0f2fe','#f1f5f9','#f3e8ff','#fff7ed'];

function Orbit({ radius, color }) {
  // Draw a thin torus to represent the orbit
  return (
    <mesh rotation={[-Math.PI/2,0,0]}>
      <torusGeometry args={[radius, 0.03, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.25} />
    </mesh>
  );
}

function Planet({ idx, angle, hoveredIdx, setHoveredIdx, position }) {
  const cat = SKILLSET[idx];
  const [x, y, z] = position;
  return (
    <group position={[x, y, z]}>
      <mesh
        onPointerOver={() => setHoveredIdx(idx)}
        onPointerOut={() => setHoveredIdx(null)}
        scale={hoveredIdx === idx ? 1.25 : 1}
      >
        <sphereGeometry args={[PLANET_RADIUS, 32, 32]} />
        <meshStandardMaterial color={cat.color} />
      </mesh>
      <Html center style={{ pointerEvents: 'none' }}>
        <div style={{ color: '#222', fontWeight: 'bold', textAlign: 'center', textShadow: '0 0 8px #fff' }}>
          {cat.category}
        </div>
      </Html>
      {hoveredIdx === idx && (
        <Html center style={{ pointerEvents: 'auto' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.97)',
              border: '1px solid #4f8cff',
              borderRadius: 8,
              padding: 12,
              marginTop: 20,
              minWidth: 140,
              color: '#222',
              boxShadow: '0 2px 16px #0002',
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{cat.category}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {cat.skills.map(skill => (
                <li key={skill} style={{ marginBottom: 2 }}>{skill}</li>
              ))}
            </ul>
          </div>
        </Html>
      )}
    </group>
  );
}

function Sun({ hovered, setHovered }) {
  return (
    <group position={[0, 0, 0]}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.18 : 1}
      >
        <sphereGeometry args={[SUN_RADIUS, 48, 48]} />
        <meshStandardMaterial color={'#ffd700'} emissive={'#fff7ae'} emissiveIntensity={0.5} />
      </mesh>
      <Html center style={{ pointerEvents: 'none' }}>
        <div style={{ color: '#b45309', fontWeight: 'bold', fontSize: 20, textAlign: 'center', textShadow: '0 0 16px #fff' }}>
          Web Development
        </div>
      </Html>
    </group>
  );
}

function RadiiLines({ planetPositions }) {
  // Draw a line from the sun to each planet
  return (
    <>
      {planetPositions.map((pos, idx) => (
        <line key={idx}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, ...pos])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#bbb" linewidth={2} />
        </line>
      ))}
    </>
  );
}

function SkillsetSolarSystem() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [sunHovered, setSunHovered] = useState(false);
  // Animation state for planet angles
  const planetAngles = useRef(SKILLSET.map((_, i, arr) => (2 * Math.PI * i) / arr.length));
  // Each planet gets a unique speed
  const speeds = [0.008, 0.011, 0.007, 0.014, 0.009, 0.012, 0.006];
  // Store planet positions for radii lines
  const [planetPositions, setPlanetPositions] = useState(
    planetAngles.current.map((angle, idx) => [
      ORBIT_RADII[idx] * Math.cos(angle),
      ORBIT_RADII[idx] * Math.sin(angle),
      0,
    ])
  );

  useFrame(() => {
    planetAngles.current = planetAngles.current.map((a, idx) => a + speeds[idx]);
    setPlanetPositions(
      planetAngles.current.map((angle, idx) => [
        ORBIT_RADII[idx] * Math.cos(angle),
        ORBIT_RADII[idx] * Math.sin(angle),
        0,
      ])
    );
  });

  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 10]} intensity={0.7} />

      {/* Sun */}
      <Sun hovered={sunHovered} setHovered={setSunHovered} />
      {/* Planets */}
      {SKILLSET.map((cat, idx) => (
        <Planet
          key={cat.category}
          idx={idx}
          angle={planetAngles.current[idx]}
          hoveredIdx={hoveredIdx}
          setHoveredIdx={setHoveredIdx}
          position={planetPositions[idx]}
        />
      ))}
      <OrbitControls enablePan={false} />
    </group>
  );
}

export default function Skillset() {
  return (
    <div style={{width: '100vw', height: '100vh', background: '#fff', overflow: 'hidden' }}>
      <Suspense fallback={<div style={{color:'#222'}}>Loading Solar System Skillset...</div>}>
        <Canvas style={{ width: '100vw', height: '100vh', background: 'transparent' }}>
          <SkillsetSolarSystem />
        </Canvas>
      </Suspense>
    </div>
  );
}
