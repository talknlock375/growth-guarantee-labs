import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react';
export const CaseStudySection: React.FC = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Results for Real Businesses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we transformed Blue Ribbon SaaS from struggling campaigns to explosive growth.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-success/5 border-l-4 border-l-primary">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="font-bold text-white text-lg">BR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Blue Ribbon SaaS</h3>
                    <p className="text-muted-foreground">B2B Software Company</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  The Challenge:
                </h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Blue Ribbon was spending $15K/month on Google Ads with minimal results. 
                  High cost per lead, poor conversion rates, and no clear path to scale profitably.
                </p>
                
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  The Solution:
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Complete campaign restructure, advanced audience targeting, 
                  landing page optimization, and conversion tracking overhaul.
                </p>
              </div>
              
              {/* Right Column - Results */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div className="text-3xl font-bold text-success mb-2">4.6x</div>
                  <div className="text-sm text-muted-foreground">ROAS Improvement</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">312</div>
                  <div className="text-sm text-muted-foreground">Qualified Leads</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-warning/10 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-warning" />
                  </div>
                  <div className="text-3xl font-bold text-warning mb-2">37%</div>
                  <div className="text-sm text-muted-foreground">CPL Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold mb-3">Timeline: 90 Days</h4>
                <p className="text-muted-foreground mb-6">
                  From campaign launch to hitting all growth targets - exactly as promised.
                </p>
                <Button variant="cta" className="px-8">
                  See How We Can Help You <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};