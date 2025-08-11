import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Send } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface LeadFormProps {
  className?: string;
  variant?: 'hero' | 'footer';
}

export const LeadForm: React.FC<LeadFormProps> = ({ className = '', variant = 'hero' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    company: '',
    country: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Success!",
      description: "Your audit request has been submitted. We'll contact you within 24 hours.",
    });

    // Redirect to thank you page
    window.location.href = '/thank-you';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isHero = variant === 'hero';

  return (
    <Card className={`p-6 ${isHero ? 'bg-white shadow-2xl' : 'bg-muted/50'} ${className}`}>
      <div className="text-center mb-6">
        <h3 className={`font-bold ${isHero ? 'text-2xl' : 'text-xl'} mb-2`}>
          Get Your Free Audit & Growth Plan
        </h3>
        <p className="text-muted-foreground">
          {isHero 
            ? "Discover hidden opportunities in your current campaigns" 
            : "Ready to 2x your revenue? Let's start today."
          }
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <Label htmlFor="company">Company Name <span className="text-muted-foreground">(optional)</span></Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              aria-required={false}
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="country">Country/Region <span className="text-muted-foreground">(optional)</span></Label>
          <Select
            value={formData.country}
            onValueChange={(val) => setFormData((prev) => ({ ...prev, country: val }))}
          >
            <SelectTrigger id="country" className="w-full">
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="Europe">Europe</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button type="submit" variant="cta" size="lg" className="w-full">
          {isHero ? (
            <>
              Get Free Audit <ArrowRight className="h-5 w-5" />
            </>
          ) : (
            <>
              Start Your Growth Journey <Send className="h-5 w-5" />
            </>
          )}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center">
          No spam. We'll only send you valuable insights.
        </p>
      </form>
    </Card>
  );
};