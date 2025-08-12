import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, Percent, CalendarCheck, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const CaseStudySection: React.FC = () => {
  const caseStudies = [
    {
      company: 'SkyReach CRM',
      subtitle: 'B2B Software',
      metrics: [
        { label: 'ROAS improvement', value: '6.4x', icon: 'TrendingUp' },
        { label: 'Revenue generated', value: '$1.8M', icon: 'DollarSign' },
        { label: 'CPL reduction', value: '34%', icon: 'Percent' },
        { label: 'Qualified leads', value: '312', icon: 'Users' },
      ],
      timeline: '90 days',
    },
    {
      company: 'Nomad Gear Co.',
      subtitle: 'D2C E-commerce',
      metrics: [
        { label: 'ROAS improvement', value: '6.9x', icon: 'TrendingUp' },
        { label: 'Revenue generated', value: '$2.6M', icon: 'DollarSign' },
        { label: 'CPA reduction', value: '29%', icon: 'Percent' },
        { label: 'New customers', value: '7,420', icon: 'Users' },
      ],
      timeline: '120 days',
    },
    {
      company: 'FinReach Capital',
      subtitle: 'FinTech',
      metrics: [
        { label: 'ROAS improvement', value: '6.1x', icon: 'TrendingUp' },
        { label: 'Revenue generated', value: '$1.3M', icon: 'DollarSign' },
        { label: 'SQLs generated', value: '540', icon: 'Users' },
        { label: 'CAC reduction', value: '23%', icon: 'Percent' },
      ],
      timeline: '90 days',
    },
    {
      company: 'LuxeGems',
      subtitle: 'Luxury Jewelry',
      metrics: [
        { label: 'ROAS improvement', value: '6.7x', icon: 'TrendingUp' },
        { label: 'Revenue generated', value: '$3.0M', icon: 'DollarSign' },
        { label: 'AOV lift', value: '+18%', icon: 'Percent' },
        { label: 'Repeat purchase rate', value: '+22%', icon: 'Percent' },
      ],
      timeline: '120 days',
    },
    {
      company: 'TravelVista',
      subtitle: 'Premium Tours',
      metrics: [
        { label: 'ROAS improvement', value: '6.3x', icon: 'TrendingUp' },
        { label: 'Revenue generated', value: '$1.9M', icon: 'DollarSign' },
        { label: 'Bookings', value: '1,120', icon: 'CalendarCheck' },
        { label: 'CPL reduction', value: '31%', icon: 'Percent' },
      ],
      timeline: '90 days',
    },
  ] as const;

  const IconFor = ({ name, className }: { name: string; className?: string }) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'DollarSign':
        return <DollarSign className={className} />;
      case 'Percent':
        return <Percent className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'CalendarCheck':
        return <CalendarCheck className={className} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Real Results for Real Businesses</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-primary/60"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel opts={{ align: 'start' }}>
            <CarouselContent className="-ml-4">
              {caseStudies.map((cs, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full p-6 rounded-xl bg-card border border-primary/10 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{cs.company}</h3>
                        <p className="text-sm text-muted-foreground">{cs.subtitle}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {cs.metrics.map((m, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10">
                            <IconFor name={m.icon} className="h-4 w-4 text-primary" />
                          </span>
                          <div>
                            <div className="text-base font-semibold text-primary leading-tight">{m.value}</div>
                            <div className="text-xs text-muted-foreground leading-tight">{m.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 p-3 rounded-lg bg-primary/5 text-sm">
                      <span className="text-muted-foreground">Timeline:</span>{' '}
                      <span className="font-medium text-foreground">{cs.timeline}</span>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-white shadow-md" />
            <CarouselNext className="right-0 translate-x-1/2 bg-white shadow-md" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Button variant="cta" className="px-6">
            See More Case Studies <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
