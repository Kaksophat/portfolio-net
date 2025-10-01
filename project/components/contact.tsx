import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-shimmer"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4 animate-gradient-x">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6 animate-pulse"></div>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
              I'm always open to discussing new opportunities and interesting projects. Let's create something amazing
              together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slideInLeft">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 animate-gradient-x">
                Let's start a conversation
              </h3>
              <p className="text-gray-300 mb-8 text-base leading-relaxed animate-fadeInUp animation-delay-300">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you. Drop me a message and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", info: "netsorn7777@gmail.com" },
                  { icon: Phone, title: "Phone", info: "+855 (88) 920-3806" },
                  { icon: MapPin, title: "Location", info: "Phnom Penh, Cambodia" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 hover:scale-105 transition-all duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base mb-1">{contact.title}</h4>
                      <p className="text-gray-300 text-sm">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 animate-fadeInUp animation-delay-800">
                {[
                  { Icon: Github, href: "https://github.com/Sorn-Sophamarinet" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/sorn-sophamarinet-8a4a4133a/" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-125 hover:rotate-12 border border-white/10 animate-bounce"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slideInRight">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-gradient-x">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 rounded-lg transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-300"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 rounded-lg transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-400"
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 rounded-lg transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-500"
                  />
                  <Input
                    placeholder="Subject"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 rounded-lg transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-600"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400 rounded-lg resize-none transition-all duration-300 hover:scale-105 animate-fadeInUp animation-delay-700"
                  />
                  <Button className="w-full bg-white text-purple-900 hover:bg-gray-100 font-semibold rounded-full py-3 transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fadeInUp animation-delay-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
}
