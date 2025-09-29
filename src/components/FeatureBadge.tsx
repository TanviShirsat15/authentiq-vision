import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const FeatureBadge: React.FC<FeatureBadgeProps> = ({ children, className }) => {
  return (
    <div className={cn("badge-feature", className)}>
      {children}
      <span className="badge-shine"></span>
    </div>
  );
};