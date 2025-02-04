import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer" onClick={onHomeClick}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative flex items-center">
                <Code2 className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-blue-500" />
                <span className="ml-2 text-white font-semibold">Print 360</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <button
                onClick={onHomeClick}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={onAboutClick}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={onTeamClick}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                Equipe
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button
                onClick={onBlogClick}
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
              onClick={onLoginClick}
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
              onClick={() => {
                onHomeClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => {
                onAboutClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Sobre
            </button>
            <button
              onClick={() => {
                onTeamClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Equipe
            </button>
            <button
              onClick={() => {
                onBlogClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-lg transition-all duration-300"
            >
              Blog
            </button>
            
            <button 
              onClick={() => {
                onLoginClick();
                setIsMenuOpen(false);
              }}
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