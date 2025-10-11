'use client';

import { useState, useLayoutEffect } from 'react';

export default function About() {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
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

  const education = [
    {
      level: "Primary School",
      period: "2007 - 2012",
      details: "P1 to P6",
      institution: "Ecole Primaire Kalinzi",
      location: "Cyuve-Musanze",
      link: "#",
      icon: "🏫"
    },
    {
      level: "Secondary School - O'Level",
      period: "2013 - 2015",
      details: "S1 - S3",
      institution: "Groupe Scolaire Kalinzi",
      location: "Cyuve-Musanze",
      link: "#",
      icon: "📚"
    },
    {
      level: "Secondary School - A'Level",
      period: "2016 - 2017",
      details: "S4 - S5",
      institution: "Groupe Scolaire Rambura (G)",
      location: "Nyabihu",
      link: "#",
      icon: "🎓"
    },
    {
      level: "High School - A'Level",
      period: "2018",
      details: "S6",
      institution: "Ecole Secondaire de Kidaho",
      location: "Burera",
      link: "#",
      icon: "🎓"
    },
    {
      level: "Bachelor's of Science",
      period: "2019 - 2020",
      details: "Faculty of Physics - Material Science",
      institution: "University of Rwanda - College of Science and Technology - UR-CST",
      location: "Kigali-Rwanda",
      link: "https://ur.ac.rw/",
      icon: "🔬"
    },
    {
      level: "Bachelor's of Science",
      period: "2020 - 2025",
      details: " Faculty of Physics, Mathematics and Natural Sciences",
      institution: "People's Friendship University of Russia - RUDN University",
      location: "Moscow-Russia",
      link: "https://www.rudn.ru/",
      icon: "🇷🇺"
    },
    {
      level: "Master's in Computer Science",
      period: "2025 - 2027 (Ongoing)",
      details: "Program: Artificial Intelligence and Data Engineering",
      institution: "Innopolis University",
      location: "Kazan-Innopolis-Russia",
      link: "https://innopolis.university/",
      icon: "🤖"
    },
    {
      level: "Master's in Infocommunications Technologies and Communication Systems",
      period: "2025 - 2027 (Ongoing)",
      details: "Program: Internet of Things and Cyber-Physical Systems",
      institution: "NRU HSE MIEM University",
      location: "Moscow-Russia",
      link: "https://www.hse.ru/",
      icon: "🌐"
    }
  ];

  const selfTaught = [
    { field: "Data Science", period: "2021 - 2025", description: "Self-learned through online courses, projects, and hands-on experimentation." },
    { field: "Programming", period: "2021 - 2025", description: "Mastered languages like Python, JavaScript, and frameworks for full-stack development." },
    { field: "Business Entrepreneurship", period: "2021 - 2025", description: "Built ventures like eNeza Marketplace, focusing on scalable tech solutions." },
    { field: "Cybersecurity", period: "2021 - 2025", description: "Studied threat detection, secure systems, and practical security implementations." }
  ];

  const futurePlans = [
    {
      level: "Master's in Engineering Systems",
      period: "2027 - 2029",
      details: "Program: Space Track",
      institution: "Skolkovo Institute of Science and Technology (Skoltech)",
      location: "Moscow-Russia",
      link: "https://www.skoltech.ru/",
      icon: "🚀"
    },
    {
      level: "Master's in Business",
      period: "2027 - 2029",
      details: "Program: Business Administration or Economics",
      institution: "NRU HSE University, School of Business",
      location: "Moscow-Russia",
      link: "https://www.hse.ru/",
      icon: "💼"
    }
  ];

  return (
    <>
      {/* Header/Navigation - Mobile First */}
      <header className="sticky top-0 z-50 bg-white/98 dark:bg-slate-900/98 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 p-3 sm:p-4">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            <a href="/" className="hover:opacity-80 transition-opacity">Mugabo</a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-3 xl:space-x-6">
            <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Home</a>
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors px-2 py-2 text-sm xl:text-base">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-110"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`p-2 sm:p-3 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 ${isMobileMenuOpen ? 'bg-slate-300 dark:bg-slate-600 scale-105' : ''}`}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="lg:hidden mt-2 sm:mt-3 pb-3 sm:pb-4 border-t border-slate-200 dark:border-slate-700 bg-white/98 dark:bg-slate-900/98 backdrop-blur-lg">
            <div className="flex flex-col space-y-1 pt-2 sm:pt-3">
              <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
              <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-6 sm:py-8 lg:py-16 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-400/5 rounded-full blur-xl animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Mugabo
            </span>
          </h1>

          {/* Who I Am & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up delay-200">
            <div className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center animate-slide-in-left">
                <span className="mr-2 text-2xl animate-bounce-subtle">👤</span> Who I Am
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-justify">
                Hi, I'm Niyonshuti Martin - Mugabo, a passionate tech entrepreneur, AI practitioner, and SpaceTech enthusiast. My journey began with a curiosity for how technology can solve everyday problems, evolving into a mission to bridge AI, IoT, and real-world challenges. I'm the founder behind OpenClimate, where we use AI to predict disasters and build climate resilience in Africa, and RoutiQ, optimizing traffic for safer, greener cities.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-justify">
                As an entrepreneur, I thrive on launching ventures like eNeza Marketplace, turning ideas into scalable solutions. Whether building startups or collaborating on teams, I focus on creating systems that not only work but make a difference—saving lives, reducing emissions, and empowering communities. Let's connect if you're interested in innovative tech partnerships!
              </p>
            </div>

            <div className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center animate-slide-in-right">
                <span className="mr-2 text-2xl animate-bounce-subtle">🛠️</span> Key Expertise
              </h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 sm:space-y-3 text-sm sm:text-base hover:text-slate-700 dark:hover:text-slate-300 transition-colors text-justify">
                <li><strong>AI:</strong> Building predictive models and data pipelines, as seen in OpenClimate's forecasting for disaster alerts and RoutiQ's traffic predictions.</li>
                <li><strong>IoT/CPS:</strong> Designing embedded systems and device networks for real-time data in smart environments, like sensor integrations in my drone projects.</li>
                <li><strong>Cybersecurity:</strong> Implementing threat detection and secure designs, ensuring robust systems in all my ventures from marketplace security to network vulnerabilities.</li>
                <li><strong>SpaceTech:</strong> Developing autonomous navigation and drone technologies, aligning with my long-term UAV goals and satellite system interests.</li>
                <li><strong>Business:</strong> Scaling tech solutions through entrepreneurship, project management, and strategic alignment, as demonstrated in eNeza's market growth and OpenClimate's community impact.</li>
              </ul>
            </div>
          </div>

          {/* Educational Journey */}
          <div className="mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up delay-400">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center animate-slide-in-left">
              Educational Journey
            </h2>

            {/* Completed Education - Table Format */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 text-center animate-fade-in-up">
                Completed Education (2007-2025)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                  <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <tr>
                      <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-sm sm:text-base font-semibold">Period</th>
                      <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-sm sm:text-base font-semibold">Level</th>
                      <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-sm sm:text-base font-semibold">Institution</th>
                      <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-sm sm:text-base font-semibold hidden md:table-cell">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {education.slice(0, 6).map((edu, index) => (
                      <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium">{edu.period}</td>
                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-800 dark:text-slate-200 text-sm sm:text-base">{edu.level}</td>
                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                          <div>
                            {edu.link !== "#" ? (
                              <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors hover:underline">
                                {edu.institution}
                              </a>
                            ) : (
                              edu.institution
                            )}
                            {edu.level.includes("A'Level") && (
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                (PCM - Mathematics-Chemistry-Physics)
                              </div>
                            )}
                            {edu.institution.includes("UR-CST") && (
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                Physics - Material Science
                              </div>
                            )}
                            {edu.institution.includes("RUDN") && (
                              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                Faculty of Physics, Mathematics and Natural Sciences
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base hidden md:table-cell">{edu.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pursuing Education */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 text-center animate-fade-in-up">
                Pursuing Education (2025-2027)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {education.slice(6).map((edu, index) => (
                  <div key={index + 6} className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl mr-3 sm:mr-4 animate-bounce-subtle">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{edu.level}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.period}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-2 text-sm sm:text-base">{edu.details}</p>
                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm hover:underline">
                      {edu.institution}
                    </a>
                    {edu.location && <span className="text-slate-600 dark:text-slate-400 text-sm"> - {edu.location}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Self-Taught & Future Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up delay-600">
            <div className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center animate-slide-in-left relative z-10">
                <span className="mr-2 text-2xl animate-bounce-subtle">📖</span> Self-Taught Expertise
              </h2>
              <ul className="space-y-3 sm:space-y-4 relative z-10">
                {selfTaught.map((item, index) => (
                  <li key={index} className="border-b border-slate-200 dark:border-slate-700 pb-3 sm:pb-4 last:border-b-0 group hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg p-3 transition-all duration-300 hover:scale-105">
                    <div className="mb-1 sm:mb-2">
                      <span className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.field}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center animate-slide-in-right relative z-10">
                <span className="mr-2 text-2xl animate-bounce-subtle">🔮</span> Future Aspirations
              </h2>
              <div className="space-y-3 sm:space-y-4 relative z-10">
                {futurePlans.map((plan, index) => (
                  <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-3 sm:pb-4 last:border-b-0 group hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg p-3 transition-all duration-300 hover:scale-105">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{plan.level}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">{plan.details}</p>
                    <a href={plan.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-xs sm:text-sm hover:underline">
                      {plan.institution}
                    </a>
                    {plan.location && <span className="text-slate-600 dark:text-slate-400 text-sm"> - {plan.location}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in-up delay-800">
            <a
              href="/contact"
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl transition-all duration-500 text-base sm:text-lg lg:text-xl font-bold shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 hover:-translate-y-1 min-h-[56px] flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10 mr-2 text-xl animate-bounce-subtle">🚀</span>
              <span className="relative z-10">Let's Collaborate</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
