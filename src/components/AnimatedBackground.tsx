import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      
      setIsMoving(true);
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      moveTimeout.current = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Futuristic grid system */}
      <div 
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,24,64,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,24,64,0.07) 1px, transparent 1px),
            linear-gradient(rgba(0,24,64,0.06) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(0,24,64,0.06) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          transform: `translate(${(mousePosition.x - 50) * -0.02}px, ${(mousePosition.y - 50) * -0.02}px)`,
          maskImage: 'radial-gradient(ellipse at center, transparent 30%, black 70%)'
        }}
      ></div>

      {/* Reactive particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle at center, rgba(59,130,246,${0.1 - i * 0.02}) 0%, transparent 70%)`,
              left: `${30 + i * 20}%`,
              top: `${20 + i * 15}%`,
              transform: `translate(${(mousePosition.x - 50) * -(0.1 + i * 0.05)}px, ${(mousePosition.y - 50) * -(0.1 + i * 0.05)}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        ))}
      </div>

      {/* Dynamic orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute -top-[25%] -left-[25%] w-[150%] h-[150%] transition-transform duration-1000 ${
            isMoving ? 'scale-105' : 'scale-100'
          }`}
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.1}px, ${(mousePosition.y - 50) * -0.1}px) rotate(${mousePosition.x * 0.05}deg)`
          }}
        >
          {/* Primary orb */}
          <div 
            className="absolute top-[40%] left-[30%] w-[35rem] h-[35rem] rounded-full transition-all duration-700"
            style={{
              background: 'radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.1) 50%, transparent 70%)',
              transform: `translate(${(mousePosition.x - 50) * 0.08}px, ${(mousePosition.y - 50) * 0.08}px) scale(${isMoving ? 1.1 : 1})`,
              filter: 'blur(80px)'
            }}
          />

          {/* Secondary orbs */}
          <div 
            className="absolute top-[60%] left-[60%] w-[25rem] h-[25rem] rounded-full transition-all duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, rgba(79,70,229,0.1) 50%, transparent 70%)',
              transform: `translate(${(mousePosition.x - 50) * -0.12}px, ${(mousePosition.y - 50) * -0.12}px) scale(${isMoving ? 1.15 : 1})`,
              filter: 'blur(60px)'
            }}
          />
          <div 
            className="absolute top-[20%] left-[50%] w-[20rem] h-[20rem] rounded-full transition-all duration-300"
            style={{
              background: 'radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, rgba(37,99,235,0.05) 50%, transparent 70%)',
              transform: `translate(${(mousePosition.x - 50) * 0.15}px, ${(mousePosition.y - 50) * 0.15}px) scale(${isMoving ? 1.2 : 1})`,
              filter: 'blur(40px)'
            }}
          />
        </div>
      </div>

      {/* Interactive light trails */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: isMoving ? 0.4 : 0.2,
          background: `
            radial-gradient(circle ${isMoving ? '400px' : '300px'} at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59,130,246,0.15),
              rgba(37,99,235,0.1) 30%,
              rgba(29,78,216,0.05) 60%,
              transparent 100%)
          `
        }}
      />

      {/* Ambient noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay transition-transform duration-200"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: `translate(${(mousePosition.x - 50) * -0.03}px, ${(mousePosition.y - 50) * -0.03}px)`
        }}
      />
    </div>
  );
}