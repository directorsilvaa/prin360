import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F19] pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
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
              <span className="ml-2 text-xl font-bold text-white">Print 360</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforme sua presença digital com estratégias personalizadas de marketing e gestão de redes sociais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              {['Sobre Nós', 'Serviços', 'Blog', 'Carreiras', 'Contato'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-4">
              {[
                'Marketing Digital',
                'Gestão de Redes Sociais',
                'Criação de Sites',
                'Tráfego Pago',
                'Consultoria'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+551199999999" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>(11) 9 9999-9999</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@print360.com" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contato@print360.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Av. Paulista, 1000<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="relative border-t border-gray-800 pt-8 pb-6 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold mb-4">Inscreva-se em nossa newsletter</h3>
            <p className="text-gray-400 mb-6">
              Receba as últimas novidades e dicas de marketing digital
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Print 360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}