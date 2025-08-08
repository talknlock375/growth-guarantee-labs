import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, Layers, BarChart3, FlaskConical, Settings } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="how-we-scale" className="py-20">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">How We Actually Scale Your Business</h2>
          <p className="text-lg text-muted-foreground mt-4">
            A simple, repeatable system that compounds performance across your account.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Laser-Focused Targeting</h3>
                  <p className="text-muted-foreground mt-2">Identify high-intent audiences and match them with the right offers to maximize qualified traffic.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Conversion-First Structure</h3>
                  <p className="text-muted-foreground mt-2">Clean campaign architecture that aligns keywords, ads, and landing pages for the highest possible CVR.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Aggressive Optimization</h3>
                  <p className="text-muted-foreground mt-2">Bid strategies, negative lists, and budget allocation tuned weekly for efficient CAC and stronger ROAS.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">A/B Testing & Insights</h3>
                  <p className="text-muted-foreground mt-2">Systematic testing across ads and landing pages to unlock steady CTR and CVR lift over time.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Settings className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Scaling & Automation</h3>
                  <p className="text-muted-foreground mt-2">Scale winning segments with controlled automation while protecting margins and stability.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
