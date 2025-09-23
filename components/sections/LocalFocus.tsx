'use client';

import { Card } from '@/components/ui/card';
import { MapPin, Heart, Users, Briefcase } from 'lucide-react';

export function LocalFocus() {
  return (
    <section id="local" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lafayette & Louisiana Focus</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Committed to contributing to Louisiana's growing tech ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Local Presence</h3>
            <p className="text-sm text-muted-foreground">
              Have lived over 15 years in Louisiana, deeply connected to the local community and business landscape
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Community Commitment</h3>
            <p className="text-sm text-muted-foreground">
              Passionate about helping local businesses thrive through modern web solutions
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Cultural Understanding</h3>
            <p className="text-sm text-muted-foreground">
              Having lived in multiple countries, I have a deep understanding of numerous cultures worldwide
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Briefcase className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Long-term Vision</h3>
            <p className="text-sm text-muted-foreground">
              Looking to build a career and contribute to Lafayette's tech growth
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Choose a Local Developer?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-medium mb-2 text-primary">Immediate Availability</h4>
                <p className="text-sm text-muted-foreground">
                  No relocation needed - ready to start immediately and be present for in-person collaboration
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-primary">Market Knowledge</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding of local market needs, customer preferences, and business challenges
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-primary">Community Investment</h4>
                <p className="text-sm text-muted-foreground">
                  Invested in the success of local businesses and the growth of Lafayette's tech scene
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}