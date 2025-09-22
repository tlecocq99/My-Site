'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Thomas Lecocq
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Junior Web Developer bringing fresh energy and modern skills to Lafayette's tech scene. 
              Ready to contribute, learn, and grow with your team.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Experience
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Thomas Lecocq. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 sm:mt-0">
            Built with <Heart size={14} className="mx-1 text-red-500" /> in Lafayette, LA using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}