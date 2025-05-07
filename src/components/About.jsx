import React from 'react';

function About() {
  const skills = [
    { name: 'HTML', src: './img/html.png' },
    { name: 'CSS', src: './img/css.png' },
    { name: 'JavaScript', src: './img/javascript.png' },
    { name: 'React', src: './img/react.png', style: 'w-16 h-14' },
    { name: 'Node.js', src: './img/node.png' },
    { name: 'Postgres DB', src: './img/postgres.png' },
  ];

  return (
    <section
      className="bg-gradient-to-r from-slate-900 to-black text-white py-20 px-6 md:px-20"
      id="about"
    >
      <h1 className="text-center text-4xl font-extrabold mb-14 uppercase tracking-wide text-blue-400">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="./img/chuka.png"
              alt="About"
              className="rounded-xl shadow-xl w-[90%] max-w-md object-cover border-4 border-blue-500/30 hover:border-blue-500 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl ring-2 ring-blue-400 animate-pulse opacity-10 blur-xl"></div>
          </div>
        </div>

        {/* Right: Text and Skills */}
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center md:text-left">
            I’m a <span className="text-blue-400 font-semibold">Full Stack Developer</span> with
            deep experience in building scalable, user-friendly web applications. I thrive in
            collaborative environments and have led several projects using modern tools that
            prioritize performance, maintainability, and UX.
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-400 uppercase mb-6 text-center md:text-left">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {skills.map(({ name, src, style = 'w-12 h-12' }, index) => (
                <div
                  key={name}
                  className={`text-center transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-lg animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  <img
                    src={src}
                    alt={name}
                    className={`${style} mx-auto rounded-md shadow-md`}
                  />
                  <p className="mt-2 text-sm uppercase text-gray-300 hover:text-blue-400 transition-colors">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
