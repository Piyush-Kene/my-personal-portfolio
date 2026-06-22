import SkillsSection from "../components/SkillsSection";
import CurrentYear from "../components/currentYear";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-800 font-sans antialiased">
      <section className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-teal-200/30 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 px-6">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 to-slate-700 bg-clip-text text-transparent leading-tight">
              Hi, I'm <span className="text-teal-600">Piyush!</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Full-stack developer building secure and profitable web experiences. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-white hover:border-teal-200 hover:text-teal-700 transition-all duration-300 flex items-center justify-center text-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/50 backdrop-blur-sm">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="/crazyface.gif"
                alt="Piyush Kene"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-slate-900 to-gray-800 bg-clip-text text-transparent">
            A bit about me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><span className="font-bold text-2xl text-teal-600">What I do:</span> Building Full-stack web apps with MERN stack – clean, responsive, and ready to scale.</p>
            <p><span className="font-bold text-2xl text-teal-600">My vibe:</span> Curious learner who dives deep into interesting tech, always shipping real projects.</p>
            <p><span className="font-bold text-2xl text-teal-600">Off-code:</span> Gaming sessions, gym time, city walks, and endless YouTube rabbit holes.</p>
          </div>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p><span className="font-bold text-2xl text-teal-600">My process:</span> Idea → Research → Build → Iterate. Simple, effective.</p>
            <p><span className="font-bold text-2xl text-teal-600">Coding style:</span> Talk through problems out loud – keeps the logic sharp.</p>
            <p><span className="font-bold text-2xl text-teal-600">Superpower:</span> Quick learner with good humor and client intuition.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stuff I've Built
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


            {/* Project Card 1 */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 hover:border-teal-100 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-emerald-100 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">E-Commerce Site</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Complete MERN stack E-commerce application with payments, cart, and admin dashboard.</p>
              <a href="https://easykart-ecommercestore.vercel.app/" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group-hover:underline">
                View Project →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 hover:border-teal-100 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-purple-100 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">(New project coming soon)</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">Personal portfolio deployed on Vercel with smooth animations.</p>
              <a href="https://microfolio.example.com" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group-hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full" />
        </div>
        <SkillsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20 px-6 bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 text-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-8 rounded-full" />

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
            <a href="/resume.pdf" className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-teal-500/20 hover:scale-105 transition-all duration-300 border border-white/20 hover:border-teal-400">
              <img src="/document.png" alt="Resume" className="w-7 h-7 mx-auto mb-1.5 filter invert opacity-80 group-hover:invert-0" />
              <span className="text-xs font-medium group-hover:text-teal-300">Resume</span>
            </a>
            <a href="https://github.com/Piyush-Kene" className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-teal-500/20 hover:scale-105 transition-all duration-300 border border-white/20 hover:border-teal-400">
              <img src="/git.png" alt="GitHub" className="w-7 h-7 mx-auto mb-1.5 filter invert opacity-80 group-hover:invert-0" />
              <span className="text-xs font-medium group-hover:text-teal-300">GitHub</span>
            </a>
            <a href="https://youtube.com/@yourchannel" className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-teal-500/20 hover:scale-105 transition-all duration-300 border border-white/20 hover:border-teal-400">
              <img src="/black youtube.png" alt="YouTube" className="w-7 h-7 mx-auto mb-1.5 filter invert opacity-80 group-hover:invert-0" />
              <span className="text-xs font-medium group-hover:text-teal-300">YouTube</span>
            </a>
            <a href="mailto:piyushkene.dev@gmail.com" className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-teal-500/20 hover:scale-105 transition-all duration-300 border border-white/20 hover:border-teal-400">
              <img src="/email.png" alt="Email" className="w-7 h-7 mx-auto mb-1.5 filter invert opacity-80 group-hover:invert-0" />
              <span className="text-xs font-medium group-hover:text-teal-300">Email</span>
            </a>
            <a href="https://x.com/piyushkene" className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-teal-500/20 hover:scale-105 transition-all duration-300 border border-white/20 hover:border-teal-400">
              <img src="/X.png" alt="X.com" className="w-6 h-6 mx-auto mb-1.5 filter invert opacity-80 group-hover:invert-0" />
              <span className="text-xs font-medium group-hover:text-teal-300">X</span>
            </a>
            <a href="https://linkedin.com/in/piyush-kene-6a3916328" className="group p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-teal-500/20 hover:scale-105 transition-all duration-300 border border-white/20 hover:border-teal-400">
              <img src="/linkedIn.png" alt="LinkedIn" className="w-7 h-7 mx-auto mb-1.5 filter invert opacity-80 group-hover:invert-0" />
              <span className="text-xs font-medium group-hover:text-teal-300">LinkedIn</span>
            </a>
          </div>

          <p className="text-slate-500 font-mono text-xs border-t border-slate-700 pt-6 max-w-md mx-auto">
            &copy; <CurrentYear /> Piyush Kene. Built with React & Tailwind CSS.
          </p>
        </div>
      </section>

    </div>
  );
}
