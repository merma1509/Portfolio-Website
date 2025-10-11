'use client';

import { useState, useEffect } from 'react';
import { countries } from '@/lib/countries';

export default function Projects() {
  const [inquiryData, setInquiryData] = useState({ project_name: '', name: '', email: '', inquiry: '', phone: '', occupation: '', country: { code: '+7', flag: '🇷🇺', name: 'Russia' }});
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [inquiryErrors, setInquiryErrors] = useState<{[key: string]: string}>({});
  const [theme, setTheme] = useState('light');

  const [selectedInquiryCountry, setSelectedInquiryCountry] = useState({ code: '+7', flag: '🇷🇺', name: 'Russia' });

  const validateInquiryForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Project selection validation
    if (!inquiryData.project_name.trim()) {
      newErrors.project_name = 'Please select a project';
    }

    // Name validation
    if (!inquiryData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (inquiryData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inquiryData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(inquiryData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation - allow international formats
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (inquiryData.phone.trim() && !phoneRegex.test(inquiryData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    // Occupation validation
    if (!inquiryData.occupation.trim()) {
      newErrors.occupation = 'Please select your occupation';
    }

    // Inquiry validation - minimum 15 words for project inquiries
    const wordCount = inquiryData.inquiry.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (!inquiryData.inquiry.trim()) {
      newErrors.inquiry = 'Inquiry details are required';
    } else if (wordCount < 15) {
      newErrors.inquiry = 'Please provide more details (minimum 15 words)';
    } else if (inquiryData.inquiry.trim().length > 500) {
      newErrors.inquiry = 'Inquiry must be less than 500 characters';
    }

    setInquiryErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInquiryForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_name: inquiryData.project_name.trim(),
          name: inquiryData.name.trim(),
          email: inquiryData.email.trim(),
          inquiry: inquiryData.inquiry.trim(),
          phone: inquiryData.phone.trim(),
          occupation: inquiryData.occupation.trim()
        }),
      });

      if (response.ok) {
        alert('Inquiry sent successfully!');
        setInquiryData({ project_name: '', name: '', email: '', inquiry: '', phone: '', occupation: '', country: { code: '+7', flag: '🇷🇺', name: 'Russia' } });
        setInquiryErrors({});
      } else {
        alert('Error sending inquiry. Please try again.');
      }
    } catch (error) {
      alert('Error sending inquiry. Please try again.');
    }
  };

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

  const projects = [
    {
      name: "OpenClimate",
      slogan: "Stay informed, Stay Safe: Leveraging technologies to save more lives and infrastructure.",
      description: "An AI-powered platform for disaster management and climate resilience in Africa. It integrates real-time data from sensors and satellites, predictive analytics using machine learning, and community alerts to provide early warnings and resource allocation for governments and NGOs.",
      tech: ["AI/ML", "IoT Sensors", "GIS Mapping", "FastAPI", "React"],
      outcomes: "Reduced disaster response times by 40%, protected over 10,000 infrastructure units, and enhanced community resilience in vulnerable regions.",
      icon: "🌍",
      color: "from-green-50 to-green-100 dark:from-green-900 dark:to-green-800",
      border: "border-green-200 dark:border-green-700",
      button: "bg-green-600 hover:bg-green-700",
      link: "#"
    },
    {
      name: "RoutiQ",
      slogan: "Smarter Routes. Safest and Fastest Journeys. Greener Cities. Powered By Intelligence.",
      description: "A traffic intelligence app that uses IoT data from vehicles and drones, combined with ML algorithms, to optimize routes in real-time. It predicts congestion, suggests eco-friendly paths, and integrates with navigation systems for safer, faster commutes in African cities.",
      tech: ["Machine Learning", "IoT Devices", "React Native", "Node.js", "PostgreSQL"],
      outcomes: "Decreased average commute times by 25%, reduced carbon emissions by 15%, and improved road safety with predictive alerts.",
      icon: "🚗",
      color: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
      border: "border-blue-200 dark:border-blue-700",
      button: "bg-blue-600 hover:bg-blue-700",
      link: "#"
    },
    {
      name: "eNeza Marketplace",
      slogan: "Seamless Shopping, Smart Recommendations.",
      description: "An integrated e-commerce platform with AI-driven recommendations, secure payment gateways, and efficient logistics. It connects local vendors with customers, using data analytics to personalize experiences and optimize supply chains for faster deliveries.",
      tech: ["React", "FastAPI", "PostgreSQL", "AI Algorithms", "Stripe"],
      outcomes: "Increased vendor sales by 30%, improved customer satisfaction scores by 50%, and streamlined operations for 500+ users.",
      icon: "🛒",
      color: "from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800",
      border: "border-purple-200 dark:border-purple-700",
      button: "bg-purple-600 hover:bg-purple-700",
      link: "#"
    },
    {
      name: "Drone and UAVs",
      slogan: "Hardware Meets Software for Autonomous Innovation.",
      description: "A long-term initiative to develop autonomous drones for surveillance, delivery, and environmental monitoring. Integrating hardware design with software for navigation, cybersecurity for secure operations, and AI for intelligent decision-making in logistics and agriculture.",
      tech: ["Hardware Prototyping", "Autonomous Systems", "Cybersecurity", "Python", "Embedded C++"],
      outcomes: "Prototyped 3 UAV models, achieved 95% accuracy in test flights, and prepared for real-world applications in disaster response.",
      icon: "🚁",
      color: "from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800",
      border: "border-orange-200 dark:border-orange-700",
      button: "bg-orange-600 hover:bg-orange-700",
      link: "#"
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
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Contact</a>
            <button onClick={toggleTheme} className="ml-4 p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </nav>
      </header>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-8 text-center">Projects</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-16 text-center max-w-4xl mx-auto">
          Innovative solutions bridging technology and real-world challenges. Each project is designed to create impact, from saving lives to optimizing cities—built with passion and precision.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className={`group bg-gradient-to-br ${project.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border ${project.border}`}>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${project.button.replace('bg-', 'bg-').replace('hover:bg-', '')} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white text-2xl">{project.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{project.name}</h2>
                  <p className="text-slate-600 dark:text-slate-300 font-medium italic">"{project.slogan}"</p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${project.button} text-white`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Key Outcomes</h3>
                <p className="text-slate-600 dark:text-slate-300">{project.outcomes}</p>
              </div>

              <a href={project.link} className={`inline-block ${project.button} text-white px-6 py-3 rounded-lg transition`}>
                View Details
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Project Inquiries</h2>
          <form onSubmit={handleInquirySubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project_name" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Project *</label>
                <select
                  id="project_name"
                  value={inquiryData.project_name}
                  onChange={(e) => setInquiryData({ ...inquiryData, project_name: e.target.value })}
                  className={`w-full p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${inquiryErrors.project_name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                  required
                >
                  <option value="">Select Project</option>
                  <option value="OpenClimate">OpenClimate</option>
                  <option value="RoutiQ">RoutiQ</option>
                  <option value="eNeza Marketplace">eNeza Marketplace</option>
                  <option value="Drone and UAVs">Drone and UAVs</option>
                </select>
                {inquiryErrors.project_name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{inquiryErrors.project_name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={inquiryData.email}
                  onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                  className={`w-full p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${inquiryErrors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                  required
                />
                {inquiryErrors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{inquiryErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Phone *</label>
                <div className="flex">
                  <select
                    value={selectedInquiryCountry.code}
                    onChange={(e) => {
                      const country = countries.find(c => c.code === e.target.value);
                      if (country) setSelectedInquiryCountry(country);
                    }}
                    className="flex-shrink-0 p-4 border border-slate-300 dark:border-slate-600 rounded-l-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className={`flex-1 p-4 border border-l-0 border-slate-300 dark:border-slate-600 rounded-r-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${inquiryErrors.phone ? 'border-red-500' : ''}`}
                  />
                </div>
                {inquiryErrors.phone && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{inquiryErrors.phone}</p>}
              </div>
              <div>
                <label htmlFor="occupation" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Occupation *</label>
                <select
                  id="occupation"
                  value={inquiryData.occupation}
                  onChange={(e) => setInquiryData({ ...inquiryData, occupation: e.target.value })}
                  className={`w-full p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${inquiryErrors.occupation ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                  required
                >
                  <option value="">Select Occupation</option>
                  <option value="investor">Investor</option>
                  <option value="looking for a job">Looking for a Job</option>
                  <option value="team member">Team Member</option>
                  <option value="collaborator">Collaborator</option>
                  <option value="client">Client</option>
                  <option value="other">Other</option>
                </select>
                {inquiryErrors.occupation && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{inquiryErrors.occupation}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="inquiry" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Project Inquiry *</label>
                <textarea
                  id="inquiry"
                  value={inquiryData.inquiry}
                  onChange={(e) => setInquiryData({ ...inquiryData, inquiry: e.target.value })}
                  className={`w-full p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${inquiryErrors.inquiry ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                  rows={5}
                  required
                />
                {inquiryErrors.inquiry && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{inquiryErrors.inquiry}</p>}
                <p className="mt-1 text-sm text-slate-500">
                  {inquiryData.inquiry.trim().split(/\s+/).filter(word => word.length > 0).length}/15 words minimum
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-600 text-white py-4 rounded-lg hover:bg-slate-700 transition font-semibold mt-6"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}
