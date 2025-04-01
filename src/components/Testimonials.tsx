"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  title?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function Testimonials({
  testimonials,
  title = "What our clients say",
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 md:py-32 relative bg-background">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {title && <h2 className="text-3xl md:text-4xl font-playfair mb-12">{title}</h2>}

          <div className="relative px-12 md:px-16">
            {/* Left quote - positioned absolutely but with enough padding to prevent overlap */}
            <div className="absolute top-0 left-0 md:left-0">
              <Quote className="w-10 h-10 md:w-12 md:h-12" />
            </div>

            <div className="min-h-[200px] flex items-center justify-center py-6">
              <div className="transition-opacity duration-500 w-full">
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  {testimonials[activeIndex].quote}
                </p>
                <div className="mt-8">
                  <p className="font-medium text-xl font-playfair">
                    {testimonials[activeIndex].author}
                  </p>
                  {testimonials[activeIndex].title && (
                    <p className="text-teal-600">
                      {testimonials[activeIndex].title}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right quote - positioned absolutely but with enough padding to prevent overlap */}
            <div className="absolute bottom-0 right-0 md:right-0">
              <Quote className="w-10 h-10 md:w-12 md:h-12 transform rotate-180" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border  flex items-center justify-center hover:bg-teal-100 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border  flex items-center justify-center hover:bg-teal-100 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
