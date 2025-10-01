import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      image: "img/logo.png",
      technologies: ["React", "Tailwind CSS","SQLserver"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sorn-Sophamarinet/React-ecommerce",
    },
    {
      title: "JobSeeks",
      description:
        " JobSeek is the ultimate job searching platform that connects job seekers with top employers. Find jobs, apply instantly, and boost your career today!",
      image: "img/Logo1.png",
      technologies: [
        "React.js",
        "PostgreSQL",
        "Java",
      ],
      liveUrl: "https://job-seek-seven.vercel.app/",
      githubUrl: "https://github.com/SisovandaraKong/Web-F3/tree/marinet",
    },
    {
      title: "E-commerce-php",
      description:
        "",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["PHP", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sorn-Sophamarinet/E-commerce-php",
    },
    {
      title: "Moblie Banking",
      description:
        "A Java-based web application built with Spring Boot, featuring a responsive user interface and RESTful APIs for managing mobile banking operations like user accounts and transactions",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Spring", "Postgres"],
      liveUrl: "#",
      githubUrl: "https://github.com/Sorn-Sophamarinet/Homework-spring",
    },
  ];

  return (
    <section
        id="projects"
        className="py-20 px-6 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 animate-gradient-x">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6 animate-pulse"></div>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Here are some of my recent projects that showcase my skills and experience
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Reveal key={index} delayMs={index * 150}>
              <Card
                className="overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden relative group">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <Image
                      src={project.image || "/placeholder.svg?height=300&width=500"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-125 cursor-pointer"
                    />
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-300">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      {project.title}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="bg-white/20 text-white hover:bg-white/30 font-medium rounded-full px-3 py-1 text-sm transition-all duration-300 border border-white/10 hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      asChild
                      className="flex items-center gap-2 bg-white text-purple-900 hover:bg-gray-100 font-semibold rounded-full px-4 py-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold rounded-full px-4 py-2 transition-all duration-300 bg-transparent hover:scale-105"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
  );
}
