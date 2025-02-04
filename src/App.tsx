import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Team from './components/Team';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'register' | 'team' | 'blog' | 'about'>('home');

  if (currentView === 'login') {
    return <Login onRegisterClick={() => setCurrentView('register')} onBackClick={() => setCurrentView('home')} />;
  }

  if (currentView === 'register') {
    return <Register onLoginClick={() => setCurrentView('login')} onBackClick={() => setCurrentView('home')} />;
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
      <Home />
    </>
  );
}

export default App;