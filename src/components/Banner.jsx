import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoMdCloudDownload } from 'react-icons/io';

function Banner() {
  const [text] = useTypewriter({
    words: [
      'a Full Stack Developer',
      'a Front-End Engineer',
      'a Back-End Specialist',
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section
      id="banner"
      className="min-h-screen bg-gradient-to-r from-slate-900 to-black text-white px-6 md:px-16 py-20 flex flex-col-reverse md:flex-row items-center justify-between"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-blue-500 uppercase text-xl md:text-2xl font-bold mb-2">Hello, I'm</h1>
        <h2 className="text-2xl md:text-4xl font-extrabold capitalize mb-2">Chukwuka Erondu</h2>
        <h3 className="text-lg md:text-2xl font-medium mb-6 text-gray-300">
          {text}
          <Cursor />
        </h3>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition shadow-md"
          >
            Hire Me
          </a>
          <a
            href="/chukacv.docx"
            download
            className="border border-white text-white px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-white hover:text-black transition shadow-md"
          >
            <IoMdCloudDownload className="text-lg" />
            Download CV
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
        <div className="bg-white p-2 rounded-full shadow-2xl">
          <img
            src="/img/deve.png"
            alt="AI Web Developer"
            className="rounded-full w-[15rem] sm:w-[18rem] md:w-[23rem] animate-[bounce_4s_infinite] object-cover"
            style={{ animationTimingFunction: 'ease-in-out', transform: 'translateY(0)' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
