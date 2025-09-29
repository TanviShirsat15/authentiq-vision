import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import InstitutionLogin from "./pages/institution/Login";
import InstitutionDashboard from "./pages/institution/Dashboard";
import InstitutionUpload from "./pages/institution/Upload";
import InstitutionBlacklist from "./pages/institution/Blacklist";
import AdminLogin from "./pages/admin/Login";
import AdminApproval from "./pages/admin/Approval";
import VerifierLogin from "./pages/verifier/Login";
import VerifierDashboard from "./pages/verifier/Dashboard";
import VerifierVerify from "./pages/verifier/Verify";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          
          {/* Institution Routes */}
          <Route path="/institution/login" element={<InstitutionLogin />} />
          <Route path="/institution/dashboard" element={<InstitutionDashboard />} />
          <Route path="/institution/upload" element={<InstitutionUpload />} />
          <Route path="/institution/blacklist" element={<InstitutionBlacklist />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/approval" element={<AdminApproval />} />
          
          {/* Verifier Routes */}
          <Route path="/verifier/login" element={<VerifierLogin />} />
          <Route path="/verifier/dashboard" element={<VerifierDashboard />} />
          <Route path="/verifier/verify" element={<VerifierVerify />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
