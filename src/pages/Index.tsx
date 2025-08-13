import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { CaseStudySection } from '@/components/CaseStudySection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { LeadForm } from '@/components/LeadForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SocialProofSection />
      <CaseStudySection />
      <GuaranteeSection />
      
      {/* Final CTA Section */}
      <section id="lead-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of businesses that have transformed their Google Ads performance with our proven system.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <LeadForm variant="footer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
