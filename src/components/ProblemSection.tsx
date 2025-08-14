import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingDown, AlertTriangle, FileText } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<any>(null);

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

  useEffect(() => {
    const initCarousel = async () => {
      const { default: gsap } = await import('gsap');
      
      if (!containerRef.current) return;
      
      const isMobile = window.matchMedia('(max-width: 1024px)').matches;
      if (!isMobile) return;

      const container = containerRef.current;
      const cards = container.querySelectorAll('.problem-card');
      const totalCards = cards.length;
      
      // Clone cards for infinite loop
      cards.forEach(card => {
        const clone = card.cloneNode(true) as HTMLElement;
        clone.classList.add('clone');
        container.appendChild(clone);
      });

      const allCards = container.querySelectorAll('.problem-card');
      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 16;
      const totalWidth = (cardWidth + gap) * totalCards;

      // Position cards
      allCards.forEach((card, index) => {
        gsap.set(card, { 
          x: index * (cardWidth + gap),
          position: 'absolute',
          top: 0,
          left: 0
        });
      });

      // Create infinite loop animation
      timelineRef.current = gsap.timeline({ repeat: -1 });
      timelineRef.current.to(allCards, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: 'none'
      });

      // Pause on hover/touch
      container.addEventListener('mouseenter', () => timelineRef.current?.pause());
      container.addEventListener('mouseleave', () => timelineRef.current?.resume());
      container.addEventListener('touchstart', () => timelineRef.current?.pause());
      container.addEventListener('touchend', () => timelineRef.current?.resume());
    };

    initCarousel();

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You're not alone. 87% of businesses struggle with these exact same Google Ads challenges.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow bg-white">
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

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative overflow-hidden" aria-live="polite">
          <div 
            ref={containerRef}
            className="relative h-80"
            style={{ width: '100%' }}
          >
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="problem-card p-6 md:p-8 text-center hover:shadow-lg transition-shadow bg-white w-[calc(100%-32px)] md:w-[calc(50%-24px)]"
                style={{ minWidth: 'calc(100% - 32px)' }}
              >
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