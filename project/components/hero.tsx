"use client";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import Image from "next/image";
import hero1 from "../public/hero1.jpg"
import {
  ArrowDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Fixed Navigation with Animation */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-purple-900/90 via-indigo-900/90 to-blue-900/90 backdrop-blur-md text-sm md:text-base p-4 z-50 animate-slideDown">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse">
            Portfolio.
          </span>
          <div className=" space-x-6 absolute left-1/2 transform -translate-x-1/2 md:flex  hidden ">
            <a
              href="#"
              className="hover:text-purple-300 transition-all duration-300 hover:scale-110 "
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              Service
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition-all duration-300 hover:scale-110"
            >
              Contact
            </a>
          </div>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20 mt-16 md:mt-20 relative z-10">
        {/* Text Content with Enhanced Animation */}
        <div className="text-left max-w-lg animate-slideInLeft">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient-x">
            Sorn Sophamarinet
          </h1>
          <p className="text-lg md:text-xl mb-6 text-indigo-200 animate-fadeInUp animation-delay-300">
            Web Developer
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed animate-fadeInUp animation-delay-500">
            Passionate about creating beautiful, functional, and user-centered
            digital experiences. I specialize in modern web technologies and
            love bringing ideas to life.
          </p>
          <div className="flex items-center space-x-4 animate-fadeInUp animation-delay-700">
            <div className="flex space-x-3">
              <a
                href="https://github.com/Sorn-Sophamarinet"
                className="hover:text-purple-300 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sorn-sophamarinet-8a4a4133a/"
                className="hover:text-purple-300 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Image with Enhanced Animation */}
        <div className="relative ">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-2xl absolute -z-10 "></div>
          <Image
            src={hero1}
            alt="Sorn Sophamarinet"
            width={400}
            height={400}
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl border-4 border-white/20 object-cover shadow-2xl transition-all  backdrop-blur-sm "
          />
       
        </div>
      </div>
      {/* Scroll Indicator */}
     
    </div>
  );
}
