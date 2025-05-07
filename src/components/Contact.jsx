import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope,FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your@email.com?subject=Message from ${form.name}&body=${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-slate-900 to-blac text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* AI Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/img/contact.png"
            alt="AI Generated Developer Illustration"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-blue-400 text-center lg:text-left">Contact Me</h2>
          <p className="text-gray-300 mb-8 text-center lg:text-left">
            Have a project in mind or just want to say hi? Let's connect!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1 text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-200">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/codehub1001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transform hover:scale-125 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://ng.linkedin.com/in/chukwuka-erondu-4344232bb "
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transform hover:scale-125 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/ChukwukaErondu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-sky-400 transform hover:scale-125 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:oluwachukkie@gmail.com"
              className="text-2xl hover:text-red-400 transform hover:scale-125 transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/+8112780944"
              className="text-2xl hover:text-green-400 transform hover:scale-125 transition duration-300"
              aria-label="Email"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
