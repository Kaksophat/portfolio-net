import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import hero2 from "../public/hero2.jpg"
export function About() {
  return (
    <section
        id="about"
        className="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-shimmer"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4 animate-gradient-x">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full animate-pulse"></div>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
            {/* Image Section */}
            <Reveal direction="up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl blur-2xl absolute -z-10 opacity-60 -rotate-3 animate-pulse"></div>
              <Image
                src={hero2}
                alt="About Profile"
                width={400}
                height={400}
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl border-4 border-white/30 object-cover shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 animate-float"
              />
              <div className="absolute top-4 right-4 w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-4 w-3 h-3 bg-white/30 rounded-full animate-ping animation-delay-1000"></div>
            </div>
            </Reveal>

            {/* Content Section */}
            <Reveal direction="up">
            <div className="max-w-lg">
              <Reveal direction="up">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Hello! I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient-x">
                  Sophamarinet
                </span>
                , a recent Computer Science graduate based in Cambodia.
              </h3>
              </Reveal>

              <Reveal direction="up" delayMs={150}>
              <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                I'm an entry-level developer with a solid foundation in web development built through coursework,
                internships, and personal projects. I love creating clean, accessible, and user-friendly interfaces
                while continuously learning and improving my craft.
              </p>
              </Reveal>

              <Reveal direction="up" delayMs={300}>
              <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                I focus on React, Node.js, and modern web technologies. I'm currently looking for opportunities to
                contribute to real-world projects, grow with a supportive team, and turn ideas into useful products.
              </p>
              </Reveal>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "2025", label: "Graduation Year", color: "text-purple-400" },
                  { number: "5", label: "Academic Projects", color: "text-indigo-400" },
                  { number: "3", label: "Certifications", color: "text-indigo-400" },
                ].map((stat, index) => (
                  <Reveal key={index} direction="up" delayMs={500 + index * 120}>
                    <div
                      className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 hover:scale-105"
                    >
                      <h4 className={`text-2xl font-bold ${stat.color} mb-1 animate-bounce`}>{stat.number}</h4>
                      <p className="text-gray-300 text-sm">{stat.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>
  );
}
