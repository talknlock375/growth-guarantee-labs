import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  const brands = [
    { name: 'Shopify', logo: '🛍️' },
    { name: 'Upgrad', logo: '🎓' },
    { name: 'Blinkit', logo: '⚡' },
    { name: 'Nomad Travels', logo: '✈️' }
  ];

  const certifications = [
    { name: 'Google Partner', badge: '🏆' },
    { name: 'Meta Blueprint', badge: '📘' },
    { name: 'HubSpot Certified', badge: '🔶' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Trusted By Brands */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Trusted by Industry Leaders
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg px-6 py-4 shadow-sm">
                <span className="text-2xl">{brand.logo}</span>
                <span className="font-semibold text-lg">{brand.name}</span>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                <span className="mr-2">{cert.badge}</span>
                {cert.name}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white shadow-lg">
            <div className="text-center">
              <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-20" />
              
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground">
                "AdScale Pro completely transformed our Google Ads performance. Within 90 days, we saw a 4.6x ROAS improvement and generated 312 qualified leads. Their strategic approach and transparent reporting gave us the confidence to scale our ad spend significantly."
              </blockquote>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              
              <cite className="not-italic">
                <div className="font-bold text-lg">Sarah Johnson</div>
                <div className="text-muted-foreground">VP of Marketing, Blue Ribbon SaaS</div>
              </cite>
            </div>
          </Card>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Campaigns Optimized</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
            <div className="text-muted-foreground">Ad Spend Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2.8x</div>
            <div className="text-muted-foreground">Average ROAS Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
};