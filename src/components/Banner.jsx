import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { IoMdCloudDownload } from 'react-icons/io';

function Banner() {
  const [text] = useTypewriter({
    words: [
      'a full stack developer',
      'a front-end developer',
      'a back-end developer',
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section
      id="banner"
      className="min-h-screen bg-gradient-to-r from-slate-900 to-black text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="uppercase text-blue-700 text-2xl md:text-3xl font-extrabold">
          hello I'm
        </h1>
        <h2 className="capitalize text-xl md:text-2xl font-extrabold mt-1">
          chukwuka erondu
        </h2>
        <h3 className="text-xl md:text-3xl font-bold mt-2 capitalize">
          {text}
          <Cursor />
        </h3>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="capitalize bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white transition"
          >
            hire me
          </a>
          <a
            href="/chukacv.docx"
            download
            className="capitalize border border-amber-50 px-5 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
          >
            <IoMdCloudDownload className="text-lg" />
            download cv
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/img/deve.png"
          alt="AI Web Developer"
          className="w-[15rem] sm:w-[18rem] md:w-[23rem]  rounded-full animate-subtle-bounce"
        />
      </div>
    </section>
  );
}

export default Banner;
