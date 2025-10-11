'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [newsletterData, setNewsletterData] = useState({ name: '', email: '' });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsletterData),
      });
      if (response.ok) {
        alert('Subscribed successfully!');
        setNewsletterData({ name: '', email: '' });
      } else {
        alert('Error subscribing. Please try again.');
      }
    } catch (error) {
      alert('Error subscribing. Please try again.');
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header/Navigation */}
      <header className="p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white"><a href="/">Mugabo</a></h1>
          <div className="space-x-6">
            <a href="/about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="/projects" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Projects</a>
            <a href="/skills" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Skills</a>
            <a href="/gallery" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Gallery</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Contact</a>
            <button onClick={toggleTheme} className="ml-4 p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Tech Entrepreneur,
              <br />AI Practitioner, 
              <br />SpaceTech Enthusiast
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              <i>Bridging AI, IoT, and real-world impact. Expert in autonomous systems, drones-UAVs, and SpaceTech solutions.</i>
            </p>
            <div className="space-x-4">
              <a
                href="/projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-xl">
              <img src="/mugabo.jpg" alt="Mugabo's profile photo" className="w-full h-full object-contain rounded-lg" />
            </div>
            {/* Placeholder for profile image */}
          </div>
        </div>

        {/* Featured Projects */}
        <section className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">Featured Projects</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            Hands-on innovations solving real-world problems in Africa and beyond. Each project leverages AI, IoT, and cutting-edge tech for impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* OpenClimate */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-green-200 dark:border-green-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">OpenClimate</h4>
              </div>
              <p className="text-green-700 dark:text-green-300 font-medium mb-3 italic">"Stay informed, Stay Safe: Leveraging technologies to save more lives and infrastructure."</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">AI-driven disaster management and climate resilience platform for Africa, integrating real-time data and predictive analytics.</p>
              <a href="/projects" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">Learn More</a>
            </div>
            
            {/* RoutiQ */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-blue-200 dark:border-blue-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">🚗</span>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">RoutiQ</h4>
              </div>
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-3 italic">"Smarter Routes. Safest and Fastest Journeys. Greener Cities. Powered By Intelligence."</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Traffic intelligence and route optimization app for Africa, using ML and IoT for real-time navigation and eco-friendly paths.</p>
              <a href="/projects" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Learn More</a>
            </div>
            
            {/* eNeza Marketplace */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-200 dark:border-purple-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-xl">🛒</span>
                </div>
                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">eNeza Marketplace</h4>
              </div>
              <p className="text-purple-700 dark:text-purple-300 font-medium mb-3">Integrated e-commerce platform with AI recommendations and secure logistics for seamless shopping.</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Boosts local economies with smart recommendations, payments, and efficient supply chains.</p>
              <a href="/projects" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">Learn More</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                value={newsletterData.name}
                onChange={(e) => setNewsletterData({ ...newsletterData, name: e.target.value })}
                className="w-full md:w-auto px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-300"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={newsletterData.email}
                onChange={(e) => setNewsletterData({ ...newsletterData, email: e.target.value })}
                className="w-full md:w-auto px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center">
            <p>&copy; 2025 Mugabo. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="https://linkedin.com/in/nshuti-martin15" className="hover:underline">LinkedIn</a>
              <a href="https://github.com/merma1509" className="hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
