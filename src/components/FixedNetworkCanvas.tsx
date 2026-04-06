import React, { useEffect, useRef } from "react";

// Dot positions extracted from the uploaded image (adjusted to match canvas size)
const dots = [
  { x: 530.5, y: 1076 },
  { x: 1407.59, y: 1030.13 },
  { x: 1676.92, y: 1031.92 },
  { x: 1052, y: 963.07 },
  { x: 1632.49, y: 765.93 },
  { x: 839.59, y: 728.27 },
  { x: 1434.92, y: 562.93 },
  { x: 1097.59, y: 451.59 },
];

// Manually defined connections (you can improve this with a Delaunay triangulation or proximity logic)
const connections: [number, number][] = [
  [0, 3], [3, 1], [1, 2], [3, 5], [5, 7],
  [7, 6], [6, 4], [4, 2], [3, 4], [1, 6],
];

const FixedNetworkCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;

    // Center the network relative to canvas
    const offsetX = centerX - 1100;
    const offsetY = centerY - 700;

    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.002;

      const rotated = dots.map(p => {
        const dx = p.x + offsetX - centerX;
        const dy = p.y + offsetY - centerY;
        const rotatedX = dx * Math.cos(angle) - dy * Math.sin(angle);
        const rotatedY = dx * Math.sin(angle) + dy * Math.cos(angle);
        return {
          x: rotatedX + centerX,
          y: rotatedY + centerY,
        };
      });

      // Draw connections
      ctx.strokeStyle = "rgba(100, 149, 237, 0.3)";
      ctx.lineWidth = 1;
      for (const [i, j] of connections) {
        ctx.beginPath();
        ctx.moveTo(rotated[i].x, rotated[i].y);
        ctx.lineTo(rotated[j].x, rotated[j].y);
        ctx.stroke();
      }

      // Draw dots
      for (const p of rotated) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 149, 237, 0.8)";
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default FixedNetworkCanvas;
