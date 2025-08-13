import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { LeadForm } from './LeadForm';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

import heroImage from '@/assets/hero-bg.jpg';
export const HeroSection: React.FC = () => {
  const fireRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Fire/glow effect removed per requirements
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-12 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95 parallax" data-parallax="true" data-speed="0.15"></div>
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-40 parallax"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
        data-parallax="true"
        data-speed="0.25"
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headlines & CTA */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Free Growth Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Struggling to Scale with{' '}
              <span ref={fireRef} className="text-[hsl(var(--accent-gold))] font-semibold">
                Google Ads?
              </span>
            </h1>
            
            <h2 className="text-xl font-medium mb-8 text-white/90 leading-relaxed md:text-2xl line-clamp-2 md:[-webkit-line-clamp:unset] md:[display:block] md:[-webkit-box-orient:unset]">
              Free Audit & Growth Plan to Fix Your Ads in 90 Days.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild variant="cta" size="lg" className="text-lg px-8 py-4">
                <a href="#lead-form">Get Free Audit <ArrowRight className="h-5 w-5" /></a>
              </Button>
              <Button asChild variant="ctaOutline" size="lg" className="text-lg px-8 py-4">
                <a href="#lead-form">View Case Studies</a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">500+ Clients Scaled</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span className="text-sm">90-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Average 6.8x ROAS</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Lead Form */}
          <div className="lg:pl-8">
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};