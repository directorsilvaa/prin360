import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Users, MessageSquare, Globe, Smartphone, Layout } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const services = [
  {
    title: "Tráfego Pago",
    description: "Gestão dos seus anúncios online no Google, Instagram, LinkedIn, Pinterest, YouTube e mais",
    features: [
      "Atraia seus clientes para seu funil de vendas",
      "Monitore seu atendimento com oportunidades de venda",
      "Tenha mais previsibilidade e mensure o retorno do investimento"
    ],
    icon: Globe
  },
  {
    title: "CRM",
    description: "Gerencie o relacionamento com seu cliente em um só lugar",
    features: [
      "Planeje todo o seu funil de vendas",
      "Mantenha conexão com seus clientes e venda mais",
      "Faça agenda, dispare emails e campanhas promocionais"
    ],
    icon: Users
  },
  {
    title: "Sites e Landing Pages",
    description: "Uma página web otimizada para converter visitantes em leads de alta qualidade, aumentando suas vendas",
    features: [
      "Design profissional e responsivo",
      "Otimização para SEO",
      "Alta velocidade de carregamento"
    ],
    icon: Layout
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0F19] relative overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              O que a{' '}
              <span className="relative">
                <span className="relative z-10 text-blue-500">Print 360</span>
                <div className="absolute -inset-1 bg-blue-500/20 blur-sm rounded-lg"></div>
              </span>{' '}
              pode fazer por você?
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Soluções completas de marketing digital para impulsionar seu negócio
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm group">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15k+", label: "Clientes Ativos" },
              { value: "98%", label: "Satisfação" },
              { value: "24/7", label: "Suporte" },
              { value: "10+", label: "Anos de Experiência" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-gray-400 mb-8">
              Agende uma consulta gratuita com nossos especialistas
            </p>
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group">
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}