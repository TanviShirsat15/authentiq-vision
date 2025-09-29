import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { CustomButton } from '@/components/ui/custom-button';
import { Upload, Search, Shield, CheckCircle, AlertTriangle, Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Institutional Onboarding & Upload",
      description: "Educational institutions and organizations register with AuthentiQ and upload their official documents in bulk. Our system encrypts and securely stores all documents with blockchain-based hashing.",
      icon: Upload,
      features: ["Bulk Upload Support", "End-to-End Encryption", "Blockchain Hashing"]
    },
    {
      number: "02", 
      title: "Client Verification Request",
      description: "Employers, government agencies, and other verifiers submit candidate documents through our secure portal. The system immediately begins processing the verification request.",
      icon: Search,
      features: ["Secure Portal Access", "Multiple File Formats", "Real-time Processing"]
    },
    {
      number: "03",
      title: "Intelligent Processing",
      description: "Our advanced AI performs OCR text extraction, NLP analysis, and computer vision-based authenticity checks. Machine learning algorithms analyze document patterns and detect anomalies.",
      icon: Shield,
      features: ["OCR Text Extraction", "NLP Analysis", "Computer Vision", "ML Pattern Recognition"]
    },
    {
      number: "04", 
      title: "Cross-Verification & Immutability",
      description: "The extracted data is cross-verified against institutional records and blockchain hashes. Our system ensures complete immutability and tamper-proof verification results.",
      icon: CheckCircle,
      features: ["Institutional Cross-Check", "Blockchain Verification", "Tamper-Proof Results"]
    },
    {
      number: "05",
      title: "Real-Time Output & Alerts", 
      description: "Instant verification results are provided with clear classifications: Valid, Suspicious, or Fraudulent. Automated alerts are sent to relevant institutions for fraud cases.",
      icon: AlertTriangle,
      features: ["Instant Results", "Clear Classifications", "Automated Alerts", "Fraud Reporting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="text-center py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                The AuthentiQ Workflow
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Security in Every Step
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Our comprehensive verification process ensures document authenticity through 
                advanced AI, blockchain technology, and real-time cross-verification.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Workflow Steps */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-white/20">{step.number}</div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                      {step.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="card-authentiq w-full max-w-md p-8 text-center">
                      <step.icon className="w-24 h-24 text-white mx-auto mb-6 opacity-80" />
                      <div className="text-6xl font-bold text-white/10 mb-4">{step.number}</div>
                      <div className="text-white font-semibold text-lg">{step.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                See AuthentiQ in Action
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Watch our comprehensive demo to understand how AuthentiQ transforms 
                document verification for institutions and verifiers.
              </p>

              {/* Video Placeholder */}
              <div className="relative group cursor-pointer">
                <div className="card-authentiq p-16 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-500">
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Watch the Full Demo</h3>
                    <p className="text-gray-300">5 minute comprehensive overview</p>
                  </div>
                </div>
              </div>

              <CustomButton 
                variant="hero" 
                className="mt-8 text-lg px-8 py-4"
                onClick={() => window.open('https://youtube.com', '_blank')}
              >
                View on YouTube
              </CustomButton>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Secure Your Documents?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join hundreds of institutions and organizations already using AuthentiQ 
                to eliminate document fraud and build trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CustomButton 
                  variant="hero" 
                  onClick={() => window.location.href = '/institution/login'}
                  className="text-lg px-8 py-4"
                >
                  Start as Institution
                </CustomButton>
                <CustomButton 
                  variant="glass" 
                  onClick={() => window.location.href = '/verifier/login'}
                  className="text-lg px-8 py-4"
                >
                  Start as Verifier
                </CustomButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;