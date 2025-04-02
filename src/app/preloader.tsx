// components/Preloader.tsx
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PreloaderProps {
  duration?: number; // Duration in milliseconds
  logoPath?: string; // Path to your SVG logo
}

const Preloader: React.FC<PreloaderProps> = ({ 
  duration = 2000,
  logoPath = '/logo.svg' // Default path, update to your actual logo path
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      style={{
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className="animate-pulse">
        <Image 
          src={logoPath}
          alt="Acoustc Den Logo"
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
};

export default Preloader;