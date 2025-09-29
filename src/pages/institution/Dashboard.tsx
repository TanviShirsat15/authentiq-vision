import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload, 
  AlertTriangle, 
  LogOut, 
  FileText, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  PieChart
} from 'lucide-react';

const InstitutionDashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Uploaded Documents",
      value: "12,457",
      change: "+15%",
      icon: FileText,
      color: "text-blue-400"
    },
    {
      title: "Total Verified Documents", 
      value: "11,892",
      change: "+12%",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      title: "Fraudulent Flags",
      value: "43",
      change: "-8%",
      icon: XCircle,
      color: "text-red-400"
    }
  ];

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/institution/dashboard', active: true },
    { name: 'Uploader Page', icon: Upload, path: '/institution/upload' },
    { name: 'Blacklist Page', icon: AlertTriangle, path: '/institution/blacklist' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419] flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-64 bg-black/20 border-r border-white/10 backdrop-blur-sm flex flex-col"
      >
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-white">AuthentiQ</h1>
          <p className="text-gray-300 text-sm mt-1">Institution Portal</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    item.active
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
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
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">Institution Dashboard</h1>
            <p className="text-gray-300">Monitor your document verification analytics and manage uploads</p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.title} className="card-authentiq p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-300 text-sm">{stat.title}</p>
              </div>
            ))}
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Upload Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-authentiq p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Monthly Document Upload Trend</h2>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-400">Upload trend chart would display here</p>
                  <p className="text-sm text-gray-500 mt-1">Showing growth pattern over the last 12 months</p>
                </div>
              </div>
            </motion.div>

            {/* Verification Status Ratio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-authentiq p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <PieChart className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-bold text-white">Verification Status Ratio</h2>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-400">Pie chart would display here</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Valid: 95.5%</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">Suspicious: 4.2%</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300">Fraud: 0.3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/institution/upload"
                className="card-authentiq p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Upload className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Upload Documents</h3>
                    <p className="text-gray-300 text-sm">Add new documents to the verification system</p>
                  </div>
                </div>
              </Link>

              <Link
                to="/institution/blacklist"
                className="card-authentiq p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Review Blacklist</h3>
                    <p className="text-gray-300 text-sm">Manage flagged and fraudulent documents</p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default InstitutionDashboard;