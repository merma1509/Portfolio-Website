'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [theme, setTheme] = useState('light');
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const skillCategories = [
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      opacity: "bg-slate-900/10",
      textOpacity: "text-slate-800/90",
      borderOpacity: "border-slate-200/30",
      items: [
        { name: "Advanced Predictive Analytics", level: 92, highlight: true },
        { name: "Deep Learning Architecture Design", level: 88, highlight: true },
        { name: "Production ML Pipeline Development", level: 90, highlight: true }
      ]
    },
    {
      category: "IoT & Cyber-Physical Systems",
      icon: "🌐",
      opacity: "bg-slate-800/8",
      textOpacity: "text-slate-700/80",
      borderOpacity: "border-slate-200/25",
      items: [
        { name: "Industrial IoT Network Architecture", level: 87, highlight: true },
        { name: "Real-Time Embedded System Design", level: 85, highlight: true },
        { name: "Cyber-Physical Security Protocols", level: 83, highlight: true }
      ]
    },
    {
      category: "Cybersecurity",
      icon: "🔒",
      opacity: "bg-slate-700/6",
      textOpacity: "text-slate-600/70",
      borderOpacity: "border-slate-200/20",
      items: [
        { name: "Advanced Threat Detection Systems", level: 91, highlight: true },
        { name: "Zero-Trust Network Architecture", level: 89, highlight: true },
        { name: "Vulnerability Assessment & Penetration Testing", level: 87, highlight: true }
      ]
    },
    {
      category: "SpaceTech & Drones",
      icon: "🚀",
      opacity: "bg-slate-600/4",
      textOpacity: "text-slate-500/60",
      borderOpacity: "border-slate-200/15",
      items: [
        { name: "Autonomous UAV Navigation Systems", level: 85, highlight: true },
        { name: "Satellite Communication Protocols", level: 82, highlight: true },
        { name: "Hardware-Software Integration for Aerospace", level: 88, highlight: true }
      ]
    },
    {
      category: "Business & Leadership",
      icon: "💼",
      opacity: "bg-slate-500/3",
      textOpacity: "text-slate-400/50",
      borderOpacity: "border-slate-200/10",
      items: [
        { name: "Technology Innovation Strategy", level: 93, highlight: true },
        { name: "Cross-Functional Team Leadership", level: 90, highlight: true },
        { name: "Strategic Partnership Development", level: 88, highlight: true }
      ]
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 p-4 sm:p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
            <a href="/" className="hover:opacity-80 transition-opacity">Mugabo</a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Home</a>
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors px-3 py-2">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-3 py-2">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-110"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-2 pt-4">
              <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-3 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-8 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent leading-tight">
              Skills & Expertise
            </h1>
            <p className="text-base sm:text-lg xl:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Technical proficiencies built through hands-on experience, academic excellence, and continuous innovation across multiple domains
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {skillCategories.map((skill, index) => (
              <div
                key={index}
                className={`relative ${skill.opacity} dark:bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border ${skill.borderOpacity} dark:border-opacity-20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center mb-6 sm:mb-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-slate-800 dark:bg-slate-200 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg transition-all duration-300 ${activeSkill === index ? 'scale-110 rotate-3' : ''}`}>
                    <span className="text-xl sm:text-2xl">{skill.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl sm:text-3xl font-bold ${skill.textOpacity} dark:text-slate-200 mb-2 transition-colors ${activeSkill === index ? 'text-slate-900 dark:text-white' : ''}`}>
                      {skill.category}
                    </h2>
                    <div className={`w-16 sm:w-20 h-1 bg-slate-300 dark:bg-slate-600 rounded-full ${skill.borderOpacity} transition-all duration-300`}>
                      <div
                        className="w-full h-full bg-slate-800 dark:bg-slate-300 rounded-full transition-all duration-500"
                        style={{width: `${100 - (index * 15)}%`}}
                      ></div>
                    </div>
                  </div>
                  <div className={`text-3xl sm:text-4xl transition-all duration-300 ${activeSkill === index ? 'scale-125' : 'scale-100'}`}>
                    ⭐
                  </div>
                </div>

                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {skill.items.map((item, i) => (
                    <div
                      key={i}
                      className={`group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-slate-200/40 dark:border-slate-700/40 transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:scale-105 hover:shadow-lg ${item.highlight ? 'ring-2 ring-slate-400/50 dark:ring-slate-500/50' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <div className="flex-1">
                          <span className={`font-bold text-base sm:text-lg ${skill.textOpacity} dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors leading-tight`}>
                            {item.name}
                          </span>
                          {item.highlight && (
                            <div className="flex items-center mt-2">
                              <span className="text-yellow-500 text-sm mr-1">✨</span>
                              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Core Expertise</span>
                            </div>
                          )}
                        </div>
                        <span className={`text-base sm:text-lg font-bold px-2 sm:px-3 py-1 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 rounded-full ${skill.textOpacity} transition-all duration-300 ${activeSkill === index ? 'scale-110' : ''}`}>
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {index < 4 && (
                  <div className={`absolute bottom-0 left-6 sm:left-8 right-6 sm:right-8 h-px ${skill.borderOpacity} dark:border-opacity-20 transition-opacity duration-300`}></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/30 dark:border-slate-700/30">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-3 sm:mb-4">Ready to Collaborate?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Let's discuss how these skills can contribute to your next project or innovation challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/projects"
                  className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-all duration-300 text-base sm:text-lg font-semibold hover:scale-105 transform"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
