import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Target, Layers, BarChart3, FlaskConical, Settings } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<any>(null);

  const solutions = [
    {
      icon: Target,
      title: "Laser-Focused Targeting",
      description: "Identify high-intent audiences and match them with the right offers to maximize qualified traffic."
    },
    {
      icon: Layers,
      title: "Conversion-First Structure", 
      description: "Clean campaign architecture that aligns keywords, ads, and landing pages for the highest possible CVR."
    },
    {
      icon: BarChart3,
      title: "Aggressive Optimization",
      description: "Bid strategies, negative lists, and budget allocation tuned weekly for efficient CAC and stronger ROAS."
    },
    {
      icon: FlaskConical,
      title: "A/B Testing & Insights",
      description: "Systematic testing across ads and landing pages to unlock steady CTR and CVR lift over time."
    },
    {
      icon: Settings,
      title: "Scaling & Automation",
      description: "Scale winning segments with controlled automation while protecting margins and stability."
    }
  ];

  useEffect(() => {
    const initCarousel = async () => {
      const { default: gsap } = await import('gsap');
      
      if (!containerRef.current) return;
      
      const isMobile = window.matchMedia('(max-width: 1024px)').matches;
      if (!isMobile) return;

      const container = containerRef.current;
      const cards = container.querySelectorAll('.solution-card');
      const totalCards = cards.length;
      
      // Clone cards multiple times for seamless infinite loop
      for (let i = 0; i < 2; i++) {
        cards.forEach(card => {
          const clone = card.cloneNode(true) as HTMLElement;
          clone.classList.add('clone');
          container.appendChild(clone);
        });
      }

      const allCards = container.querySelectorAll('.solution-card');
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 16;
      const totalWidth = (cardWidth + gap) * totalCards;

      // Position all cards in a continuous line
      allCards.forEach((card, index) => {
        gsap.set(card, { 
          x: index * (cardWidth + gap),
          position: 'absolute',
          top: 0,
          left: 0
        });
      });

      // Create seamless infinite loop
      timelineRef.current = gsap.timeline({ repeat: -1 });
      
      // Animate to move exactly one set's worth, then reset position seamlessly
      timelineRef.current.to(allCards, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: 'none',
        modifiers: {
          x: (x) => {
            return (parseFloat(x) % totalWidth) + 'px';
          }
        }
      });

      // Pause on hover/touch
      const pauseAnimation = () => timelineRef.current?.pause();
      const resumeAnimation = () => timelineRef.current?.resume();
      
      container.addEventListener('mouseenter', pauseAnimation);
      container.addEventListener('mouseleave', resumeAnimation);
      container.addEventListener('touchstart', pauseAnimation);
      container.addEventListener('touchend', resumeAnimation);

      return () => {
        container.removeEventListener('mouseenter', pauseAnimation);
        container.removeEventListener('mouseleave', resumeAnimation);
        container.removeEventListener('touchstart', pauseAnimation);
        container.removeEventListener('touchend', resumeAnimation);
      };
    };

    const cleanup = initCarousel();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      cleanup?.then(cleanupFn => cleanupFn?.());
    };
  }, []);

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

        {/* Desktop Grid */}
        <ul className="hidden lg:grid gap-6 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <li key={index}>
              <Card className="group h-full border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary/30">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/30">
                      <solution.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                      <p className="text-muted-foreground mt-2">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative overflow-hidden" aria-live="polite">
          <div 
            ref={containerRef}
            className="relative h-80"
            style={{ width: '100%' }}
          >
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="solution-card group border-border/60 bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary/30 w-[calc(100%-32px)] md:w-[calc(50%-24px)]"
                style={{ minWidth: 'calc(100% - 32px)' }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15 group-hover:ring-primary/30">
                      <solution.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                      <p className="text-muted-foreground mt-2">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
