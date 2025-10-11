'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
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

  const [theme, setTheme] = useState('light');
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

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

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Mugabo</h1>
          <div className="space-x-6">
            <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">Home</a>
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 transform hover:scale-110"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </header>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Technical proficiencies built through hands-on experience, academic excellence, and continuous innovation
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((skill, index) => (
              <div
                key={index}
                className={`relative ${skill.opacity} dark:bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border ${skill.borderOpacity} dark:border-opacity-20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-slate-800 dark:bg-slate-200 rounded-2xl flex items-center justify-center mr-6 shadow-lg transition-all duration-300 ${activeSkill === index ? 'scale-110 rotate-3' : ''}`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-3xl font-bold ${skill.textOpacity} dark:text-slate-200 mb-2 transition-colors ${activeSkill === index ? 'text-slate-900 dark:text-white' : ''}`}>
                      {skill.category}
                    </h2>
                    <div className={`w-20 h-1 bg-slate-300 dark:bg-slate-600 rounded-full ${skill.borderOpacity} transition-all duration-300`}>
                      <div
                        className="w-full h-full bg-slate-800 dark:bg-slate-300 rounded-full transition-all duration-500"
                        style={{width: `${100 - (index * 15)}%`}}
                      ></div>
                    </div>
                  </div>
                  <div className={`text-4xl transition-all duration-300 ${activeSkill === index ? 'scale-125' : 'scale-100'}`}>
                    ⭐
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {skill.items.map((item, i) => (
                    <div
                      key={i}
                      className={`group bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-5 border border-slate-200/40 dark:border-slate-700/40 transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:scale-105 hover:shadow-lg ${item.highlight ? 'ring-2 ring-slate-400/50 dark:ring-slate-500/50' : ''}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <span className={`font-bold text-lg ${skill.textOpacity} dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors leading-tight`}>
                            {item.name}
                          </span>
                          {item.highlight && (
                            <div className="flex items-center mt-2">
                              <span className="text-yellow-500 text-sm mr-1">✨</span>
                              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">Core Expertise</span>
                            </div>
                          )}
                        </div>
                        <span className={`text-lg font-bold px-3 py-1 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 rounded-full ${skill.textOpacity} transition-all duration-300 ${activeSkill === index ? 'scale-110' : ''}`}>
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {index < skillCategories.length - 1 && (
                  <div className={`absolute bottom-0 left-8 right-8 h-px ${skill.borderOpacity} dark:border-opacity-20 transition-opacity duration-300`}></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <div className="bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/30 dark:border-slate-700/30">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how these skills can contribute to your next project or innovation challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/projects"
                  className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-8 py-4 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="border-2 border-slate-800 dark:border-slate-200 text-slate-800 dark:text-slate-200 px-8 py-4 rounded-xl hover:bg-slate-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-all duration-300 text-lg font-semibold hover:scale-105 transform"
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
