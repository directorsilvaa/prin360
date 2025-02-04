import React, { useState, useEffect } from 'react';
import { Users, Award, Building2, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 500,
    label: 'Clientes Satisfeitos',
    suffix: '+'
  },
  {
    icon: Award,
    value: 150,
    label: 'Projetos Entregues',
    suffix: '+'
  },
  {
    icon: Building2,
    value: 10,
    label: 'Anos de Experiência',
    suffix: ''
  },
  {
    icon: Star,
    value: 98,
    label: 'Taxa de Satisfação',
    suffix: '%'
  }
];

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="stats-section" className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-blue-900/10 to-transparent"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Hover effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Content */}
              <div className="relative flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-500 mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {isVisible && (
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-sm text-gray-400 text-center">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}