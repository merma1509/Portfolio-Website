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
              <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>🏠 Home</a>
              <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>👤 About</a>
              <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>📁 Projects</a>
              <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>🛠️ Skills</a>
              <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>🖼️ Gallery</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>📞 Contact</a>
            </div>
          </div>
        )}
      </header>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-6 sm:py-8 lg:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center">About Mugabo</h1>

          {/* Who I Am & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/40 dark:border-slate-700/40">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">👤</span> Who I Am
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Hi, I'm Niyonshuti Martin - Mugabo, a passionate tech entrepreneur, AI practitioner, and SpaceTech enthusiast. My journey began with a curiosity for how technology can solve everyday problems, evolving into a mission to bridge AI, IoT, and real-world challenges. I'm the founder behind OpenClimate, where we use AI to predict disasters and build climate resilience in Africa, and RoutiQ, optimizing traffic for safer, greener cities.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                As an entrepreneur, I thrive on launching ventures like eNeza Marketplace, turning ideas into scalable solutions. Whether building startups or collaborating on teams, I focus on creating systems that not only work but make a difference—saving lives, reducing emissions, and empowering communities. Let's connect if you're interested in innovative tech partnerships!
              </p>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/40 dark:border-slate-700/40">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🛠️</span> Key Expertise
              </h2>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li><strong>AI:</strong> Building predictive models and data pipelines, as seen in OpenClimate's forecasting for disaster alerts and RoutiQ's traffic predictions.</li>
                <li><strong>IoT/CPS:</strong> Designing embedded systems and device networks for real-time data in smart environments, like sensor integrations in my drone projects.</li>
                <li><strong>Cybersecurity:</strong> Implementing threat detection and secure designs, ensuring robust systems in all my ventures from marketplace security to network vulnerabilities.</li>
                <li><strong>SpaceTech:</strong> Developing autonomous navigation and drone technologies, aligning with my long-term UAV goals and satellite system interests.</li>
                <li><strong>Business:</strong> Scaling tech solutions through entrepreneurship, project management, and strategic alignment, as demonstrated in eNeza's market growth and OpenClimate's community impact.</li>
              </ul>
            </div>
          </div>

          {/* Educational Background */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center">Educational Journey</h2>
            <div className="relative">
              <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-1 bg-slate-600 hidden md:block"></div>
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-slate-600 rounded-full flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-lg shadow-lg flex-1 hover:shadow-xl transition-all duration-300 border border-slate-200/40 dark:border-slate-700/40">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 dark:text-white mb-1 sm:mb-2">{edu.level}</h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-base">{edu.period}</p>
                      <p className="text-slate-600 dark:text-slate-300 mb-1 text-sm sm:text-base">{edu.details}</p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                        {edu.link !== "#" ? (
                          <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                            {edu.institution}
                          </a>
                        ) : (
                          edu.institution
                        )} {edu.location && `- ${edu.location}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Self-Taught & Future Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/40 dark:border-slate-700/40">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">📖</span> Self-Taught Expertise
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {selfTaught.map((item, index) => (
                  <li key={index} className="border-b border-slate-200 dark:border-slate-700 pb-3 sm:pb-4 last:border-b-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 sm:mb-2">
                      <span className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">{item.field}</span>
                      <span className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1 sm:mt-0">{item.period}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/40 dark:border-slate-700/40">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 flex items-center">
                <span className="mr-2">🔮</span> Future Aspirations
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {futurePlans.map((plan, index) => (
                  <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-3 sm:pb-4 last:border-b-0">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white mb-1">{plan.level}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{plan.period}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-2">{plan.details}</p>
                    <a href={plan.link} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors text-xs sm:text-sm">
                      {plan.institution}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform min-h-[48px] flex items-center justify-center"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
