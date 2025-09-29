import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, Building } from 'lucide-react';

const VerifierLogin: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    organization: '',
    clientType: 'employers',
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: "Welcome to your verifier dashboard.",
    });
    window.location.href = '/verifier/dashboard';
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account Created!",
      description: "Welcome to AuthentiQ. You can now start verifying documents.",
    });
    window.location.href = '/verifier/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link to="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
            AuthentiQ
          </Link>
          <h1 className="text-3xl font-bold text-white mt-4 mb-2">Client Portal</h1>
          <p className="text-gray-300">Document verification for employers and agencies</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex mb-8 bg-white/5 rounded-lg p-1 backdrop-blur-sm border border-white/10"
        >
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-3 px-4 rounded-md text-center font-medium transition-all ${
              activeTab === 'login' ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-3 px-4 rounded-md text-center font-medium transition-all ${
              activeTab === 'signup' ? 'bg-white/20 text-white' : 'text-gray-300 hover:text-white'
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
                    placeholder="verifier@company.com"
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
                Access Verifier Dashboard
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
                <label className="block text-white font-medium mb-2">Organization</label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={signupData.organization}
                    onChange={(e) => setSignupData({...signupData, organization: e.target.value})}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="TechCorp Ltd."
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Client Type</label>
                <select
                  value={signupData.clientType}
                  onChange={(e) => setSignupData({...signupData, clientType: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  <option value="employers">Employers</option>
                  <option value="government">Government Agencies</option>
                  <option value="institutes">Other Institutes</option>
                </select>
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
                    placeholder="hr@company.com"
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

              <CustomButton type="submit" variant="hero" className="w-full">
                Create Verifier Account
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

export default VerifierLogin;