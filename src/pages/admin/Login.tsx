import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, Shield } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Admin Login Successful!",
      description: "Welcome to the admin dashboard.",
    });
    // Redirect to admin approval page
    window.location.href = '/admin/approval';
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
          <div className="flex items-center justify-center gap-2 mt-4 mb-2">
            <Shield className="w-8 h-8 text-red-400" />
            <h1 className="text-3xl font-bold text-white">Admin Portal</h1>
          </div>
          <p className="text-gray-300">Secure administrative access</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-authentiq p-8"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Administrator Login</h2>
            <p className="text-gray-300 text-sm">
              Manage institution approvals and system oversight
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="admin@authentiq.com"
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

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-semibold">Security Notice</span>
              </div>
              <p className="text-red-200 text-sm">
                This is a restricted area. All access attempts are logged and monitored.
              </p>
            </div>

            <CustomButton type="submit" variant="hero" className="w-full">
              <Shield className="w-5 h-5 mr-2" />
              Access Admin Dashboard
            </CustomButton>
          </form>

          <div className="mt-6 text-center">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Forgot password? Contact system administrator
            </a>
          </div>
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

export default AdminLogin;