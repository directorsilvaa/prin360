import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Volkswagen',
    url: 'https://logodownload.org/wp-content/uploads/2014/09/volkswagen-vw-logo-0.png'
  },
  {
    name: 'Americanas',
    url: 'https://logodownload.org/wp-content/uploads/2014/07/americanas-logo-0-2048x2048.png'
  },
  {
    name: 'OLX',
    url: 'https://logodownload.org/wp-content/uploads/2014/05/olx-logo-0.png'
  },
  {
    name: 'Samsung',
    url: 'https://logodownload.org/wp-content/uploads/2014/09/samsung-logo-0.png'
  },
  {
    name: 'Microsoft',
    url: 'https://logodownload.org/wp-content/uploads/2014/09/microsoft-logo-1.png'
  }
];

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (!isPaused) {
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 0.3; // Even slower scroll speed for smoother animation
        }
      }
    };

    const interval = setInterval(scroll, 16); // Using requestAnimationFrame timing (~60fps)
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative py-16 bg-gradient-to-b from-[#0B0F19] to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Empresas que confiam em nosso trabalho
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </motion.div>

        {/* Logo Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10"></div>

          {/* Logo Carousel */}
          <div
            ref={scrollRef}
            className="flex space-x-24 overflow-x-hidden whitespace-nowrap py-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                className="inline-block group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-40 h-24 flex items-center justify-center">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-xl transition-all duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg"></div>
                  </div>

                  {/* Logo Image */}
                  <img
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    className="relative w-32 h-auto object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}