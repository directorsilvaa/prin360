import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
  onHomeClick: () => void;
  onTeamClick: () => void;
  onBlogClick: () => void;
  onAboutClick: () => void;
}

export default function Navbar({ onLoginClick, onHomeClick, onTeamClick, onBlogClick, onAboutClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (handler: () => void) => {
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close mobile menu if open
    setIsMenuOpen(false);
    // Execute the navigation handler
    handler();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer" onClick={() => handleNavClick(onHomeClick)}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center">
                <svg width="40" height="40" viewBox="0 0 200 200" className="text-blue-500">
                  <g transform="translate(20, 20)">
                    <path
                      fill="currentColor"
                      d="M80 0C35.817 0 0 35.817 0 80c0 44.183 35.817 80 80 80 44.183 0 80-35.817 80-80C160 35.817 124.183 0 80 0zm0 150c-38.66 0-70-31.34-70-70s31.34-70 70-70 70 31.34 70 70-31.34 70-70 70z"
                    />
                    <path
                      fill="currentColor"
                      d="M80 20c-33.137 0-60 26.863-60 60s26.863 60 60 60 60-26.863 60-60-26.863-60-60-60zm0 100c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z"
                    />
                  </g>
                </svg>
                <span className="ml-2 text-white font-semibold">Print 360</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handleNavClick(onHomeClick)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={() => handleNavClick(onAboutClick)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={() => handleNavClick(onTeamClick)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Equipe
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={() => handleNavClick(onBlogClick)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </div>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavClick(onLoginClick)}
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-lg shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
                <span className="mr-1">Entrar</span> →
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Área do Cliente</span>
              <span className="relative invisible">Área do Cliente</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center p-1.5 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <span className="absolute -inset-0.5 bg-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></span>
              <span className="relative">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 h-auto visible'
            : 'opacity-0 -translate-y-4 h-0 invisible'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg rounded-lg mb-4">
            <button
              onClick={() => handleNavClick(onHomeClick)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick(onAboutClick)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavClick(onTeamClick)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Equipe
            </button>
            <button
              onClick={() => handleNavClick(onBlogClick)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Blog
            </button>
            
            <button 
              onClick={() => handleNavClick(onLoginClick)}
              className="w-full mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 text-sm"
            >
              Área do Cliente
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}