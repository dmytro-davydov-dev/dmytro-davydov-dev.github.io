import React, { useEffect, useRef } from "react";

type Vec3 = { x: number; y: number; z: number };
type Vec2 = { x: number; y: number };

const generateSpherePoints = (count: number): Vec3[] => {
  const points: Vec3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;

    points.push({ x, y, z });
  }

  return points;
};

const project = (point: Vec3, width: number, height: number, scale = 300): Vec2 => {
  const perspective = scale / (scale + point.z * 100);
  return {
    x: width / 2 + point.x * perspective * scale,
    y: height / 2 + point.y * perspective * scale,
  };
};

const rotateY = (point: Vec3, angle: number): Vec3 => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: point.x * cos - point.z * sin,
    y: point.y,
    z: point.x * sin + point.z * cos,
  };
};

const RotatingSphereNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let angle = 0;
    const nodes3D = generateSpherePoints(100); // Increase for more nodes
    const connectionThreshold = 0.15;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.003;

      const rotated = nodes3D.map(p => rotateY(p, angle));
      const projected = rotated.map(p => project(p, width, height));

      // Draw lines
      ctx.strokeStyle = "rgba(100, 149, 237, 0.15)";
      for (let i = 0; i < rotated.length; i++) {
        for (let j = i + 1; j < rotated.length; j++) {
          const dx = rotated[i].x - rotated[j].x;
          const dy = rotated[i].y - rotated[j].y;
          const dz = rotated[i].z - rotated[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < connectionThreshold) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of projected) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 149, 237, 0.6)";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default RotatingSphereNetwork;
