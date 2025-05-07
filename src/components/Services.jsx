import React from 'react';
import {
  FaDatabase,
  FaServer,
  FaGlobe,
  FaLaptopCode,
  FaCloudUploadAlt,
} from 'react-icons/fa';

const services = [
  {
    title: 'Backend API Development',
    icon: <FaServer className="service-icon text-blue-400" />,
    description:
      'Build secure and scalable RESTful APIs using Node.js and Express with proper authentication and validation.',
  },
  {
    title: 'PostgreSQL Database Design',
    icon: <FaDatabase className="service-icon text-green-400" />,
    description:
      'Design and manage efficient relational databases with optimized schemas and indexing.',
  },
  {
    title: 'Full-Stack Web Apps',
    icon: <FaLaptopCode className="service-icon text-purple-400" />,
    description:
      'Develop dynamic full-stack applications using React for the frontend and Node/Express for the backend.',
  },
  {
    title: 'Deployment & CI/CD',
    icon: <FaCloudUploadAlt className="service-icon text-red-400" />,
    description:
      'Deploy applications using Docker, Heroku, or cloud platforms like AWS, with continuous integration pipelines.',
  },
  {
    title: 'Responsive Frontend Development',
    icon: <FaGlobe className="service-icon text-yellow-400" />,
    description:
      'Craft pixel-perfect UIs with React, Tailwind CSS, and responsive design best practices.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-slate-900 via-black to-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-blue-400">My Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 hover:border-blue-500 p-6 rounded-2xl shadow-xl hover:shadow-blue-600/30 transition-all duration-300 hover:scale-[1.03] group"
            >
              <div className="mb-5 text-4xl flex justify-center">
                <span className="transition-transform duration-500 group-hover:animate-float">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
