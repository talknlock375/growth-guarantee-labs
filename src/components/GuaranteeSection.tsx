import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-success/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-8">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">100% Risk-Free Guarantee</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-[-0.5px] leading-[1.2] md:leading-[1.1]" data-parallax="true" data-speed="0.08">
            We Build Paid Ad Systems That{' '}
            <span className="text-gradient">2x Your Revenue</span>{' '}
            in 90 Days
          </h2>
          
          <div className="text-2xl md:text-3xl font-bold mb-12 text-foreground">
            Or We Work for Free Until We Do.
          </div>
          
          <Card className="p-8 md:p-12 bg-white shadow-xl max-w-3xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">90-Day Timeline</h3>
                <p className="text-muted-foreground text-sm">Results within 3 months or extended service at no cost</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-bold text-lg mb-2">2x Revenue Growth</h3>
                <p className="text-muted-foreground text-sm">Measurable revenue increase or we continue working</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Zero Risk</h3>
                <p className="text-muted-foreground text-sm">Your success is guaranteed or you pay nothing more</p>
              </div>
            </div>
            
            <div className="border-t pt-8">
              <h4 className="font-bold text-xl mb-4">What This Guarantee Covers:</h4>
              <ul className="text-left space-y-3 mb-8 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete Google Ads & Meta Ads strategy and execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Landing page optimization and conversion tracking setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Monthly strategy reviews and campaign optimizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real-time ROI dashboard and transparent reporting</span>
                </li>
              </ul>
            </div>
          </Card>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're so confident in our system that we're willing to put our money where our mouth is. 
              Your success is our success.
            </p>
            
            <Button asChild variant="cta" size="lg" className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6">
              <a href="#lead-form">Claim Your Free Audit Now <ArrowRight className="h-5 w-5 md:h-6 md:w-6" /></a>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Limited spots available. We only work with 10 new clients per month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};