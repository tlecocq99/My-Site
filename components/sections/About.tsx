'use client';

import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From music to code - bringing creativity and dedication to web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a recent graduate from the Institute of Data's intensive 6-month full-stack bootcamp, where I discovered my passion for creating exceptional web experiences. My background in music has taught me discipline, attention to detail, and the importance of practice - skills I now apply to writing clean, efficient code.
            </p>
            
            <p className="text-lg leading-relaxed">
              I specialize in React, Next.js, and TypeScript, with hands-on experience in Google Cloud and SEO optimization. When I'm not coding, you'll find me playing piano, on the tennis court, or exploring Louisiana's vibrant tech scene. I'm eager to bring my fresh perspective and modern skills to a dynamic team.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Portfolio Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">6</div>
                <div className="text-sm text-muted-foreground">Months Intensive Training</div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6">What I Bring to Your Team</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-medium">Fresh Modern Skills</div>
                  <div className="text-sm text-muted-foreground">Latest React patterns, Next.js 13+, and TypeScript best practices</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-medium">Immediate Availability</div>
                  <div className="text-sm text-muted-foreground">Ready to start immediately with high motivation and energy</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <div className="font-medium">Local Market Knowledge</div>
                  <div className="text-sm text-muted-foreground">Deep understanding of Lafayette and Louisiana business landscape</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}