import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-success/10 flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-success/10 rounded-full flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-success" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Your free audit request has been submitted successfully. 
            We're excited to help you scale your business!
          </p>
          
          <Card className="p-8 bg-white shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Initial Review (Within 24 Hours)</h3>
                  <p className="text-muted-foreground">Our team will review your current campaigns and identify immediate opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Strategy Call (2-3 Days)</h3>
                  <p className="text-muted-foreground">We'll schedule a detailed call to discuss your goals and present our findings.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Growth Plan</h3>
                  <p className="text-muted-foreground">Receive a tailored strategy document outlining exactly how we'll 2x your revenue.</p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="bg-primary/5 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Quick Response Guarantee</span>
            </div>
            <p className="text-muted-foreground">
              We'll contact you within 24 hours to begin your audit. 
              Check your email and phone for updates.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Button variant="cta">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Call Now
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Questions? Email us at <a href="mailto:hello@adscalepro.com" className="text-primary hover:underline">hello@adscalepro.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;