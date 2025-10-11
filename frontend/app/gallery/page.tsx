'use client';

import { useState, useEffect } from 'react';

export default function Gallery() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const galleryItems = [
    {
      title: "OpenClimate Dashboard",
      description: "Interactive dashboard for real-time disaster monitoring and alerts.",
      type: "image",
      src: "/images/openclimate-dashboard.jpg",
      alt: "OpenClimate AI dashboard for disaster management",
      icon: "🌍"
    },
    {
      title: "RoutiQ App Interface",
      description: "User interface for route optimization and traffic predictions.",
      type: "image",
      src: "/images/routiq-interface.jpg",
      alt: "RoutiQ traffic optimization app",
      icon: "🚗"
    },
    {
      title: "eNeza Marketplace Demo",
      description: "Screenshots of the e-commerce platform in action.",
      type: "image",
      src: "/images/eneza-marketplace.jpg",
      alt: "eNeza e-commerce platform demo",
      icon: "🛒"
    },
    {
      title: "Drone Prototype",
      description: "Early hardware prototype for autonomous UAV development.",
      type: "image",
      src: "/images/drone-prototype.jpg",
      alt: "Early drone hardware prototype",
      icon: "🚁"
    },
    {
      title: "University Project Presentation",
      description: "Presenting AI project at university for credibility and knowledge sharing.",
      type: "image",
      src: "/images/university-presentation.jpg",
      alt: "Presenting AI project at university",
      icon: "🎓"
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Mugabo</h1>
          <div className="space-x-6">
            <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Home</a>
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Contact</a>
            <button onClick={toggleTheme} className="ml-4 p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </header>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-8 text-center">Gallery</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-16 text-center max-w-4xl mx-auto">
            Visual journey through my projects, prototypes, and milestones. From AI dashboards to drone hardware, see the tech in action.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">{item.icon}</span>
                  </div>
                  {/* Placeholder for actual image when available */}
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-slate-500 dark:text-slate-400">Image Coming Soon</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-6">More visuals and updates as projects evolve!</p>
            <a
              href="/projects"
              className="bg-slate-600 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition text-lg"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
