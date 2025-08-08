import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, Layers, BarChart3, FlaskConical, Settings } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section
      id="how-we-scale"
      aria-labelledby="how-we-scale-title"
      className="relative py-24 bg-gradient-to-b from-background via-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs md:text-sm font-medium text-primary/80 uppercase tracking-wider">
            Our Process
          </p>
          <h2 id="how-we-scale-title" className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            How We Actually Scale Your Business
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4">
            A simple, repeatable system that compounds performance across your account.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Card className="group h-full border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/30">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Laser-Focused Targeting</h3>
                    <p className="text-muted-foreground mt-2">
                      Identify high-intent audiences and match them with the right offers to maximize qualified traffic.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </li>

          <li>
            <Card className="group h-full border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/30">
                    <Layers className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Conversion-First Structure</h3>
                    <p className="text-muted-foreground mt-2">
                      Clean campaign architecture that aligns keywords, ads, and landing pages for the highest possible CVR.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </li>

          <li>
            <Card className="group h-full border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/30">
                    <BarChart3 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Aggressive Optimization</h3>
                    <p className="text-muted-foreground mt-2">
                      Bid strategies, negative lists, and budget allocation tuned weekly for efficient CAC and stronger ROAS.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </li>

          <li>
            <Card className="group h-full border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/30">
                    <FlaskConical className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">A/B Testing & Insights</h3>
                    <p className="text-muted-foreground mt-2">
                      Systematic testing across ads and landing pages to unlock steady CTR and CVR lift over time.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </li>

          <li>
            <Card className="group h-full border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/30">
                    <Settings className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Scaling & Automation</h3>
                    <p className="text-muted-foreground mt-2">
                      Scale winning segments with controlled automation while protecting margins and stability.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </li>
        </ul>
      </div>
    </section>
  );
};
