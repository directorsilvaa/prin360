import React, { useRef, useEffect } from 'react';

const logos = [
  {
    name: 'Coca-Cola',
    url: 'https://logodownload.org/wp-content/uploads/2014/04/coca-cola-logo-1.png'
  },
  {
    name: 'Nike',
    url: 'https://logodownload.org/wp-content/uploads/2016/03/nike-logo-1.png'
  },
  {
    name: 'Samsung',
    url: 'https://logodownload.org/wp-content/uploads/2014/09/samsung-logo-0.png'
  },
  {
    name: 'Americanas',
    url: 'https://logodownload.org/wp-content/uploads/2014/07/americanas-logo-0-2048x2048.png'
  },
  {
    name: 'Volkswagen',
    url: 'https://logodownload.org/wp-content/uploads/2014/09/volkswagen-vw-logo-0.png'
  },
  {
    name: 'Microsoft',
    url: 'https://logodownload.org/wp-content/uploads/2014/09/microsoft-logo-1.png'
  },
  {
    name: 'Apple',
    url: 'https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1.png'
  }
];

export default function LogoCarousel() {
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
          scrollElement.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="w-full overflow-hidden pointer-events-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex space-x-24 overflow-x-hidden whitespace-nowrap w-full py-4"
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="inline-block group cursor-pointer"
          >
            <div className="w-32 h-12 relative flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="w-full h-full object-contain opacity-50 transition-all duration-300 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}