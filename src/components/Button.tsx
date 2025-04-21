"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'text-white hover:bg-blue-700',
    secondary: 'text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 