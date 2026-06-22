import React, { useState } from "react";

const skillsData = {
  frontend: [
    { name: "HTML", icon: "🌐", level: "Intermediate" },
    { name: "CSS", icon: "🎨", level: "Intermediate" },
    { name: "JavaScript", icon: "⚡", level: "Basic" },
    { name: "React", icon: "⚛️", level: "Basic" },
    { name: "Tailwind", icon: "💨", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", level: "Basic" },
    { name: "Express.js", icon: "🚀", level: "Basic" },
    { name: "REST APIs", icon: "🔌", level: "Basic" },
  ],
  database: [
    { name: "MongoDB", icon: "🍃", level: "Basic+" },
    { name: "Mongoose", icon: "🔗", level: "Basic" },
  ],
  tools: [
    { name: "Git/GitHub", icon: "🔧", level: "Basic" },
    { name: "Vercel", icon: "🚀", level: "Basic" },
    { name: "Postman", icon: "📮", level: "Intermediate" },
  ],
  others: [
    { name: "Problem Solving", icon: "🧩", level: "Intermediate" },
    { name: "Debugging", icon: "🐛", level: "Advanced" },
    { name: "Deployment", icon: "☁️", level: "Basic" },
  ],
};

const levelConfig = {
  Beginner: {
    width: "50%",
    gradient: "from-red-400 to-orange-400",
    textColor: "text-red-500",
  },
  Basic: {
    width: "60%",
    gradient: "from-orange-400 to-yellow-400",
    textColor: "text-orange-500",
  },
  "Basic+": {
    width: "68%",
    gradient: "from-yellow-400 to-lime-400",
    textColor: "text-yellow-600",
  },
  Intermediate: {
    width: "78%",
    gradient: "from-teal-400 to-emerald-500",
    textColor: "text-teal-600",
  },
  Advanced: {
    width: "88%",
    gradient: "from-blue-400 to-indigo-500",
    textColor: "text-blue-600",
  },
  Expert: {
    width: "95%",
    gradient: "from-purple-500 to-pink-500",
    textColor: "text-purple-600",
  },
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 lg:mb-20">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-2xl font-semibold capitalize text-sm lg:text-base tracking-wide transition-all duration-300 backdrop-blur-sm border-2 group ${
              selectedCategory === category
                ? "bg-teal-500/90 text-white border-teal-400 shadow-xl shadow-teal-500/25 hover:scale-105 active:scale-[0.98]"
                : "bg-white/60 text-slate-700 border-slate-200 hover:border-teal-300 hover:text-teal-700 hover:shadow-lg hover:shadow-teal-100 active:scale-[0.98]"
            }`}
          >
            <span className="relative z-10">
              {category.replace("_", " ")}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {skillsData[selectedCategory].map((skill) => {
          const config = levelConfig[skill.level] || levelConfig["Basic"];

          return (
            <div
              key={skill.name}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 hover:border-teal-200 border border-slate-100/50 transition-all duration-500 overflow-hidden hover:bg-white"
            >
              {/* Background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl group-hover:animate-bounce">
                  {skill.icon}
                </span>
              </div>

              {/* Skill Name */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 text-center leading-tight group-hover:text-teal-600 transition-colors">
                {skill.name}
              </h3>

              {/* Skill Level */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span
                  className={`font-semibold text-sm tracking-wide ${config.textColor}`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar*/}
              <div className="w-full bg-slate-100 rounded-full h-2 relative overflow-hidden">
                <div
                  className={`h-2 rounded-full shadow-sm transition-all duration-700 ease-out bg-gradient-to-r ${config.gradient}`}
                  style={{ width: config.width }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}