import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Harsh Singh",
      role: "Tech Architect",
      college: "Indian Institute of Technology",
      dept: "Computer Science & Engineering",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "harsh@authentiq.com"
    },
    {
      name: "Tanvi Shirsat", 
      role: "AI/Strategy Lead",
      college: "Stanford University",
      dept: "Artificial Intelligence",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d5c0?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#", 
      email: "tanvi@authentiq.com"
    },
    {
      name: "Alex Chen",
      role: "Blockchain Developer", 
      college: "MIT",
      dept: "Computer Science",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "alex@authentiq.com"
    },
    {
      name: "Priya Sharma",
      role: "Frontend Architect",
      college: "Carnegie Mellon University", 
      dept: "Human-Computer Interaction",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "#",
      github: "#",
      email: "priya@authentiq.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="text-center py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Team Binary Beasts
              </h1>
              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-white/90 font-mono">Team ID: BB-2025-AUTH</span>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We are a passionate team of innovators dedicated to revolutionizing document verification 
                through cutting-edge AI and blockchain technology. Our mission is to eliminate document 
                fraud and build trust in digital authentication.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="profile-card p-8 group hover:scale-105 transition-transform duration-500"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white/20 group-hover:border-white/40 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Info */}
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-lg text-gray-300 mb-1">{member.role}</p>
                    <p className="text-sm text-gray-400 mb-2">{member.college}</p>
                    <p className="text-sm text-gray-500 mb-6">{member.dept}</p>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a 
                        href={member.linkedin}
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={member.github}
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-6 bg-black/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To create a world where document authenticity is never questioned, where institutions 
                can trust, and where individuals can prove their credentials with absolute confidence. 
                We believe technology should simplify verification, not complicate it.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300">Institutions Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-300">System Availability</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;