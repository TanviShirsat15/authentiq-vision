import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';
import { Upload, Mail, Lock, Building, User, Phone } from 'lucide-react';

const InstitutionLogin: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    institutionName: '',
    contact: '',
    email: '',
    password: '',
    document: null as File | null
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: "Welcome back to your institution dashboard.",
    });
    // Redirect to dashboard
    window.location.href = '/institution/dashboard';
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Your account requires Admin approval. We'll review your approval letter and contact you within 24 hours.",
    });
    setSignupData({
      name: '',
      institutionName: '',
      contact: '',
      email: '',
      password: '',
      document: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link to="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
            AuthentiQ
          </Link>
          <h1 className="text-3xl font-bold text-white mt-4 mb-2">Institution Portal</h1>
          <p className="text-gray-300">Secure document management and verification</p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex mb-8 bg-white/5 rounded-lg p-1 backdrop-blur-sm border border-white/10"
        >
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 px-4 rounded-md text-center font-medium transition-all ${
              activeTab === 'login' 
                ? 'bg-white/20 text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-3 px-4 rounded-md text-center font-medium transition-all ${
              activeTab === 'signup' 
                ? 'bg-white/20 text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Sign Up
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-authentiq p-8"
        >
          {activeTab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="institution@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <CustomButton type="submit" variant="hero" className="w-full">
                Login to Dashboard
              </CustomButton>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={signupData.name}
                    onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Institution Name</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={signupData.institutionName}
                    onChange={(e) => setSignupData({...signupData, institutionName: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="University of Excellence"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Contact Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={signupData.contact}
                    onChange={(e) => setSignupData({...signupData, contact: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="admin@institution.edu"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Admin Approval Letter</label>
                <div className="relative">
                  <Upload className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="file"
                    onChange={(e) => setSignupData({...signupData, document: e.target.files?.[0] || null})}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white file:bg-transparent file:border-0 file:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Upload official approval letter from institution administration
                </p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>Note:</strong> Your account will require Admin approval after reviewing the uploaded letter. 
                  You'll receive confirmation within 24 hours.
                </p>
              </div>

              <CustomButton type="submit" variant="hero" className="w-full">
                Submit Application
              </CustomButton>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default InstitutionLogin;