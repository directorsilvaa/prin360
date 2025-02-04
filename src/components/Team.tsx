import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Tammy Silva",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "10+ anos de experiência em marketing digital e gestão de equipes.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:tammy@print360.com"
      }
    },
    {
      name: "Letícia Quevedo",
      role: "Head de Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Especialista em estratégias de marketing digital e growth.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:leticia@print360.com"
      }
    },
    {
      name: "Danilo Arpi",
      role: "Diretor de Criação",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Expert em design e direção de arte para marcas digitais.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:danilo@print360.com"
      }
    },
    {
      name: "Daniel Buck",
      role: "Head de Tecnologia",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      bio: "Especialista em desenvolvimento web e automação de marketing.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:daniel@print360.com"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-24 pb-16 relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Conheça Nosso{' '}
              <span className="relative">
                <span className="relative z-10 text-blue-500">Time</span>
                <div className="absolute -inset-1 bg-blue-500/20 blur-sm rounded-lg"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Profissionais apaixonados por transformação digital e resultados extraordinários
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl hover:bg-gray-800/80 transition duration-300">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full ring-2 ring-gray-800 group-hover:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        <Linkedin className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        <Twitter className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={member.social.email}
                        className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        <Mail className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Quer fazer parte do nosso time?
            </h2>
            <p className="text-gray-400 mb-8">
              Estamos sempre em busca de talentos apaixonados por marketing digital
            </p>
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group">
              Ver Vagas Abertas
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}