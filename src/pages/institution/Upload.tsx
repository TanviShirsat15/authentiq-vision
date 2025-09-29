import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Upload as UploadIcon, 
  AlertTriangle, 
  LogOut, 
  FileText,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { CustomButton } from '@/components/ui/custom-button';
import { useToast } from '@/hooks/use-toast';

const InstitutionUpload: React.FC = () => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [documentType, setDocumentType] = useState('certificate');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/institution/dashboard' },
    { name: 'Uploader Page', icon: UploadIcon, path: '/institution/upload', active: true },
    { name: 'Blacklist Page', icon: AlertTriangle, path: '/institution/blacklist' },
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const handleUpload = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select files to upload first.",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Upload Successful!",
        description: `${uploadedFiles.length} documents uploaded and processing started.`,
      });
      setUploadedFiles([]);
    }, 3000);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
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
            <h1 className="text-4xl font-bold text-white mb-2">Document Uploader</h1>
            <p className="text-gray-300">Upload and process documents for verification</p>
          </motion.div>

          {/* Document Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-authentiq p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Document Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: 'certificate', label: 'Certificate' },
                { value: 'transcript', label: 'Transcript' },
                { value: 'diploma', label: 'Diploma' },
                { value: 'license', label: 'License' }
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() => setDocumentType(type.value)}
                  className={`p-4 rounded-lg border transition-all ${
                    documentType === type.value
                      ? 'bg-white/20 border-white/40 text-white'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Upload Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-authentiq p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Upload Documents</h2>
            
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                dragActive
                  ? 'border-white/60 bg-white/10'
                  : 'border-white/30 hover:border-white/50 hover:bg-white/5'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <UploadIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Drag & Drop Documents Here
              </h3>
              <p className="text-gray-300 mb-4">
                or click to browse files
              </p>
              <p className="text-sm text-gray-400">
                Supports PDF, DOC, DOCX, JPG, PNG • Max 10MB per file
              </p>
            </div>

            {/* File List */}
            {uploadedFiles.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Selected Files ({uploadedFiles.length})
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">{file.name}</p>
                          <p className="text-gray-400 text-sm">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload Button */}
            <div className="mt-8 flex justify-center">
              <CustomButton
                onClick={handleUpload}
                disabled={uploading || uploadedFiles.length === 0}
                variant="hero"
                className="px-12 py-4 text-lg"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <UploadIcon className="w-5 h-5 mr-2" />
                    Upload Documents
                  </>
                )}
              </CustomButton>
            </div>

            {/* Loading Animation */}
            {uploading && (
              <div className="mt-8 text-center">
                <div className="loader-authentiq mx-auto">
                  <div className="box">
                    <div className="logo">
                      <CheckCircle className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                <p className="text-gray-300 mt-4">
                  Processing documents and generating blockchain hashes...
                </p>
              </div>
            )}
          </motion.div>

          {/* Upload Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-authentiq p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">Upload Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Supported Formats</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• PDF documents (preferred)</li>
                  <li>• Microsoft Word (DOC, DOCX)</li>
                  <li>• Images (JPG, PNG)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Best Practices</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Ensure documents are clear and readable</li>
                  <li>• Use official letterheads when possible</li>
                  <li>• Include all relevant signatures and seals</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default InstitutionUpload;