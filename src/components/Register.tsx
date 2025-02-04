import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, User, Building2 } from 'lucide-react';

interface RegisterProps {
  onLoginClick: () => void;
  onBackClick: () => void;
}

export default function Register({ onLoginClick, onBackClick }: RegisterProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative">
        {/* Card container with glass effect */}
        <div className="relative bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800/50 p-4 sm:p-6 md:p-8 overflow-hidden mx-4 sm:mx-0">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50"></div>

          {/* Content */}
          <div className="relative space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px] mb-4">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" className="stroke-current" strokeWidth="2"/>
                    <path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0002 15C13.8424 15 15.6532 15.4851 17.2497 16.4065C18.8461 17.3279 20.172 18.6533 21.0941 20.2493" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Criar Conta</h2>
              <p className="text-sm sm:text-base text-gray-400">Preencha os dados para começar</p>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Nome Completo
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/90 border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Seu nome completo"
                      />
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Company field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Empresa
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/90 border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Nome da sua empresa"
                      />
                      <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/90 border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                        placeholder="seu@email.com"
                      />
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Senha
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/90 border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Sua senha"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Confirm Password field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Confirmar Senha
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/90 border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base"
                        placeholder="Confirme sua senha"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and conditions */}
              <div className="flex items-start gap-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="rounded border-gray-600 text-blue-500 focus:ring-blue-500 bg-gray-900 w-4 h-4"
                  />
                </div>
                <label htmlFor="terms" className="text-sm text-gray-400">
                  Eu concordo com os{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Termos de Serviço
                  </a>
                  {' '}e{' '}
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Política de Privacidade
                  </a>
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 rounded-lg leading-none flex items-center justify-center">
                  <span className="text-white font-medium group-hover:text-blue-200 transition duration-200 text-sm sm:text-base">
                    Criar Conta
                  </span>
                </div>
              </button>
            </form>

            {/* Footer links */}
            <div className="pt-4 text-center space-y-3 sm:space-y-4">
              <p className="text-gray-400 text-sm">
                Já tem uma conta?{' '}
                <button 
                  onClick={onLoginClick}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Fazer login
                </button>
              </p>
              <button
                onClick={onBackClick}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o início
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}