import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Shield, LogOut, FileCheck, Clock, AlertTriangle } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';

const VerifierDashboard: React.FC = () => {
  const navigate = useNavigate();

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/verifier/dashboard', active: true },
    { name: 'Verifier Page', icon: Shield, path: '/verifier/verify' },
  ];

  const recentVerifications = [
    { id: 'VER001', document: 'Bachelor Degree - John Smith', status: 'Accepted', date: '2024-01-15' },
    { id: 'VER002', document: 'Master Certificate - Sarah Lee', status: 'Rejected', date: '2024-01-15' },
    { id: 'VER003', document: 'Transcript - Mike Wilson', status: 'Fraud', date: '2024-01-14' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419] flex">
      <aside className="w-64 bg-black/20 border-r border-white/10 backdrop-blur-sm flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-white">AuthentiQ</h1>
          <p className="text-gray-300 text-sm mt-1">Verifier Portal</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.active ? 'bg-white/20 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">Verifier Dashboard</h1>
            <p className="text-gray-300">Monitor your document verification history and statistics</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="card-authentiq p-6">
              <div className="flex items-center justify-between mb-4">
                <FileCheck className="w-8 h-8 text-green-400" />
                <span className="text-sm font-medium text-green-400">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">1,247</h3>
              <p className="text-gray-300 text-sm">Documents Verified</p>
            </div>
            <div className="card-authentiq p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">2.3s</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Average</h3>
              <p className="text-gray-300 text-sm">Verification Time</p>
            </div>
            <div className="card-authentiq p-6">
              <div className="flex items-center justify-between mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <span className="text-sm font-medium text-red-400">0.3%</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">4</h3>
              <p className="text-gray-300 text-sm">Fraud Detected</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-authentiq p-6"
            >
              <h2 className="text-xl font-bold text-white mb-6">Quick Verification</h2>
              <p className="text-gray-300 mb-6">Start verifying documents instantly</p>
              <Link to="/verifier/verify">
                <CustomButton variant="hero" className="w-full">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Verification
                </CustomButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-authentiq p-6"
            >
              <h2 className="text-xl font-bold text-white mb-4">Recent Verifications</h2>
              <div className="space-y-3">
                {recentVerifications.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <p className="text-white font-medium text-sm">{item.document}</p>
                      <p className="text-gray-400 text-xs">{item.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.status === 'Accepted' ? 'bg-green-500/20 text-green-300' :
                      item.status === 'Rejected' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerifierDashboard;