import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { EB_Garamond, Inter } from 'next/font/google';
import { ChevronRight } from 'lucide-react';

// Fonts remain the same
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
});

// Interface remains the same
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string; // imageSrc is now used again
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  tertiaryButtonText?: string;
  tertiaryButtonUrl?: string;
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
}: HeroSectionProps) {
  const wedgeClipPath = 'polygon(0%_0%,_100%_0%,_60%_100%,_0%_100%)';
  // Tailwind arbitrary value needs underscores (_) instead of spaces.

  return (
    <div className="hero-section relative overflow-hidden min-h-[70vh] sm:min-h-[60vh] md:min-h-[75vh]"> 

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title || 'Hero background'}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-0 z-10 bg-deep-aqua opacity-60" // Deep Aqua overlay with opacity
        style={{ clipPath: wedgeClipPath.replace(/_/g, ' ') }} // Apply clip-path (using style prop for clarity here, or arbitrary value)
      ></div>

      <div className="relative z-20 flex h-full min-h-[70vh] sm:min-h-[60vh] md:min-h-[75vh] items-center justify-center px-4 py-16 sm:py-20 md:py-24"> {/* Ensure this container matches parent min-height */}
        <div className="container mx-auto flex h-full items-center">

            <div className="hero-content max-w-3xl text-left text-peach-cream">
              <div className="mb-6 h-px w-16 bg-peach-cream sm:mb-8"></div>

              <h1
                // Font, size, weight, spacing remain as you liked
                className={`${ebGaramond.className} mb-4 text-4xl font-medium leading-tight tracking-normal sm:text-5xl md:mb-5 md:text-6xl lg:text-7xl`}
              >
                {title}
              </h1>

              {subtitle && (
                <h2
                  // Font, size, weight, spacing remain as you liked, adjust opacity if needed
                  className={`${inter.className} text-lg font-light leading-relaxed text-peach-cream/90 sm:text-xl md:text-2xl lg:text-3xl`} // Opacity relative to peach-cream
                >
                  {subtitle}
                </h2>
              )}

              {/* Optional Button Area (style for peach-cream text) */}
              {/*
              <div className="mt-8 flex justify-start gap-4 md:mt-10">
                // Buttons styled for light text on potentially dark/mixed background
              </div>
              */}
            </div>
        </div>
      </div>
    </div>
  );
}