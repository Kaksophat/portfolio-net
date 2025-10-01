import { Badge } from "@/components/ui/badge";
import { Code, Globe, Server } from "lucide-react";

export function Skills() {
  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    Backend: [
      "Basic Java",
      "Basic Spring Framework ",
      "PostgreSQL",
      "SQLServer",
      "Basic PHP",
    ],
    "Tools & Others": ["Git/GitHub", "Figma"],
  };

  return (
     <section
        id="skills"
        className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-indigo-500/5 to-transparent animate-shimmer"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4 animate-gradient-x">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6 animate-pulse"></div>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const icons = {
                Frontend: <Code className="w-8 h-8 text-purple-400 animate-pulse" />,
                Backend: <Server className="w-8 h-8 text-indigo-400 animate-pulse" />,
                "Tools & Others": <Globe className="w-8 h-8 text-blue-400 animate-pulse" />,
              }

              return (
                <div
                  key={category}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slideInUp hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-center mb-4 animate-bounce animation-delay-500">
                    {icons[category as keyof typeof icons]}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 text-center animate-fadeInUp animation-delay-700">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="bg-white/20 text-white hover:bg-white/30 font-medium rounded-full px-3 py-1 text-sm transition-all duration-300 border border-white/10 hover:scale-110 animate-fadeInUp"
                        style={{ animationDelay: `${900 + skillIndex * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
  );
}
