'use client';

import { useState, useEffect } from 'react';
import { countries } from '@/lib/countries';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [status, setStatus] = useState('');
  const [theme, setTheme] = useState('light');
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

  const [selectedCountry, setSelectedCountry] = useState({ code: '+7', flag: '🇷🇺', name: 'Russia' });

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation - allow international formats
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    // Message validation - minimum 10 words
    const wordCount = formData.message.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (wordCount < 10) {
      newErrors.message = 'Message must be at least 10 words';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('Please fix the errors above.');
      return;
    }

    setStatus('Sending...');
    setErrors({});
    setIsSubmitting(true);

    // Log form data for debugging
    console.log('Form data being sent:', formData);

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim()
        }),
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response:', responseText);

      if (response.ok) {
        setStatus('✓ Message sent successfully!');
        setFormData({ name: '', email: '', message: '', phone: '' });
        setSelectedCountry({ code: '+250', flag: '🇷🇼', name: 'Rwanda' });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus('');
        }, 5000);
      } else {
        try {
          const errorData = JSON.parse(responseText);
          setStatus(`✗ ${errorData.detail || 'Please try again.'}`);
        } catch {
          setStatus(`✗ Error ${response.status}: Please try again.`);
        }
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('✗ Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Projects</a>
            <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Skills</a>
            <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors px-2 py-2 text-sm xl:text-base">Gallery</a>
            <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors px-2 py-2 text-sm xl:text-base">Contact</a>
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
              <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>👤 About</a>
              <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>📁 Projects</a>
              <a href="/skills" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>🛠️ Skills</a>
              <a href="/gallery" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>🖼️ Gallery</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white font-semibold transition-colors py-2 sm:py-3 px-3 sm:px-4 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg mx-1 sm:mx-2 text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>📞 Contact</a>
            </div>
          </div>
        )}
      </header>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-6 sm:py-8 lg:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 sm:mb-8 text-center">Contact</h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 sm:mb-12 lg:mb-16 text-center max-w-4xl mx-auto px-2">
            Let's discuss collaborations, opportunities, or innovative ideas. I'm always open to new projects and partnerships that drive tech forward.
          </p>

          <div className="max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-200/40 dark:border-slate-700/40">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-white mb-4 sm:mb-6 flex items-center">
                <span className="mr-2">📧</span> Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium text-sm sm:text-base">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-3 sm:p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} text-sm sm:text-base`}
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-3 sm:p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} text-sm sm:text-base`}
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium text-sm sm:text-base">Phone</label>
                  <div className="flex">
                    <select
                      value={selectedCountry.code}
                      onChange={(e) => {
                        const country = countries.find(c => c.code === e.target.value);
                        if (country) setSelectedCountry(country);
                      }}
                      className="flex-shrink-0 p-3 sm:p-4 border border-slate-300 dark:border-slate-600 rounded-l-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm sm:text-base"
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`flex-1 p-3 sm:p-4 border border-l-0 border-slate-300 dark:border-slate-600 rounded-r-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${errors.phone ? 'border-red-500' : ''} text-sm sm:text-base`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium text-sm sm:text-base">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full p-3 sm:p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-slate-500 focus:border-transparent ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} text-sm sm:text-base`}
                    rows={5}
                    required
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    {formData.message.trim().split(/\s+/).filter(word => word.length > 0).length}/10 words minimum
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-4 rounded-lg transition font-semibold text-sm sm:text-base min-h-[48px] flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-slate-400 text-slate-600 cursor-not-allowed'
                      : 'bg-slate-600 hover:bg-slate-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
              {status && <p className={`mt-4 text-center font-medium text-sm sm:text-base ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}
            </div>
          </div>
        </div>

        <footer className="bg-slate-100/50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 py-6 sm:py-8 lg:py-12">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              <a href="mailto:niyonmartin@yandex.ru" className="group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </a>

              <a href="https://linkedin.com/in/nshuti-martin15" className="group" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>

              <a href="https://instagram.com/nshuti-martin15" className="group" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>

              <a href="https://github.com/merma1509" className="group" target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
