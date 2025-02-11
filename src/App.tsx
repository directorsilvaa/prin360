import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Brain, Zap, ArrowRight, Target, Users, Lightbulb, MessageSquare, Play, Palette, Globe, Code, Video, BarChart3, Share2, Briefcase, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Send } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const portfolioItems = [
    {
      id: 1,
      title: "Redesign de E-commerce",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      description: "Plataforma moderna de e-commerce com UX aprimorada"
    },
    {
      id: 2,
      title: "Vídeo Institucional Corporativo",
      category: "video",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
      description: "Vídeo cinematográfico de identidade corporativa"
    },
    {
      id: 3,
      title: "Fotografia de Produtos",
      category: "design",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
      description: "Fotografia e edição profissional de produtos"
    },
    {
      id: 4,
      title: "Campanha de Marketing",
      category: "design",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      description: "Campanha integrada de marketing digital"
    },
    {
      id: 5,
      title: "Vídeo de Eventos",
      category: "video",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
      description: "Cobertura dinâmica de eventos e edição"
    },
    {
      id: 6,
      title: "Website Empresarial",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
      description: "Desenvolvimento de website corporativo responsivo"
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'Todos os Projetos', icon: Globe },
    { id: 'web', label: 'Websites', icon: Rocket },
    { id: 'video', label: 'Produção de Vídeo', icon: Play },
    { id: 'design', label: 'Design', icon: Palette }
  ];

  const navItems = [
    { icon: Rocket, text: 'Início', sectionId: 'home' },
    { icon: Brain, text: 'Sobre', sectionId: 'about' },
    { icon: Zap, text: 'Serviços', sectionId: 'services' },
    { icon: Palette, text: 'Portfólio', sectionId: 'portfolio' },
    { icon: MessageSquare, text: 'Contato', sectionId: 'contact' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-gray-900/80 backdrop-blur-lg' : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/src/img/logo.png" alt="Print 360 Logo" className="h-8 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ icon: Icon, text, sectionId }) => (
                <button
                  key={text}
                  onClick={() => scrollToSection(sectionId)}
                  className="flex items-center space-x-2 group relative px-4 py-2 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-mint transition-transform group-hover:rotate-12" />
                  <span className="relative">
                    {text}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-mint transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="relative group px-6 py-2 overflow-hidden rounded-full">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-mint via-cyan-400 to-mint bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
                <span className="relative text-gray-900 font-medium">Área do cliente</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-mint"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-4 space-y-4">
              {navItems.map(({ text, sectionId }) => (
                <button
                  key={text}
                  onClick={() => scrollToSection(sectionId)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-mint transition-colors"
                >
                  {text}
                </button>
              ))}
              <button className="w-full bg-mint text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-mint/90 transition-colors">
                Área do cliente
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-mint/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-40 pb-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                SOLUÇÕES<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-blue-400">
                  DIGITAIS E
                </span><br />
                PERFORMANCE
              </h1>
              <p className="text-xl text-gray-400 max-w-lg">
                Transforme sua presença digital com estratégias inovadoras de marketing. 
                Alcance resultados extraordinários com nossa expertise em crescimento digital.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all">
                  COMECE AGORA
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="flex items-center gap-2 border border-gray-700 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800/50 transition-colors"
                >
                  NOSSOS SERVIÇOS
                </button>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="Profissional de Marketing Digital" 
                  className="w-full h-80 object-cover rounded-2xl transform translate-y-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                  alt="Estratégia de Marketing" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-20" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="relative py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-mint/10 rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-blue-400"> Print 360 </span>
              </h2>
              <p className="text-xl text-gray-400">
                Somos uma agência digital focada em resultados. Nossa missão é impulsionar o crescimento do seu negócio através de estratégias digitais inovadoras e eficientes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-bold mb-4">Missão</h3>
                <p className="text-gray-400">
                  Transformar negócios através de soluções digitais inovadoras e resultados mensuráveis.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-bold mb-4">Valores</h3>
                <p className="text-gray-400">
                  Comprometimento, transparência, inovação e foco total na satisfação do cliente.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visão</h3>
                <p className="text-gray-400">
                  Ser referência em transformação digital e crescimento sustentável de negócios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-24 overflow-hidden bg-gray-800/30">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-mint/10 rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-blue-400"> Serviços </span>
                Digitais
              </h2>
              <p className="text-xl text-gray-400">
                Oferecemos soluções completas para impulsionar sua presença digital e alcançar resultados extraordinários.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-mint/50 transition-colors group">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mint/20 transition-colors">
                  <Globe className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-bold mb-4">Websites Profissionais</h3>
                <p className="text-gray-400 mb-6">
                  Desenvolvimento de sites responsivos e otimizados para conversão.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-mint" />
                    <span>Design Responsivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-mint" />
                    <span>Otimização SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-mint" />
                    <span>Alta Performance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-mint/50 transition-colors group">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mint/20 transition-colors">
                  <Video className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-bold mb-4">Produção de Vídeo</h3>
                <p className="text-gray-400 mb-6">
                  Criação de conteúdo audiovisual profissional para sua marca.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Play className="w-4 h-4 text-mint" />
                    <span>Vídeos Institucionais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-mint" />
                    <span>Conteúdo para Redes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-mint" />
                    <span>Campanhas Publicitárias</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-mint/50 transition-colors group">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mint/20 transition-colors">
                  <BarChart3 className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-bold mb-4">Marketing Digital</h3>
                <p className="text-gray-400 mb-6">
                  Estratégias completas para aumentar sua presença online.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-mint" />
                    <span>Gestão de Redes Sociais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-mint" />
                    <span>Marketing de Conteúdo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-mint" />
                    <span>Tráfego Pago</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-mint/10 rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nosso
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-blue-400"> Portfólio </span>
              </h2>
              <p className="text-xl text-gray-400">
                Conheça alguns dos projetos que desenvolvemos para nossos clientes.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterButtons.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                    activeFilter === id
                      ? 'bg-mint text-gray-900'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-24 overflow-hidden bg-gray-800/30">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-mint/10 rounded-full filter blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Entre em
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-blue-400"> Contato </span>
                Conosco
              </h2>
              <p className="text-xl text-gray-400">
                Estamos prontos para transformar suas ideias em realidade. Entre em contato e vamos conversar sobre seu projeto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent transition-colors text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent transition-colors text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent transition-colors text-white"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent transition-colors text-white resize-none"
                      placeholder="Descreva seu projeto ou dúvida..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-mint to-blue-400 text-gray-900 font-medium py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Enviar mensagem
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-mint" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Localização</h4>
                        <p className="text-gray-400">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-mint" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Telefone</h4>
                        <p className="text-gray-400">+55 (11) 9999-9999</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-mint" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">E-mail</h4>
                        <p className="text-gray-400">contato@print360.com.br</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50">
                  <h3 className="text-2xl font-bold mb-6">Horário de Atendimento</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Segunda - Sexta</span>
                      <span>09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sábado</span>
                      <span>09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Domingo</span >
                      <span className="text-gray-500">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
          aria-label="Contato via WhatsApp"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </a>

        {/* Footer */}
        <footer className="relative bg-gray-900/80 backdrop-blur-xl border-t border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="space-y-6">
                <img src="/src/img/logo.png" alt="Print 360 Logo" className="h-8 w-auto" />
                <p className="text-gray-400">
                  Transformando ideias em realidade através de soluções digitais inovadoras e resultados extraordinários.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mint hover:text-gray-900 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mint hover:text-gray-900 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mint hover:text-gray-900 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mint hover:text-gray-900 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
                <ul className="space-y-4">
                  {navItems.map(({ text, sectionId }) => (
                    <li key={sectionId}>
                      <button
                        onClick={() => scrollToSection(sectionId)}
                        className="text-gray-400 hover:text-mint transition-colors"
                      >
                        {text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                      Desenvolvimento Web
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                      Marketing Digital
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                      Design Gráfico
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                      Produção de Vídeo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                      Consultoria
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
                <p className="text-gray-400 mb-4">
                  Inscreva-se para receber novidades e conteúdo exclusivo.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent transition-colors text-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-mint text-gray-900 font-medium py-3 rounded-lg hover:bg-mint/90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Inscrever-se
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Print 360. Todos os direitos reservados.
                </p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                    Política de Privacidade
                  </a>
                  <a href="#" className="text-gray-400 hover:text-mint transition-colors">
                    Termos de Uso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;