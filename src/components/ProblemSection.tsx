import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingDown, AlertTriangle, FileText } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "We're spending thousands on Google Ads… but can't see where it's going.",
      description: "Your ad spend disappears into a black hole with no clear attribution or meaningful insights."
    },
    {
      icon: AlertTriangle,
      title: "Our leads suck. They don't convert.",
      description: "You're getting clicks and even leads, but they're low-quality prospects who never become paying customers."
    },
    {
      icon: FileText,
      title: "Our agency keeps sending fancy reports, but no growth.",
      description: "Beautiful dashboards and reports that look impressive but don't translate to actual revenue growth."
    }
  ];

  return (
    <section className="py-20 dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You're not alone. 87% of businesses struggle with these exact same Google Ads challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow dark-card">
              <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-full flex items-center justify-center">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-foreground">
            The good news? <span className="text-primary font-bold">There's a proven way to fix this.</span>
          </p>
        </div>
      </div>
    </section>
  );
};