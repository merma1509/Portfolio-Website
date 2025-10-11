'use client';

import { useState, useLayoutEffect } from 'react';

export default function About() {
  const [theme, setTheme] = useState('light');

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
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-slate-200 dark:border-gray-700 p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white"><a href="/">Mugabo</a></h1>
          <div className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white font-semibold">About</a>
            <a href="/projects" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Projects</a>
            <a href="/skills" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Skills</a>
            <a href="/gallery" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Gallery</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Contact</a>
            <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </header>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 text-center">About Mugabo</h1>

        {/* Who I Am & Expertise */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
              <span className="mr-2">👤</span> Who I Am
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hi, I'm Niyonshuti Martin - Mugabo, a passionate tech entrepreneur, AI practitioner, and SpaceTech enthusiast. My journey began with a curiosity for how technology can solve everyday problems, evolving into a mission to bridge AI, IoT, and real-world challenges. I'm the founder behind OpenClimate, where we use AI to predict disasters and build climate resilience in Africa, and RoutiQ, optimizing traffic for safer, greener cities.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              As an entrepreneur, I thrive on launching ventures like eNeza Marketplace, turning ideas into scalable solutions. Whether building startups or collaborating on teams, I focus on creating systems that not only work but make a difference—saving lives, reducing emissions, and empowering communities. Let's connect if you're interested in innovative tech partnerships!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
              <span className="mr-2">🛠️</span> Key Expertise
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>AI:</strong> Building predictive models and data pipelines, as seen in OpenClimate's forecasting for disaster alerts and RoutiQ's traffic predictions.</li>
              <li><strong>IoT/CPS:</strong> Designing embedded systems and device networks for real-time data in smart environments, like sensor integrations in my drone projects.</li>
              <li><strong>Cybersecurity:</strong> Implementing threat detection and secure designs, ensuring robust systems in all my ventures from marketplace security to network vulnerabilities.</li>
              <li><strong>SpaceTech:</strong> Developing autonomous navigation and drone technologies, aligning with my long-term UAV goals and satellite system interests.</li>
              <li><strong>Business:</strong> Scaling tech solutions through entrepreneurship, project management, and strategic alignment, as demonstrated in eNeza's market growth and OpenClimate's community impact.</li>
            </ul>
          </div>
        </div>

        {/* Educational Background */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Educational Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-500 hidden md:block"></div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start space-x-4 relative">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {edu.icon}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex-1 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{edu.level}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.details}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.link !== "#" ? (
                        <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
              <span className="mr-2">📖</span> Self-Taught Expertise
            </h2>
            <ul className="space-y-4">
              {selfTaught.map((item, index) => (
                <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-gray-800 dark:text-white">{item.field}</span>
                    <span className="text-blue-600 dark:text-blue-400 text-sm">{item.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center">
              <span className="mr-2">🔮</span> Future Aspirations
            </h2>
            <div className="space-y-4">
              {futurePlans.map((plan, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{plan.level}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">{plan.period}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{plan.details}</p>
                  <a href={plan.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
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
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </div>
  </>
  );
}
