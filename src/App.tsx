import React, { useState, useEffect } from 'react';
import { Menu, X, Laptop, Brain, Target, Rocket, Mail, Users2, Zap, BarChart3, MessageCircle, ChevronLeft, ChevronRight, Globe, Sparkles, Instagram, Facebook, Youtube, Twitter, Star, ArrowRight, TrendingUp, LineChart, Users, Share2 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLogoSet, setCurrentLogoSet] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      icon: <Globe className="w-16 h-16 text-sky-500 group-hover:text-sky-400 transition-all duration-300" />,
      title: 'Gerador de Páginas',
      description: 'Crie landing pages profissionais em minutos com nosso construtor intuitivo.'
    },
    {
      icon: <Users2 className="w-16 h-16 text-sky-500 group-hover:text-sky-400 transition-all duration-300" />,
      title: 'Gestão de Leads e CRM',
      description: 'Gerencie seus leads e clientes em um só lugar com automação inteligente.'
    },
    {
      icon: <Mail className="w-16 h-16 text-sky-500 group-hover:text-sky-400 transition-all duration-300" />,
      title: 'Automação de E-mails',
      description: 'Automatize suas campanhas de e-mail com segmentação avançada.'
    },
    {
      icon: <Brain className="w-16 h-16 text-sky-500 group-hover:text-sky-400 transition-all duration-300" />,
      title: 'IA para Conteúdo',
      description: 'Gere conteúdo persuasivo automaticamente com nossa IA.'
    },
    {
      icon: <Target className="w-16 h-16 text-sky-500 group-hover:text-sky-400 transition-all duration-300" />,
      title: 'Gestão de Anúncios',
      description: 'Otimize suas campanhas publicitárias com análise em tempo real.'
    },
    {
      icon: <Rocket className="w-16 h-16 text-sky-500 group-hover:text-sky-400 transition-all duration-300" />,
      title: 'Automação de Marketing',
      description: 'Automatize suas estratégias de marketing com fluxos inteligentes.'
    }
  ];

  const results = [
    {
      icon: <TrendingUp className="w-12 h-12 text-sky-400" />,
      number: "300%",
      text: "Aumento médio em vendas",
      description: "Nossos clientes experimentam um crescimento significativo"
    },
    {
      icon: <Users className="w-12 h-12 text-sky-400" />,
      number: "50k+",
      text: "Leads Gerados",
      description: "Leads qualificados para nossos clientes"
    },
    {
      icon: <LineChart className="w-12 h-12 text-sky-400" />,
      number: "90%",
      text: "Taxa de Retenção",
      description: "Clientes satisfeitos que continuam conosco"
    },
    {
      icon: <Share2 className="w-12 h-12 text-sky-400" />,
      number: "1M+",
      text: "Alcance Social",
      description: "Pessoas alcançadas em campanhas"
    }
  ];

  const socialMediaServices = [
    {
      icon: <Instagram className="w-16 h-16 text-sky-400" />,
      title: "Instagram",
      description: "Estratégias personalizadas para engajamento e crescimento orgânico."
    },
    {
      icon: <Facebook className="w-16 h-16 text-sky-400" />,
      title: "Facebook",
      description: "Gestão de comunidade e campanhas direcionadas para seu público."
    },
    {
      icon: <Youtube className="w-16 h-16 text-sky-400" />,
      title: "YouTube",
      description: "Produção e otimização de conteúdo em vídeo para maior alcance."
    },
    {
      icon: <Twitter className="w-16 h-16 text-sky-400" />,
      title: "Twitter",
      description: "Estratégias de comunicação rápida e marketing em tempo real."
    }
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      text: "A Print360Graus transformou completamente nossa presença digital. Os resultados superaram todas as expectativas!"
    },
    {
      name: "Carlos Santos",
      role: "Diretor de Marketing, InnovateCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      text: "Profissionalismo e resultados impressionantes. Nossa empresa cresceu 200% em 6 meses!"
    },
    {
      name: "Maria Oliveira",
      role: "Fundadora, EcoStyle",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      text: "A equipe é extremamente competente e dedicada. Os resultados falam por si mesmos!"
    }
  ];

  const partnerLogos = [
    'https://cdn.worldvectorlogo.com/logos/apple-13.svg',
    'https://cdn.worldvectorlogo.com/logos/samsung-5.svg',
    'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
    'https://cdn.worldvectorlogo.com/logos/google-2015.svg',
    'https://cdn.worldvectorlogo.com/logos/amazon-2.svg',
    'https://cdn.worldvectorlogo.com/logos/intel-2.svg',
    'https://cdn.worldvectorlogo.com/logos/ibm.svg',
    'https://cdn.worldvectorlogo.com/logos/oracle-6.svg',
    'https://cdn.worldvectorlogo.com/logos/cisco-1.svg'
  ];

  const logosPerPage = 3;
  const totalSets = Math.ceil(partnerLogos.length / logosPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoSet((prev) => (prev + 1) % totalSets);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSets]);

  const getCurrentLogos = () => {
    const startIdx = currentLogoSet * logosPerPage;
    return partnerLogos.slice(startIdx, startIdx + logosPerPage);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 animate-fade-in">
              <span className="text-sky-500 text-2xl font-bold text-glow">Print360Graus</span>
            </div>
            
            <div className="hidden md:flex md:items-center md:justify-center flex-1">
              <div className="flex items-baseline space-x-8">
                {['Home', 'Serviços', 'Sobre', 'Portfolio'].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white hover:text-sky-400 px-3 py-2 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a
                href="https://wa.me/SEUNUMERO"
                className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-6 rounded-full inline-flex items-center transition-all duration-300 hover:scale-105 animate-glow"
              >
                Fale Conosco
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-sky-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full glass-effect">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {['Home', 'Serviços', 'Sobre', 'Portfolio'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-sky-400 block px-3 py-2 text-base font-medium transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="https://wa.me/SEUNUMERO"
                  className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center w-full transition-all duration-300"
                >
                  Fale Conosco
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center text-white relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sky-400 mb-4 text-lg md:text-xl animate-float">
              Agência de Marketing Digital
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              O sucesso da sua marca é nossa <span className="text-sky-400 text-glow">estratégia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Transformamos sua presença digital em resultados reais
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/SEUNUMERO"
                className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all duration-300 hover:scale-105 animate-glow"
              >
                Fale Conosco
                <MessageCircle className="ml-2" />
              </a>
              <a
                href="#services"
                className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black font-bold py-4 px-8 rounded-full inline-flex items-center transition-all duration-300"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow animate-fade-in">
              Nossas Soluções
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Ferramentas poderosas para impulsionar seu negócio digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-sky-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gray-800/50 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
              Transformamos Ideias em Resultados
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Números que comprovam nossa excelência em transformação digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800/50 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {result.icon}
                </div>
                <h3 className="text-4xl font-bold text-sky-400 mb-2">{result.number}</h3>
                <p className="text-white font-semibold mb-2">{result.text}</p>
                <p className="text-gray-400">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Management Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
              Gestão de Mídias Sociais
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Potencialize sua presença nas redes sociais com estratégias personalizadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800/50 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-glow">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Histórias reais de sucesso e transformação digital
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500">
                      <div className="flex items-center mb-8">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                          <p className="text-sky-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="inline-block w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-lg italic">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-sky-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16 text-glow animate-fade-in">
            Nossos Parceiros
          </h2>
          <div className="relative">
            <button 
              onClick={() => setCurrentLogoSet((prev) => (prev - 1 + totalSets) % totalSets)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-sky-500/20 p-3 rounded-full text-white hover:bg-sky-500/40 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden mx-16">
              <div className="flex justify-between items-center h-32 transition-all duration-500 ease-in-out">
                {getCurrentLogos().map((logo, index) => (
                  <div 
                    key={index} 
                    className="w-1/3 px-8 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <img 
                      src={logo} 
                      alt={`Partner logo ${index + 1}`} 
                      className="h-20 object-contain mx-auto transition-all duration-500 hover:scale-110 filter brightness-0 invert opacity-70 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => setCurrentLogoSet((prev) => (prev + 1) % totalSets)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-sky-500/20 p-3 rounded-full text-white hover:bg-sky-500/40 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-blue-900/50 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Print360Graus</h3>
              <p className="text-gray-300">
                Transformando ideias em realidade digital. Sua marca, nossa paixão.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Home</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Serviços</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Sobre</a></li>
                <li><a href="#portfolio" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contato</h4>
              <div className="space-y-3">
                <p className="flex items-center text-gray-300">
                  <Mail className="mr-3 text-blue-300" /> contato@print360graus.com
                </p>
                <p className="flex items-center text-gray-300">
                  <MessageCircle className="mr-3 text-blue-300" /> WhatsApp
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-900/30 p-3 rounded-full text-blue-300 hover:bg-blue-900/50 transition-colors duration-300">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" className="bg-blue-900/30 p-3 rounded-full text-blue-300 hover:bg-blue-900/50 transition-colors duration-300">
                  <Sparkles className="w-6 h-6" />
                </a>
                <a href="#" className="bg-blue-900/30 p-3 rounded-full text-blue-300 hover:bg-blue-900/50 transition-colors duration-300">
                  <Zap className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-900/50 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Print360Graus. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;