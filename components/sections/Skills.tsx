'use client';

import { Card } from '@/components/ui/card';

const skills = {
  "Core Technologies": [
    "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Bootstrap", "Modern CSS", "Responsive Design", "SEO Optimization"
  ],
  "Backend & Cloud": [
    "Node.js", "Express", "Google Cloud Platform", "REST APIs", 
    "Database Design", "Authentication", "Deployment", "Version Control"
  ],
  "Development Tools": [
    "Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", 
    "npm/yarn", "Webpack", "Vite", "ESLint", "Prettier"
  ],
  "Soft Skills": [
    "Fluent in both English and French", "Problem Solving", "Team Collaboration", "Communication", "Adaptability",
    "Time Management", "Attention to Detail", "Continuous Learning", "Client Relations"
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={category} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {skillList.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-muted/50 px-3 py-2 rounded-md text-sm font-medium text-center hover:bg-primary/10 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}