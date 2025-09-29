import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hero' | 'glass';
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  children, 
  variant = 'default', 
  className, 
  ...props 
}) => {
  if (variant === 'hero') {
    return (
      <button 
        className={cn("custom-btn-hero", className)} 
        {...props}
      >
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text">{children}</span>
      </button>
    );
  }

  if (variant === 'glass') {
    return (
      <button 
        className={cn("btn-glass px-6 py-3 rounded-lg font-semibold text-white transition-all", className)} 
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button 
      className={cn("btn-authentiq", className)} 
      {...props}
    >
      {children}
    </button>
  );
};