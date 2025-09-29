import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { CustomButton } from '@/components/ui/custom-button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[80vh]">
            
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="card-authentiq p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Have questions about AuthentiQ? We're here to help you secure your documents.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <CustomButton
                    type="submit"
                    variant="hero"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </CustomButton>
                </form>

                {/* Contact Info */}
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Mail className="w-5 h-5" />
                      <span>contact@authentiq.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Phone className="w-5 h-5" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5" />
                      <span>Ranchi, Jharkhand, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Interactive Background */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center relative overflow-hidden rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(82, 97, 104, 0.2), rgba(26, 29, 43, 0.8))'
              }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 circuit-bg opacity-20" />
              
              {/* Content */}
              <div className="relative z-10 text-center p-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="space-y-8"
                >
                  <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Mail className="w-16 h-16 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">
                    24/7 Support
                  </h2>
                  
                  <p className="text-lg text-gray-300 max-w-md">
                    Our team is always ready to assist you with any questions about 
                    document verification, implementation, or technical support.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 mt-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                      <h3 className="text-white font-semibold mb-2">Response Time</h3>
                      <p className="text-gray-300 text-sm">Within 2 hours during business hours</p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                      <h3 className="text-white font-semibold mb-2">Support Channels</h3>
                      <p className="text-gray-300 text-sm">Email, Phone, Live Chat</p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                      <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-300 text-sm">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;