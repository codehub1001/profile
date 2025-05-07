import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Task Manager App',
    description: 'A full-stack task management tool with user auth and CRUD operations.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager-app.example.com',
    image: '/images/task-manager.png',
  },
  {
    title: 'E-Commerce Store',
    description: 'An online store with cart, checkout, and admin dashboard functionality.',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ecommerce-store',
    demo: 'https://ecommerce-ebon-ten-93.vercel.app/',
    image: '/img/ecom.png',
  },
  {
    title: 'Dev Portfolio',
    description: 'My personal portfolio built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/yourusername/dev-portfolio',
    demo: 'https://yourportfolio.example.com',
    image: '/images/dev-portfolio.png',
  },
  {
    title: 'Blog Platform',
    description: 'A multi-user blog system with full authentication and markdown support.',
    tech: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/yourusername/blog-platform',
    demo: 'https://blog-platform.example.com',
    image: '/images/blog-platform.png',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Socket.io powered real-time chat with private rooms and notifications.',
    tech: ['React', 'Socket.io', 'Node.js'],
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chat-app.example.com',
    image: '/images/chat-app.png',
  },
  {
    title: 'Job Tracker',
    description: 'Track job applications and interview progress with filters and analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/job-tracker',
    demo: 'https://job-tracker.example.com',
    image: '/images/job-tracker.png',
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + itemsPerSlide) % projects.length
      );
    }, 7000); // Auto-slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleProjects = () => {
    const projectsToShow = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      const index = (currentIndex + i) % projects.length;
      projectsToShow.push(projects[index]);
    }
    return projectsToShow;
  };

  return (
    <section id="portfolio" className="bg-gradient-to-r from-slate-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Portfolio</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-in-out">
          {getVisibleProjects().map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transform hover:scale-[1.03] transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-xl">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: Math.ceil(projects.length / itemsPerSlide) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex((idx * itemsPerSlide) % projects.length)}
              className={`h-3 w-3 rounded-full transition-all ${
                Math.floor(currentIndex / itemsPerSlide) === idx
                  ? 'bg-blue-500 scale-110'
                  : 'bg-gray-500 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
