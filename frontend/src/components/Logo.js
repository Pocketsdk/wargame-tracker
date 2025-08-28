import React from 'react';
import pdkLogo from '../assets/pdk-logo.png';

const Logo = ({ className = '', size = 'default' }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    default: 'h-10 w-10',
    large: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <img 
      src={pdkLogo} 
      alt="PDK Logo" 
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;
