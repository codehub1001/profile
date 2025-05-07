import React from 'react';
import { FaDatabase, FaServer, FaGlobe, FaLaptopCode, FaCloudUploadAlt } from 'react-icons/fa';

const services = [
  {
    title: 'Backend API Development',
    icon: <FaServer className="text-3xl text-blue-500" />,
    description: 'Build secure and scalable RESTful APIs using Node.js and Express with proper authentication and validation.',
  },
  {
    title: 'PostgreSQL Database Design',
    icon: <FaDatabase className="text-3xl text-green-500" />,
    description: 'Design and manage efficient relational databases with optimized schemas and indexing.',
  },
  {
    title: 'Full-Stack Web Apps',
    icon: <FaLaptopCode className="text-3xl text-purple-500" />,
    description: 'Develop dynamic full-stack applications using React for the frontend and Node/Express for the backend.',
  },
  {
    title: 'Deployment & CI/CD',
    icon: <FaCloudUploadAlt className="text-3xl text-red-500" />,
    description: 'Deploy applications using Docker, Heroku, or cloud platforms like AWS, with continuous integration pipelines.',
  },
  {
    title: 'Responsive Frontend Development',
    icon: <FaGlobe className="text-3xl text-yellow-500" />,
    description: 'Craft pixel-perfect UIs with React, Tailwind CSS, and responsive design best practices.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-r from-slate-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">My Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
