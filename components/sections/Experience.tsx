'use client';

import { Card } from '@/components/ui/card';

const experiences = [
  {
    title: "Full-Stack Web Development Bootcamp",
    company: "Institute of Data",
    period: "2024 (6 months intensive)",
    description: "Completed comprehensive full-stack development program covering modern web technologies, best practices, and real-world project development.",
    achievements: [
      "Built 4 full-stack applications using React, Next.js, and TypeScript",
      "Mastered modern development workflows and deployment strategies",
      "Collaborated on team projects using Agile methodologies"
    ]
  },
  {
    title: "Personal Projects & Portfolio Development",
    company: "Self-Directed Learning",
    period: "2024 - Present",
    description: "Continuously expanding skills through personal projects, focusing on modern React patterns, performance optimization, and user experience.",
    achievements: [
      "Developed Oslo-Vikings: Full-stack application with user authentication",
      "Created Oil-X: Data visualization dashboard with real-time updates",
      "Built Clear Choice Pools: Business website with SEO optimization"
    ]
  },
  {
    title: "Music Performance & Teaching",
    company: "Various Venues & Private Students",
    period: "2018 - 2024",
    description: "Professional musician and music instructor, developing strong communication skills, attention to detail, and ability to work under pressure.",
    achievements: [
      "Managed multiple students and performance schedules simultaneously",
      "Developed strong presentation and communication skills",
      "Demonstrated reliability and professionalism in client-facing roles"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering exceptional results and driving innovation
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-lg font-medium text-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm uppercase tracking-wide text-primary">Key Achievements</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}