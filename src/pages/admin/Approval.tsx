import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  Building, 
  Mail, 
  Phone, 
  Download, 
  CheckCircle, 
  XCircle,
  Clock,
  LogOut,
  Users
} from 'lucide-react';

const AdminApproval: React.FC = () => {
  const { toast } = useToast();

  const pendingInstitutions = [
    {
      id: 'REQ001',
      institutionName: 'Birla Institute of Technology',
      contactPerson: 'Dr. Rajesh Kumar',
      email: 'admin@bitmesra.ac.in',
      phone: '+91 651 227 5111',
      submittedDate: '2024-01-15',
      documentUrl: '#',
      status: 'Pending'
    },
    {
      id: 'REQ002',
      institutionName: 'Xavier Institute of Management',
      contactPerson: 'Prof. Sarah Williams',
      email: 'registrar@ximb.ac.in',
      phone: '+91 674 300 8000',
      submittedDate: '2024-01-14',
      documentUrl: '#',
      status: 'Pending'
    },
    {
      id: 'REQ003',
      institutionName: 'NIT Jamshedpur',
      contactPerson: 'Dr. Animesh Biswas',
      email: 'director@nitjsr.ac.in',
      phone: '+91 657 237 4205',
      submittedDate: '2024-01-12',
      documentUrl: '#',
      status: 'Pending'
    }
  ];

  const handleApprove = (institutionId: string, institutionName: string) => {
    toast({
      title: "Institution Approved!",
      description: `${institutionName} has been approved and can now access the system.`,
    });
  };

  const handleReject = (institutionId: string, institutionName: string) => {
    toast({
      title: "Application Rejected",
      description: `${institutionName}'s application has been rejected.`,
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1D2B] to-[#0F1419]">
      {/* Header */}
      <header className="bg-black/20 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">AuthentiQ Admin</h1>
                <p className="text-gray-300 text-sm">Institution Management Portal</p>
              </div>
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="card-authentiq p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Pending Requests</p>
                <p className="text-2xl font-bold text-white">{pendingInstitutions.length}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <div className="card-authentiq p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Approved Today</p>
                <p className="text-2xl font-bold text-white">5</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </div>
          <div className="card-authentiq p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Total Institutions</p>
                <p className="text-2xl font-bold text-white">247</p>
              </div>
              <Building className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="card-authentiq p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-white">1,432</p>
              </div>
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </motion.div>

        {/* Pending Approvals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-authentiq overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white mb-2">Pending Institution Approvals</h2>
            <p className="text-gray-300">Review and approve institution registration requests</p>
          </div>

          <div className="divide-y divide-white/10">
            {pendingInstitutions.map((institution, index) => (
              <motion.div
                key={institution.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Institution Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {institution.institutionName}
                        </h3>
                        <p className="text-gray-300 text-sm">Request ID: {institution.id}</p>
                        <p className="text-gray-400 text-sm">
                          Submitted: {institution.submittedDate}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-white font-medium">{institution.contactPerson}</p>
                          <p className="text-gray-300 text-sm">{institution.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-white font-medium">Contact Number</p>
                          <p className="text-gray-300 text-sm">{institution.phone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Document Download */}
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                      <Download className="w-5 h-5 text-blue-400" />
                      <div className="flex-1">
                        <p className="text-white font-medium">Approval Letter</p>
                        <p className="text-gray-300 text-sm">Official institutional authorization document</p>
                      </div>
                      <CustomButton
                        variant="glass"
                        className="text-sm"
                        onClick={() => window.open(institution.documentUrl, '_blank')}
                      >
                        View Document
                      </CustomButton>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 min-w-48">
                    <CustomButton
                      onClick={() => handleApprove(institution.id, institution.institutionName)}
                      className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-300 border-green-500/40"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve Request
                    </CustomButton>
                    <CustomButton
                      onClick={() => handleReject(institution.id, institution.institutionName)}
                      className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-300 border-red-500/40"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject Request
                    </CustomButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {pendingInstitutions.length === 0 && (
            <div className="p-12 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">All Caught Up!</p>
              <p className="text-gray-400">No pending institution approval requests at this time.</p>
            </div>
          )}
        </motion.div>

        {/* Admin Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card-authentiq p-6 text-center">
            <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">System Statistics</h3>
            <p className="text-gray-300 text-sm mb-4">View comprehensive system usage and performance metrics</p>
            <CustomButton variant="glass" className="w-full">
              View Analytics
            </CustomButton>
          </div>

          <div className="card-authentiq p-6 text-center">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">User Management</h3>
            <p className="text-gray-300 text-sm mb-4">Manage user accounts, permissions, and access controls</p>
            <CustomButton variant="glass" className="w-full">
              Manage Users
            </CustomButton>
          </div>

          <div className="card-authentiq p-6 text-center">
            <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Security Logs</h3>
            <p className="text-gray-300 text-sm mb-4">Monitor security events and access logs across the platform</p>
            <CustomButton variant="glass" className="w-full">
              View Logs
            </CustomButton>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminApproval;