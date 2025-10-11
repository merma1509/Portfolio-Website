'use client';

import { useState, useEffect } from 'react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      } else {
        console.error('Error fetching blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs');
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

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 p-6">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white"><a href="/">Mugabo</a></h1>
          <div className="space-x-6">
            <a href="/" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Home</a>
            <a href="/about" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">About</a>
            <a href="/projects" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Projects</a>
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-8 text-center">Blog</h1>
          <div className="grid gap-8">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{blog.title}</h2>
                  <p className="text-slate-600 dark:text-slate-300">{blog.content}</p>
                </div>
              ))
            ) : (
              <p className="text-slate-600 dark:text-slate-300 text-center">No blogs yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
