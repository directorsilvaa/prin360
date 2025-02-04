import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <div className="relative pt-20 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content - Now first on mobile */}
            <motion.div 
              className="relative z-10 w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
                <span className="text-sm text-blue-400">Transforme seu negócio digital</span>
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Marketing Digital</span>
                <span className="block text-blue-500 mt-1">para sua empresa</span>
              </h1>
              
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0">
                Aumente suas vendas e alcance novos clientes com estratégias personalizadas de marketing digital.
              </p>
              
              <div className="mt-8 sm:mt-12">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Floating Devices */}
            <div className="relative w-full lg:w-1/2 max-w-[280px] sm:max-w-[320px] lg:max-w-none mx-auto">
              <div className="relative w-full aspect-square">
                {/* Center iPhone */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl"></div>
                    <div className="relative w-[120px] h-[240px] sm:w-[140px] sm:h-[280px] lg:w-[160px] lg:h-[320px] bg-black rounded-[2rem] p-3 shadow-2xl border-4 border-gray-800">
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
                      {/* Instagram Feed Mockup */}
                      <div className="h-full rounded-[1.5rem] overflow-hidden bg-gray-900">
                        {/* Instagram Header */}
                        <div className="p-2 border-b border-gray-800 flex items-center">
                          <Instagram className="w-4 h-4 text-pink-500 mr-1" />
                          <span className="text-white text-[10px] font-semibold">Instagram</span>
                        </div>
                        {/* Instagram Content */}
                        <div className="grid grid-cols-2 gap-0.5">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="aspect-square bg-gray-800 animate-pulse" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Orbiting Social Apps */}
                {[...Array(2)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: -index * 7.5
                    }}
                    style={{
                      transformOrigin: "center",
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        left: `${Math.cos(index * Math.PI) * 80}px`,
                        top: `${Math.sin(index * Math.PI) * 80}px`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: -index * 7.5
                      }}
                    >
                      {index === 0 ? (
                        // Instagram App
                        <div className="relative w-[60px] h-[120px] sm:w-[70px] sm:h-[140px] lg:w-[80px] lg:h-[160px] bg-black rounded-[1.5rem] p-2 shadow-2xl border-2 border-gray-800">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
                          <div className="h-full rounded-[1.2rem] overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 p-0.5">
                            <div className="h-full bg-black rounded-[1rem] p-2">
                              <Instagram className="w-3 h-3 text-pink-500 mb-1" />
                              <div className="space-y-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="h-1 bg-gray-800 rounded animate-pulse" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Facebook App
                        <div className="relative w-[60px] h-[120px] sm:w-[70px] sm:h-[140px] lg:w-[80px] lg:h-[160px] bg-black rounded-[1.5rem] p-2 shadow-2xl border-2 border-gray-800">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
                          <div className="h-full rounded-[1.2rem] overflow-hidden bg-blue-600 p-0.5">
                            <div className="h-full bg-black rounded-[1rem] p-2">
                              <Facebook className="w-3 h-3 text-blue-500 mb-1" />
                              <div className="space-y-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="h-1 bg-gray-800 rounded animate-pulse" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-pink-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}