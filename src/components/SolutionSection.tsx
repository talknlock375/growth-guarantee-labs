import React from 'react';
import { Card } from '@/components/ui/card';

import { Target, Layers, BarChart3, FlaskConical, Settings } from 'lucide-react';

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
        
      </div>
    </section>
  );
};