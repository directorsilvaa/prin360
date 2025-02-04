import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag, User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Como aumentar suas vendas com Marketing Digital em 2024",
    excerpt: "Descubra as estratégias mais eficientes para alavancar suas vendas através do marketing digital no próximo ano.",
    category: "Marketing Digital",
    author: {
      name: "Ana Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    date: "15 Mar 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["Marketing Digital", "Vendas", "Estratégia"]
  },
  {
    id: 2,
    title: "Tendências de Social Media para 2024",
    excerpt: "As principais tendências que vão dominar as redes sociais no próximo ano e como se preparar para elas.",
    category: "Redes Sociais",
    author: {
      name: "Pedro Santos",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    date: "12 Mar 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80",
    tags: ["Redes Sociais", "Tendências", "Digital"]
  },
  {
    id: 3,
    title: "SEO: O guia completo para 2024",
    excerpt: "Tudo o que você precisa saber para otimizar seu site e alcançar as primeiras posições no Google.",
    category: "SEO",
    author: {
      name: "Lucas Costa",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    },
    date: "10 Mar 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    tags: ["SEO", "Google", "Otimização"]
  }
];

const categories = [
  "Marketing Digital",
  "Redes Sociais",
  "SEO",
  "E-commerce",
  "Branding",
  "Vendas"
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Blog da Print 360
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Dicas, estratégias e novidades sobre Marketing Digital
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-lg rounded-lg p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Search Input */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar artigos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="flex-shrink-0">
                    <select
                      value={selectedCategory || ''}
                      onChange={(e) => setSelectedCategory(e.target.value || null)}
                      className="w-full sm:w-auto px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Todas as categorias</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-lg rounded-lg overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300 flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-400">{post.author.name}</span>
                    </div>
                    
                    {/* Read More Button */}
                    <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-lg rounded-lg p-8 text-center">
                <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">
                  Inscreva-se na nossa newsletter
                </h2>
                <p className="text-gray-400 mb-6">
                  Receba as últimas novidades e dicas de marketing digital diretamente no seu e-mail
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}