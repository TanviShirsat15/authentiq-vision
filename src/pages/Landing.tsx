import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Preloader } from '@/components/Preloader';
import { CustomButton } from '@/components/ui/custom-button';
import { FeatureBadge } from '@/components/FeatureBadge';
import RotatingText from '@/components/RotatingText';
import circuitBg from '@/assets/circuit-bg.jpg';
import jharkhandMap from '@/assets/jharkhand-map.png';
import { ChevronDown } from 'lucide-react';

const Landing: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const rotatingTexts = [
    "Verify Documents with Confidence",
    "Secure Your Institution's Trust", 
    "Eliminate Document Fraud Forever",
    "AI-Powered Verification System",
    "Blockchain-Secured Authentication"
  ];

  const features = [
    {
      title: "AI Document Analysis",
      description: "Advanced OCR and NLP technology extracts and validates document content with 99.9% accuracy.",
      delay: 0.2
    },
    {
      title: "Blockchain Security", 
      description: "Immutable hash verification ensures documents cannot be tampered with or falsified.",
      delay: 0.4
    },
    {
      title: "Real-time Verification",
      description: "Instant document verification with immediate feedback on authenticity status.",
      delay: 0.6
    },
    {
      title: "Fraud Detection",
      description: "Sophisticated AI algorithms identify even the most sophisticated document forgeries.",
      delay: 0.8
    }
  ];

  const testimonials = [
    { name: "Dr. Sarah Johnson", role: "Academic Director", text: "AuthentiQ has revolutionized our admission process. No more fake certificates!" },
    { name: "Raj Patel", role: "HR Manager", text: "We've eliminated hiring fraud completely. This system is a game-changer." },
    { name: "Maria González", role: "University Registrar", text: "The verification speed and accuracy are incredible. Highly recommended!" }
  ];

  const faqs = [
    {
      question: "How accurate is the document verification?",
      answer: "Our AI-powered system achieves 99.9% accuracy in document verification, using advanced OCR, NLP, and blockchain technology."
    },
    {
      question: "What types of documents can be verified?", 
      answer: "We support certificates, transcripts, diplomas, licenses, and any other official documents with institutional backing."
    },
    {
      question: "How long does verification take?",
      answer: "Most documents are verified within seconds. Complex documents may take up to 2-3 minutes for thorough analysis."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade encryption and blockchain technology to ensure your documents and data remain completely secure."
    }
  ];

  if (!showMainContent) {
    return <Preloader onComplete={() => setShowMainContent(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${circuitBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div 
          className="absolute inset-0 opacity-10 flex items-center justify-center"
          style={{
            backgroundImage: `url(${jharkhandMap})`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Circuit Animation Overlay */}
        <div className="absolute inset-0 circuit-bg opacity-30" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AuthentiQ - {' '}
              <RotatingText 
                texts={rotatingTexts}
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            The future of document verification is here. Powered by AI and secured by blockchain technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/institution/login">
              <CustomButton variant="hero" className="text-lg px-8 py-4">
                Institution Page
              </CustomButton>
            </Link>
            <Link to="/verifier/login">
              <CustomButton variant="hero" className="text-lg px-8 py-4">
                Client Page
              </CustomButton>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <FeatureBadge className="mb-6 inline-block">
              Features of our website
            </FeatureBadge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of next-generation document verification with our advanced AI and blockchain infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                viewport={{ once: true }}
                className="card-authentiq"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-authentiq text-center"
              >
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-authentiq group"
              >
                <summary className="cursor-pointer text-white font-semibold text-lg py-2">
                  {faq.question}
                </summary>
                <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">AuthentiQ</h3>
              <p className="text-gray-300">
                Revolutionizing document verification with AI and blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact Us</Link>
                <Link to="/how-it-works" className="block text-gray-300 hover:text-white transition-colors">How It Works</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
              <div className="space-y-2">
                <Link to="/institution/login" className="block text-gray-300 hover:text-white transition-colors">Institution Portal</Link>
                <Link to="/verifier/login" className="block text-gray-300 hover:text-white transition-colors">Verifier Portal</Link>
                <Link to="/admin/login" className="block text-gray-300 hover:text-white transition-colors">Admin Portal</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">© AuthentiQ 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;