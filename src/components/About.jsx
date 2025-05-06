import React from 'react';

function About() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-black text-white py-10 px-4" id="about">
      <h1 className="uppercase text-center text-3xl font-extrabold mb-8 animate-pulse">about me</h1>

      <div className="box flex flex-col md:flex-row items-center justify-around gap-8">
        {/* Image */}
        <div className="img flex-shrink-0">
          <img src="./img/chuka.png" alt="about" className="w-[80vw] max-w-md md:w-[30rem]" />
        </div>

        {/* Text Section */}
        <div className="text md:w-[32rem] text-center md:text-left">
          <p>
            I am an experienced full stack developer with professional expertise gained from working
            on various projects and collaborating with other developers. <br />
            I am skilled in various modern web development tools and technologies.
          </p>

          {/* Skill Stack */}
          <div className="stack mt-8 flex flex-wrap justify-center md:justify-start gap-6">
            {[
              { name: 'html', src: './img/html.png' },
              { name: 'css', src: './img/css.png' },
              { name: 'js', src: './img/javascript.png' },
              { name: 'react', src: './img/react.png', style: 'w-[4rem] h-[3rem]' },
              { name: 'node', src: './img/node.png' },
              { name: 'postgres db', src: './img/postgres.png' },
            ].map(({ name, src, style = 'w-[3rem]' }) => (
              <div className="skill text-center" key={name}>
                <img
                  src={src}
                  alt={name}
                  className={`${style} rounded-md mx-auto transform transition duration-300 hover:scale-110 hover:rotate-1 bounce-slow ` } 
                />
                <p className="uppercase hover:text-blue-700 mt-1">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
