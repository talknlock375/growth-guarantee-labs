import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "In just 60 days, we doubled our inbound leads and reduced cost-per-lead by 35%. Talknlock’s strategies actually work.",
      author: 'Ravi Mehta',
      role: 'Founder, GrowthLabs',
    },
    {
      quote:
        'The transparency in reporting and the real-time ROI dashboard changed how we look at paid ads. Finally, numbers we can trust.',
      author: 'Claire Thompson',
      role: 'CMO, FinReach',
    },
    {
      quote:
        'Within 3 months, our revenue grew by 2.3x, and we’re still scaling. The A/B testing process is relentless.',
      author: 'David Kim',
      role: 'CEO, EcomElite',
    },
    {
      quote:
        'We’ve worked with agencies before, but this is the first time we got a clear strategy and measurable results in weeks.',
      author: 'Priya Nair',
      role: 'Director, SaaSConnect',
    },
    {
      quote:
        'Talknlock transformed our ad campaigns from break-even to profitable in under 45 days.',
      author: 'Lucas Brown',
      role: 'Head of Marketing, ProBuild',
    },
    {
      quote:
        'A complete game-changer — their CRO work alone paid for the campaign in the first month.',
      author: 'Amira Khan',
      role: 'Founder, LuxeGems',
    },
    {
      quote:
        'They know exactly how to target high-value leads without wasting budget. Highly recommend.',
      author: 'Oliver White',
      role: 'CEO, TravelVista',
    },
    {
      quote:
        'I finally understand where my ad spend goes, and the results speak for themselves.',
      author: 'Elena Petrova',
      role: 'CMO, SoftCore Solutions',
    },
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !trackRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current as HTMLDivElement;
      const gap = 24; // gap-6

      const build = () => {
        // Ensure duplicated content for seamless loop
        if (track.dataset.duplicated !== 'true') {
          const children = Array.from(track.children);
          children.forEach((child) => track.appendChild(child.cloneNode(true)));
          track.dataset.duplicated = 'true';
        }

        // Calculate half width (original set)
        const originalChildren = Array.from(track.children)
          .slice(0, testimonials.length) as HTMLElement[];
        const distance =
          originalChildren.reduce((acc, el) => acc + el.offsetWidth, 0) +
          gap * (originalChildren.length - 1);

        // Staggered fade-in on first appearance
        gsap.from(originalChildren, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: marqueeRef.current!,
            start: 'top 80%',
          },
        });

        const tween = gsap.to(track, {
          x: `-=${distance}`,
          duration: 25,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: (x: string) => {
              const val = parseFloat(x);
              const m = -distance;
              return isNaN(val) ? x : ((val % m) + m) % m + 'px';
            },
          },
          paused: true,
        });

        const st = ScrollTrigger.create({
          trigger: marqueeRef.current!,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => tween.play(),
          onEnterBack: () => tween.play(),
          onLeave: () => tween.pause(),
          onLeaveBack: () => tween.pause(),
        });

        const pause = () => tween.pause();
        const play = () => tween.play();
        marqueeRef.current!.addEventListener('mouseenter', pause);
        marqueeRef.current!.addEventListener('mouseleave', play);
        marqueeRef.current!.addEventListener('touchstart', pause);
        marqueeRef.current!.addEventListener('touchend', play);

        return () => {
          marqueeRef.current?.removeEventListener('mouseenter', pause);
          marqueeRef.current?.removeEventListener('mouseleave', play);
          marqueeRef.current?.removeEventListener('touchstart', pause);
          marqueeRef.current?.removeEventListener('touchend', play);
          st.kill();
          tween.kill();
        };
      };

      let cleanup = build();
      const onResize = () => {
        cleanup?.();
        gsap.set(track, { x: 0 });
        cleanup = build();
      };
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
        cleanup?.();
      };
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 md:py-20 bg-surface-subtle">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Businesses Worldwide</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full gradient-cta"></div>
        </div>

        {/* Desktop/Tablet: GSAP marquee */}
        <div
          ref={marqueeRef}
          className="relative hidden md:block overflow-hidden"
          data-parallax="true"
          data-speed="0.05"
        >
          <div ref={trackRef} className="flex items-stretch gap-6 will-change-transform">
            {testimonials.map((t, idx) => (
              <Card
                key={idx}
                className="min-w-[48%] lg:min-w-[32%] p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[18px] leading-relaxed text-foreground/90">{t.quote}</p>
                <div className="mt-4 text-sm text-muted-foreground">
                  — {t.author}, {t.role}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile: swipeable scroll-snap */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4">
            {testimonials.map((t, idx) => (
              <Card
                key={idx}
                className="snap-center shrink-0 w-[85%] p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[18px] leading-relaxed text-foreground/90">{t.quote}</p>
                <div className="mt-4 text-sm text-muted-foreground">
                  — {t.author}, {t.role}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
