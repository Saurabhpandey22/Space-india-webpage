import React, { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Create star field particles
    let stars = [];
    const numStars = Math.floor((width * height) / 4000);

    function initStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.3,
          color: Math.random() > 0.8 ? '#F2B441' : (Math.random() > 0.4 ? '#61DAFB' : '#FFFFFF'),
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.015 + 0.005,
          twinkleFactor: Math.random() * 0.05,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    }

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render stars with gentle twinkling effect
      stars.forEach((star) => {
        star.alpha += star.twinkleFactor * star.twinkleDir;
        if (star.alpha >= 0.95) star.twinkleDir = -1;
        if (star.alpha <= 0.2) star.twinkleDir = 1;

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  );
}
