"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PreloaderProps {
  duration?: number;
  logoPath?: string;
}

export default function Preloader({ 
  duration = 3000, 
  logoPath = '/logo.svg' 
}: PreloaderProps) {
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
      <div className="relative">
        {/* Audio wave animation effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 bg-primary rounded-full"
                style={{
                  height: '40px',
                  animation: `audioWave 1s ease-in-out ${i * 0.15}s infinite alternate`,
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Logo with scale animation */}
        <div 
          className="relative z-10"
          style={{
            animation: 'logoScale 2s ease-in-out infinite',
          }}
        >
          <div className="relative w-28 h-28">
            <Image 
              src={logoPath}
              alt="Acoustc Den Logo"
              fill
              priority
              className="object-contain opacity-90"
            />
          </div>
        </div>
        
        {/* Circular pulse around logo */}
        <div 
          className="absolute inset-0 rounded-full border-2 border-primary"
          style={{
            animation: 'pulse 2s ease-out infinite',
          }}
        ></div>
      </div>
      
      {/* Add text that fades in */}
      <div 
        className="absolute bottom-16 text-center text-lg font-playfair"
        style={{
          animation: 'fadeIn 1s ease-in-out forwards',
        }}
      >
        Experience Audio Excellence
      </div>
      
      {/* Add the required keyframe animations to head */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
        
        @keyframes logoScale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes audioWave {
          0% {
            height: 10px;
          }
          100% {
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}