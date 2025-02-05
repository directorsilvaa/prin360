import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

// Test user credentials
const TEST_USER = {
  email: "matheus@teste.com",
  password: "teste123"
};

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'register' | 'team' | 'blog' | 'about' | 'dashboard'>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string) => {
    if (email === TEST_USER.email && password === TEST_USER.password) {
      setIsAuthenticated(true);
      setCurrentView('dashboard');
    } else {
      alert('Credenciais inválidas! Use:\nEmail: matheus@teste.com\nSenha: teste123');
    }
  };

  if (currentView === 'login') {
    return <Login onRegisterClick={() => setCurrentView('register')} onBackClick={() => setCurrentView('home')} onLogin={handleLogin} />;
  }

  if (currentView === 'register') {
    return <Register onLoginClick={() => setCurrentView('login')} onBackClick={() => setCurrentView('home')} />;
  }

  if (currentView === 'dashboard') {
    if (!isAuthenticated) {
      setCurrentView('login');
      return null;
    }
    return <Dashboard />;
  }

  if (currentView === 'team') {
    return (
      <>
        <Navbar 
          onLoginClick={() => setCurrentView('login')} 
          onHomeClick={() => setCurrentView('home')}
          onTeamClick={() => setCurrentView('team')}
          onBlogClick={() => setCurrentView('blog')}
          onAboutClick={() => setCurrentView('about')}
        />
        <Team />
        <Footer />
      </>
    );
  }

  if (currentView === 'blog') {
    return (
      <>
        <Navbar 
          onLoginClick={() => setCurrentView('login')} 
          onHomeClick={() => setCurrentView('home')}
          onTeamClick={() => setCurrentView('team')}
          onBlogClick={() => setCurrentView('blog')}
          onAboutClick={() => setCurrentView('about')}
        />
        <Blog />
        <Footer />
      </>
    );
  }

  if (currentView === 'about') {
    return (
      <>
        <Navbar 
          onLoginClick={() => setCurrentView('login')} 
          onHomeClick={() => setCurrentView('home')}
          onTeamClick={() => setCurrentView('team')}
          onBlogClick={() => setCurrentView('blog')}
          onAboutClick={() => setCurrentView('about')}
        />
        <About />
        <Footer />
      </>
    );
  }

  // Default to Home view
  return (
    <>
      <Navbar 
        onLoginClick={() => setCurrentView('login')} 
        onHomeClick={() => setCurrentView('home')}
        onTeamClick={() => setCurrentView('team')}
        onBlogClick={() => setCurrentView('blog')}
        onAboutClick={() => setCurrentView('about')}
      />
      <Home onAboutClick={() => setCurrentView('about')} />
      <Footer />
    </>
  );
}

export default App;