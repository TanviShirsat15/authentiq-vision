import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload, 
  AlertTriangle, 
  LogOut, 
  Search,
  RefreshCw,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';

const InstitutionBlacklist: React.FC = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/institution/dashboard' },
    { name: 'Uploader Page', icon: Upload, path: '/institution/upload' },
    { name: 'Blacklist Page', icon: AlertTriangle, path: '/institution/blacklist', active: true },
  ];

  const blacklistedDocuments = [
    {
      id: 'DOC001',
      studentName: 'John Smith',
      documentType: 'Bachelor Degree',
      flaggedDate: '2024-01-15',
      flaggedBy: 'TechCorp Ltd.',
      reason: 'Grade manipulation detected',
      status: 'Confirmed Fraud',
      confidence: 95
    },
    {
      id: 'DOC002',
      studentName: 'Sarah Johnson',
      documentType: 'Transcript',
      flaggedDate: '2024-01-12',
      flaggedBy: 'GlobalBank Inc.',
      reason: 'Altered GPA values',
      status: 'Under Review',
      confidence: 87
    },
    {
      id: 'DOC003',
      studentName: 'Mike Wilson',
      documentType: 'Certificate',
      flaggedDate: '2024-01-10',
      flaggedBy: 'StartupXYZ',
      reason: 'Forged signature detected',
      status: 'Confirmed Fraud',
      confidence: 98
    },
    {
      id: 'DOC004',
      studentName: 'Emma Davis',
      documentType: 'Master Degree',
      flaggedDate: '2024-01-08',
      flaggedBy: 'ConsultingFirm',
      reason: 'Invalid course codes',
      status: 'Pending Investigation',
      confidence: 78
    }
  ];

  const handleRecheck = (docId: string) => {
    toast({
      title: "Recheck Initiated",
      description: `Document ${docId} has been queued for manual review.`,
    });
  };

  const handleConfirmBlacklist = (docId: string) => {
    toast({
      title: "Document Blacklisted",
      description: `Document ${docId} has been permanently flagged in the system.`,
    });
  };

  const filteredDocuments = blacklistedDocuments.filter(doc =>
    doc.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.documentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed Fraud': return 'text-red-400';
      case 'Under Review': return 'text-yellow-400';
      case 'Pending Investigation': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'Confirmed Fraud': return 'bg-red-500/20';
      case 'Under Review': return 'bg-yellow-500/20';
      case 'Pending Investigation': return 'bg-blue-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black/20 border-r border-white/10 backdrop-blur-sm flex flex-col">
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
          <Link
            to="/"
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">Blacklist Management</h1>
            <p className="text-gray-300">Review and manage fraudulent document flags</p>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          >
            <div className="card-authentiq p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Flagged</p>
                  <p className="text-2xl font-bold text-white">43</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </div>
            <div className="card-authentiq p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Confirmed Fraud</p>
                  <p className="text-2xl font-bold text-white">28</p>
                </div>
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
            </div>
            <div className="card-authentiq p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Under Review</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <Eye className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <div className="card-authentiq p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Resolved</p>
                  <p className="text-2xl font-bold text-white">3</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-authentiq p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by student name, document type, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <CustomButton variant="glass">
                Filter by Status
              </CustomButton>
            </div>
          </motion.div>

          {/* Blacklist Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-authentiq overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Flagged Documents</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Document ID</th>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Student Name</th>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Document Type</th>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Flagged By</th>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Date</th>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Status</th>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Confidence</th>
                    <th className="text-left px-6 py-4 text-gray-300 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDocuments.map((doc, index) => (
                    <tr key={doc.id} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-white font-mono">{doc.id}</td>
                      <td className="px-6 py-4 text-white">{doc.studentName}</td>
                      <td className="px-6 py-4 text-gray-300">{doc.documentType}</td>
                      <td className="px-6 py-4 text-gray-300">{doc.flaggedBy}</td>
                      <td className="px-6 py-4 text-gray-300">{doc.flaggedDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBg(doc.status)} ${getStatusColor(doc.status)}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-2 bg-white/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-red-400 transition-all"
                              style={{ width: `${doc.confidence}%` }}
                            />
                          </div>
                          <span className="text-white text-sm">{doc.confidence}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleRecheck(doc.id)}
                            className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors"
                            title="Recheck"
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleConfirmBlacklist(doc.id)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                            title="Confirm Blacklist"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredDocuments.length === 0 && (
              <div className="p-12 text-center">
                <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">No flagged documents found</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default InstitutionBlacklist;