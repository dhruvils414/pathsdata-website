'use client';

import Link from 'next/link';

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const GradientButton = ({ children, href, onClick, className = '', type = 'button' }: GradientButtonProps) => {
  const baseClass = `inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white rounded-full cursor-pointer hover:opacity-90 transition-opacity font-medium ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, href, onClick, className = '' }: GradientButtonProps) => {
  const baseClass = `inline-block px-8 py-3 bg-slate-800/50 text-slate-300 border border-slate-700 rounded-full cursor-pointer hover:bg-slate-700/50 transition-colors ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
};

export const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);
