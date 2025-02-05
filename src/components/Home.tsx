import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  ArrowRight, MessageCircle, BarChart2, Users, ShoppingCart, 
  Instagram, Facebook, Twitter, Youtube, TrendingUp, Target,
  DollarSign, LineChart, PieChart, Share2, Globe, Zap, Rocket
} from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveRadius = (baseRadius: number) => {
    if (windowWidth < 640) return baseRadius * 0.3; // Reduced for mobile
    if (windowWidth < 1024) return baseRadius * 0.7;
    return baseRadius;
  };

  const getResponsiveIconSize = () => {
    if (windowWidth < 640) return 16;
    if (windowWidth < 1024) return 20;
    return 24;
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-green-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
          <div className="relative bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
            Fale conosco no WhatsApp
          </div>
        </div>
      </a>

      <div className="relative pt-16 sm:pt-20 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Mobile Animations Container - Only visible on mobile */}
            <div className="lg:hidden absolute inset-0 -z-10">
              <div className="relative w-full h-[300px]">
                {/* Background Glow Effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[50px] animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-[100px] h-[100px] bg-purple-500/20 rounded-full blur-[40px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-1/3 left-1/4 w-[100px] h-[100px] bg-cyan-500/20 rounded-full blur-[40px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Centered Rocket for Mobile */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0.8, 1, 0.8],
                    rotate: [0, 5, -5, 0],
                    y: [-10, 10, -10]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-3 rounded-full border border-blue-500/30">
                      <Rocket className="w-8 h-8 text-blue-400" />
                      <motion.div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-8"
                        initial={{ scaleY: 0.8 }}
                        animate={{ 
                          scaleY: [0.8, 1.2, 0.8],
                          opacity: [0.6, 0.8, 0.6]
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-b from-orange-500 via-yellow-500 to-transparent rounded-b-full blur-sm"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Orbiting Elements */}
                {[
                  { icon: Instagram, color: "from-pink-500 to-purple-500", delay: 0, radius: 80 },
                  { icon: Facebook, color: "from-blue-500 to-blue-600", delay: 2, radius: 90 },
                  { icon: Twitter, color: "from-sky-400 to-sky-500", delay: 4, radius: 70 },
                  { icon: Youtube, color: "from-red-500 to-red-600", delay: 6, radius: 85 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: -index * 2
                    }}
                    style={{ transformOrigin: "center" }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        left: `${Math.cos(index * (Math.PI * 2) / 4) * item.radius}px`,
                        top: `${Math.sin(index * (Math.PI * 2) / 4) * item.radius}px`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: -index * 2
                      }}
                    >
                      <div className="relative group">
                        <motion.div 
                          className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-full blur-lg opacity-40`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.6, 0.4]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        />
                        <div className="relative bg-gray-900/90 backdrop-blur-sm p-2 rounded-full border border-gray-700/50">
                          <item.icon className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Text Content */}
            <motion.div 
              className="relative z-10 w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-blue-400">Transforme seu negócio digital</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white relative">
                <span className="block relative z-20 bg-gradient-to-br from-white to-gray-300 text-transparent bg-clip-text">Marketing Digital</span>
                <span className="block text-blue-500 mt-1">para sua empresa</span>
              </h1>
              
              <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
                Aumente suas vendas e alcance novos clientes com estratégias personalizadas de marketing digital.
              </p>
              
              <div className="mt-6 sm:mt-8 lg:mt-12">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Desktop Animations - Only visible on larger screens */}
            <div className="hidden lg:block relative w-1/2 h-[600px]">
              {/* Background Glow Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/4 w-[200px] h-[200px] bg-cyan-500/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Animated Rocket in Center */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 5, -5, 0],
                  y: [-10, 10, -10]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="relative">
                  {/* Rocket Glow Effect */}
                  <div className="absolute -inset-8 bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-xl"></div>
                  
                  {/* Rocket Container */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-full border border-blue-500/30">
                    <Rocket className="w-12 h-12 text-blue-400" />
                    
                    {/* Rocket Flame */}
                    <motion.div
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-12"
                      initial={{ scaleY: 0.8 }}
                      animate={{ 
                        scaleY: [0.8, 1.2, 0.8],
                        opacity: [0.6, 0.8, 0.6]
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-b from-orange-500 via-yellow-500 to-transparent rounded-b-full blur-sm"></div>
                    </motion.div>
                  </div>
                  
                  {/* Particle Trail */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 w-2 h-2 rounded-full"
                      style={{
                        top: `${100 + i * 20}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                        x: [0, (i % 2 === 0 ? 10 : -10), 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                    >
                      <div className="w-full h-full bg-blue-400/50 rounded-full blur-sm"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Orbiting Elements */}
              {[
                { icon: Instagram, color: "from-pink-500 to-purple-500", delay: 0, radius: 180 },
                { icon: Facebook, color: "from-blue-500 to-blue-600", delay: 2, radius: 200 },
                { icon: Twitter, color: "from-sky-400 to-sky-500", delay: 4, radius: 160 },
                { icon: Youtube, color: "from-red-500 to-red-600", delay: 6, radius: 220 },
                { icon: LineChart, color: "from-green-500 to-emerald-500", delay: 1, radius: 190 },
                { icon: PieChart, color: "from-purple-500 to-indigo-500", delay: 3, radius: 170 },
                { icon: Share2, color: "from-orange-500 to-amber-500", delay: 5, radius: 210 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: -index * 2
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <motion.div
                    className="absolute"
                    style={{
                      left: `${Math.cos(index * (Math.PI * 2) / 7) * getResponsiveRadius(item.radius)}px`,
                      top: `${Math.sin(index * (Math.PI * 2) / 7) * getResponsiveRadius(item.radius)}px`,
                    }}
                    animate={{ 
                      rotate: -360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: -index * 2
                      },
                      scale: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      <motion.div 
                        className={`absolute -inset-3 bg-gradient-to-r ${item.color} rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-200`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.6, 0.4]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                      <div className="relative bg-gray-900/90 backdrop-blur-sm p-3 rounded-full border border-gray-700/50">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Enhanced Floating Particles */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{
                    x: Math.random() * 600 - 300,
                    y: Math.random() * 600 - 300,
                    scale: 0,
                    opacity: 0
                  }}
                  animate={{
                    x: Math.random() * 600 - 300,
                    y: Math.random() * 600 - 300,
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-1 h-1 bg-blue-500/50 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;