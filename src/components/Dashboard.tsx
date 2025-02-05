import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard,
  BarChart2,
  Users,
  Calendar,
  Settings,
  Bell,
  MessageSquare,
  FileText,
  Briefcase,
  PieChart,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Clock,
  CheckSquare,
  Lightbulb,
  Plus,
  Search,
  Menu,
  X
} from 'lucide-react';
import Chat from './Chat';

// Test user data
const testUser = {
  name: "Matheus Silva",
  email: "matheus@teste.com",
  company: "Empresa Teste LTDA",
  plan: "Premium",
  tasks: [
    {
      id: 1,
      title: "Revisar campanha de marketing",
      status: "pending",
      priority: "high",
      dueDate: "2024-03-20"
    },
    {
      id: 2,
      title: "Preparar relatório mensal",
      status: "in-progress",
      priority: "medium",
      dueDate: "2024-03-25"
    },
    {
      id: 3,
      title: "Reunião com equipe de design",
      status: "completed",
      priority: "low",
      dueDate: "2024-03-15"
    }
  ],
  ideas: [
    {
      id: 1,
      title: "Nova estratégia para redes sociais",
      description: "Implementar série de conteúdos educativos",
      status: "new"
    },
    {
      id: 2,
      title: "Campanha sazonal",
      description: "Promoções especiais para o inverno",
      status: "in-review"
    }
  ],
  stats: {
    visits: 245,
    increase: 12.5,
    conversion: 5.4,
    roi: 2.8
  }
};

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: CheckSquare, label: 'Tarefas', id: 'tasks' },
  { icon: Lightbulb, label: 'Ideias', id: 'ideas' },
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Calendar, label: 'Calendário', id: 'calendar' },
  { icon: Users, label: 'Equipe', id: 'team' },
  { icon: FileText, label: 'Documentos', id: 'documents' },
  { icon: Briefcase, label: 'Projetos', id: 'projects' }
];

export default function Dashboard() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [newIdea, setNewIdea] = useState({ title: '', description: '' });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    // Add task logic here
    setNewTask('');
  };

  const handleAddIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdea.title.trim() || !newIdea.description.trim()) return;
    // Add idea logic here
    setNewIdea({ title: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/20 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setShowMobileSidebar(!showMobileSidebar)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900/90 rounded-lg text-gray-400 hover:text-white transition-colors"
      >
        {showMobileSidebar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900/90 backdrop-blur-xl transform transition-transform duration-300 ease-in-out z-40 ${
        showMobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Print 360</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentView(link.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === link.id
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">{testUser.name}</div>
                <div className="text-xs text-gray-400">{testUser.email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="relative min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-30 bg-gray-900/50 backdrop-blur-xl border-b border-gray-800">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold text-white">
                    {sidebarLinks.find(link => link.id === currentView)?.label}
                  </h1>
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setShowChat(!showChat)}
                    className="p-2 text-gray-400 hover:text-white relative group"
                  >
                    <MessageSquare className="w-6 h-6" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                  </button>
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 text-gray-400 hover:text-white relative group"
                  >
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white">
                    <Settings className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-4 sm:p-6 lg:p-8">
            {currentView === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Cards */}
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg p-6 border border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400">Visitas Hoje</p>
                      <h3 className="text-2xl font-bold text-white mt-1">
                        {testUser.stats.visits}
                      </h3>
                      <div className="flex items-center text-green-400 text-sm mt-1">
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        <span>+{testUser.stats.increase}%</span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Eye className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>

                {/* Add more dashboard content here */}
              </div>
            )}

            {currentView === 'tasks' && (
              <div className="space-y-6">
                {/* Add Task Form */}
                <form onSubmit={handleAddTask} className="bg-gray-900/50 backdrop-blur-xl rounded-lg p-6 border border-gray-800">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="Adicionar nova tarefa..."
                      className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </form>

                {/* Tasks List */}
                <div className="space-y-4">
                  {testUser.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-gray-900/50 backdrop-blur-xl rounded-lg p-4 border border-gray-800"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-medium">{task.title}</h3>
                          <p className="text-sm text-gray-400">Vence em: {task.dueDate}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          task.priority === 'high' ? 'bg-red-500/10 text-red-400' :
                          task.priority === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                          'bg-green-500/10 text-green-400'
                        }`}>
                          {task.priority}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentView === 'ideas' && (
              <div className="space-y-6">
                {/* Add Idea Form */}
                <form onSubmit={handleAddIdea} className="bg-gray-900/50 backdrop-blur-xl rounded-lg p-6 border border-gray-800">
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={newIdea.title}
                      onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
                      placeholder="Título da ideia..."
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      value={newIdea.description}
                      onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
                      placeholder="Descreva sua ideia..."
                      className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Adicionar Ideia
                    </button>
                  </div>
                </form>

                {/* Ideas List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testUser.ideas.map((idea) => (
                    <div
                      key={idea.id}
                      className="bg-gray-900/50 backdrop-blur-xl rounded-lg p-6 border border-gray-800"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-white font-medium mb-2">{idea.title}</h3>
                          <p className="text-gray-400">{idea.description}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm ${
                          idea.status === 'new' ? 'bg-green-500/10 text-green-400' :
                          'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {idea.status === 'new' ? 'Nova' : 'Em Análise'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Chat Section */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-96 z-50">
          <Chat />
        </div>
      )}
    </div>
  );
}