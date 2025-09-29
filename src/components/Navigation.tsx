import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CustomButton } from './ui/custom-button';
import { cn } from '@/lib/utils';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors">
            AuthentiQ
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                isActive('/') && "text-foreground font-medium"
              )}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                isActive('/about') && "text-foreground font-medium"
              )}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                isActive('/contact') && "text-foreground font-medium"
              )}
            >
              Contact Us
            </Link>
            <Link 
              to="/how-it-works" 
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                isActive('/how-it-works') && "text-foreground font-medium"
              )}
            >
              How It Works
            </Link>
          </div>

          {/* Admin Button */}
          <CustomButton 
            variant="glass" 
            onClick={() => window.location.href = '/admin/login'}
            className="hidden sm:block"
          >
            Admin Page
          </CustomButton>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};