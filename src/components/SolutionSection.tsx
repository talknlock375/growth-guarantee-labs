import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Layers, BarChart3, FlaskConical, Settings, ArrowRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const solutions = [
    {
      icon: Target,
      title: "Conversion-Focused, Not Click-Obsessed",
      description: "We optimize for revenue, not vanity metrics. Every campaign decision is driven by your bottom line."
    },
    {
      icon: Layers,
      title: "Custom Strategy, Not Copy-Paste Campaigns",
      description: "Your business is unique. We build tailored strategies based on your specific market, customers, and goals."
    },
    {
      icon: BarChart3,
      title: "Real-Time ROI Dashboard",
      description: "See exactly how much revenue each ad dollar generates with our transparent, real-time tracking system."
    },
    {
      icon: FlaskConical,
      title: "Relentless A/B Testing",
      description: "We test everything - ads, landing pages, audiences, bidding strategies - to continuously improve performance."
    },
    {
      icon: Settings,
      title: "100% Tracking Setup Included",
      description: "Proper attribution from click to customer. No more guessing where your best leads come from."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We <span className="text-gradient">Actually</span> Scale Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Forget cookie-cutter approaches. We build Paid Ad Systems that are engineered for your specific business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="w-12 h-12 mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to See What's Possible?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get a detailed analysis of your current campaigns and a custom growth plan - completely free.
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Get Your Free Audit <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};