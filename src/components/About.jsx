import React from 'react';

function About() {
  const skills = [
    { name: 'HTML', src: './img/html.png' },
    { name: 'CSS', src: './img/css.png' },
    { name: 'JavaScript', src: './img/javascript.png' },
    { name: 'React', src: './img/react.png', style: 'w-[4rem] h-[3rem]' },
    { name: 'Node.js', src: './img/node.png' },
    { name: 'Postgres DB', src: './img/postgres.png' },
  ];

  return (
    <section className="bg-gradient-to-r from-slate-900 to-black text-white py-16 px-6 md:px-20" id="about">
      <h1 className="text-center text-4xl font-extrabold mb-12 uppercase tracking-wide text-blue-500 animate-pulse">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./img/chuka.png"
            alt="About"
            className="rounded-xl shadow-2xl w-[90%] max-w-md"
          />
        </div>

        {/* Right: Text and Skills */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a <span className="text-blue-400 font-semibold">Full Stack Developer</span> with deep experience in building scalable, user-friendly web applications. I've collaborated on diverse teams, led several projects, and mastered modern frameworks that deliver powerful, clean code.
          </p>

          <h2 className="mt-8 mb-4 text-xl font-bold text-blue-400 uppercase">Tech Stack</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {skills.map(({ name, src, style = 'w-[3rem]' }) => (
              <div
                className="text-center hover:scale-105 transition duration-300"
                key={name}
              >
                <img
                  src={src}
                  alt={name}
                  className={`${style} rounded-md mx-auto shadow-lg animate-[bounce_3s_ease-in-out_infinite]`}
                  style={{ animationDuration: '4s', animationTimingFunction: 'ease-in-out' }}
                />
                <p className="mt-2 text-sm uppercase text-gray-300 hover:text-blue-400">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
