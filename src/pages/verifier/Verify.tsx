import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Shield, LogOut, Upload, FileText, CheckCircle, XCircle, AlertTriangle, Download } from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';

const VerifierVerify: React.FC = () => {
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [verificationResults, setVerificationResults] = useState<any[]>([]);
  const [isVerifying, setIsVerifying] = useState(false);

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/verifier/dashboard' },
    { name: 'Verifier Page', icon: Shield, path: '/verifier/verify', active: true },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleVerification = async () => {
    if (!uploadedFile) return;
    
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      const mockResults = [
        {
          id: Date.now(),
          fileName: uploadedFile.name,
          status: 'Accepted',
          confidence: 98,
          institution: 'MIT',
          details: 'Document successfully verified against institutional records.',
          timestamp: new Date().toLocaleString()
        }
      ];
      
      setVerificationResults(prev => [...mockResults, ...prev]);
      setIsVerifying(false);
      setUploadedFile(null);
      
      toast({
        title: "Verification Complete!",
        description: "Document has been successfully verified.",
      });
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Accepted': return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'Rejected': return <XCircle className="w-6 h-6 text-yellow-400" />;
      case 'Fraud': return <AlertTriangle className="w-6 h-6 text-red-400" />;
      default: return <FileText className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted': return 'text-green-400 bg-green-500/20';
      case 'Rejected': return 'text-yellow-400 bg-yellow-500/20';
      case 'Fraud': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

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
          <Link
            to="/"
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </Link>
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
            <h1 className="text-4xl font-bold text-white mb-2">Document Verification</h1>
            <p className="text-gray-300">Upload candidate documents for instant verification</p>
          </motion.div>

          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-authentiq p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Upload Document</h2>
            
            <div className="border-2 border-dashed border-white/30 rounded-xl p-12 text-center hover:border-white/50 transition-colors">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Upload Candidate Document
              </h3>
              <p className="text-gray-300 mb-4">
                or drag and drop the file here
              </p>
              <p className="text-sm text-gray-400">
                Supports PDF, DOC, DOCX, JPG, PNG • Max 10MB
              </p>
            </div>

            {uploadedFile && (
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">{uploadedFile.name}</p>
                      <p className="text-gray-400 text-sm">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <CustomButton
                    onClick={handleVerification}
                    disabled={isVerifying}
                    variant="hero"
                    className="px-6 py-2"
                  >
                    {isVerifying ? 'Verifying...' : 'Verify Document'}
                  </CustomButton>
                </div>
              </div>
            )}
          </motion.div>

          {/* Results Section */}
          {verificationResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-authentiq p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Verification Results</h2>
                <CustomButton variant="glass" className="text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download CSV
                </CustomButton>
              </div>
              
              <div className="space-y-4">
                {verificationResults.map((result) => (
                  <div key={result.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <div className="flex items-start gap-4">
                      {getStatusIcon(result.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{result.fileName}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(result.status)}`}>
                            {result.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-2">{result.details}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Institution: {result.institution}</span>
                          <span>Confidence: {result.confidence}%</span>
                          <span>Verified: {result.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Alert for missing institutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              <h3 className="text-lg font-semibold text-yellow-300">Institution Not Found</h3>
            </div>
            <p className="text-yellow-200">
              If the institution you're trying to verify against is not found in the AuthentiQ system, 
              please contact the institution directly to join our verification network.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default VerifierVerify;