import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-20 lg:pt-24 pb-16 px-4">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-24 lg:mb-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-gray-900 to-teal-700 bg-clip-text text-transparent mb-6 leading-tight">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full mb-12" />
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Full-stack developer from Nagpur building profitable web experiences with MERN stack.
        </p>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start px-6">
        
        {/* Left - Personal Info & Photo */}
        <div className="space-y-12">
          {/* Photo Section */}
          <div className="relative group">
            <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white/50 backdrop-blur-sm">
              <img
                src="/crazyface.gif"
                alt="Piyush Kene"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Facts</h3>
            <div className="space-y-6 text-lg text-slate-700">
              <div className="flex items-start gap-4 p-4 bg-slate-50/50 rounded-2xl hover:bg-slate-100/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">BCA Student</h4>
                  <p>2nd year @G.H.Raisoni SkillTech University, Nagpur. passionate about web dev & cybersecurity</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-slate-50/50 rounded-2xl hover:bg-slate-100/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">MERN Stack</h4>
                  <p>Full-stack development with React, Node.js, MongoDB & deployment expertise</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50/50 rounded-2xl hover:bg-slate-100/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Builder Mindset</h4>
                  <p>Idea → Research → Code → Deploy. Looking for Internship & Freelancing projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Detailed Bio */}
        <div className="space-y-10 lg:sticky lg:top-24">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100/50">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-slate-900 to-teal-600 bg-clip-text text-transparent">
              The Journey
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Second-year BCA student diving deep into web development and cybersecurity. 
                Currently building full-stack MERN applications and mastering other aspects of Web Devp.
              </p>
              <p>
                Passionate about creating profitable, scalable  and secure web experiences.
              </p>
              <p>
                <span className="font-semibold text-teal-600">When not coding:</span> College coursework, consistent sleep for peak focus 😅, occasional workouts, and deep dives into tech tutorials.
              </p>
            </div>
          </div>

          {/* Coding Philosophy */}
          <div className="bg-gradient-to-r from-teal-500/5 to-emerald-500/5 backdrop-blur-sm rounded-3xl p-8 border border-teal-200/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl backdrop-blur-sm border border-slate-200/50">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">💡</span>
                  </div>
                  <span className="font-semibold text-slate-900">Think</span>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl backdrop-blur-sm border border-slate-200/50">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">⚙️</span>
                  </div>
                  <span className="font-semibold text-slate-900">Build</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl backdrop-blur-sm border border-slate-200/50">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">🔍</span>
                  </div>
                  <span className="font-semibold text-slate-900">Research</span>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white/60 rounded-2xl backdrop-blur-sm border border-slate-200/50">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl">🚀</span>
                  </div>
                  <span className="font-semibold text-slate-900">Ship</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-lg border border-teal-200/50"
            >
              <span>Download Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10l-5.5 5.5m0 0L12 21l5.5-5.5m-5.5 5.5V8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
