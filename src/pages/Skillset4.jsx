// Placeholder for Skillset4.jsx. The assistant needs to analyze the actual image to match the layout.
// Please upload or describe the layout of media/error/bg1.jpg for an exact recreation.

import React, { useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

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

// TODO: Analyze bg1.jpg and update NODES and CONNECTIONS to match the image's layout exactly.
// For now, this is a placeholder hexagon+center layout.
const NODES = [
  { label: 'Programming Languages', position: [0, 3.5, 0], color: '#4f8cff' },
  { label: 'Frontend', position: [3.5, 1.5, 0], color: '#ffb347' },
  { label: 'Backend', position: [3.5, -1.5, 0], color: '#6ee7b7' },
  { label: 'Databases', position: [0, -3.5, 0], color: '#f87171' },
  { label: 'DevOps', position: [-3.5, -1.5, 0], color: '#facc15' },
  { label: 'Mobile', position: [-3.5, 1.5, 0], color: '#a78bfa' },
  { label: 'Testing', position: [0, 0, 0], color: '#f472b6' },
];

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6],
];

function Connection({ start, end }) {
  const ref = useRef();
  const diff = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
  const length = Math.sqrt(diff[0] ** 2 + diff[1] ** 2 + diff[2] ** 2);
  const mid = [
    (start[0] + end[0]) / 2,
    (start[1] + end[1]) / 2,
    (start[2] + end[2]) / 2,
  ];
  const axis = [diff[1], -diff[0], 0];
  const angle = Math.acos(diff[2] / length);
  return (
    <mesh position={mid} ref={ref}>
      <cylinderGeometry args={[0.08, 0.08, length, 16]} />
      <meshStandardMaterial color="#bbb" />
      <group rotation={[
        axis[0] !== 0 || axis[1] !== 0 ? angle : 0,
        0,
        Math.atan2(diff[1], diff[0])
      ]} />
    </mesh>
  );
}

function SkillNode({ node, idx, hoveredIdx, setHoveredIdx }) {
  const cat = SKILLSET.find(c => c.category === node.label);
  return (
    <group position={node.position}>
      <mesh
        onPointerOver={() => setHoveredIdx(idx)}
        onPointerOut={() => setHoveredIdx(null)}
        scale={hoveredIdx === idx ? 1.3 : 1}
      >
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color={node.color} />
      </mesh>
      <Html center style={{ pointerEvents: 'none' }}>
        <div style={{ color: '#222', fontWeight: 'bold', textAlign: 'center', textShadow: '0 0 8px #fff' }}>
          {node.label}
        </div>
      </Html>
      {hoveredIdx === idx && cat && (
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

function Skillset3D() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }} style={{ height: '80vh', width: '100vw', background: '#fff' }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 10, 7]} intensity={0.6} />
      {CONNECTIONS.map(([from, to], i) => (
        <Connection key={i} start={NODES[from].position} end={NODES[to].position} />
      ))}
      {NODES.map((node, idx) => (
        <SkillNode
          key={node.label}
          node={node}
          idx={idx}
          hoveredIdx={hoveredIdx}
          setHoveredIdx={setHoveredIdx}
        />
      ))}
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}

export default function Skillset() {
  return (
    <div style={{ width: '100vw', height: '80vh', background: '#fff', overflow: 'hidden' }}>
      <Suspense fallback={<div style={{color:'#222'}}>Loading 3D Skillset Map...</div>}>
        <Skillset3D />
      </Suspense>
    </div>
  );
}
