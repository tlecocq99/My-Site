"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Oslo-Vikings",
    description:
      "Modern, responsive website for the Oslo Vikings American Football team built with Next.js 14 and TypeScript. Features complete team management system powered by Google Sheets API integration - the entire team roster (including staff) and player cards are dynamically populated from a connected Google Sheet, enabling real-time content management. Also includes news system, game scheduling, and Norwegian Viking-themed design with accessibility compliance.",
    image: "/images/vikingsPreview.png",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Dynamic Google Sheets API",
      "Google Cloud Platform",
      "App Router",
      "SEO Optimization",
      "WCAG 2.1 AA",
    ],
    github: "https://github.com/tlecocq99/Oslo-Vikings",
    live: "https://oslo-vikings.vercel.app/",
    featured: true,
  },
  {
    title: "Oil-X",
    description:
      "Cryptocurrency website concept for an up-and-coming crypto coin. Demonstrates modern web design principles, responsive layouts, and engaging user interfaces for the blockchain/crypto industry.",
    image: "/images/oilxPreview.png",
    technologies: [
      "React",
      "Next.js",
      "Modern CSS",
      "Responsive Design",
      "Crypto/Blockchain UI",
      "Dynamic API Integration",
    ],
    github: "https://github.com/tlecocq99/Oil-X",
    live: "https://oil-x.vercel.app/",
    featured: true,
  },
  {
    title: "Clear Choice Pools",
    description:
      "Professional business website with SEO optimization, responsive design, and contact forms. Demonstrates client-focused development and modern web standards.",
    image: "/images/clearChoicePreview.png",
    technologies: [
      "Next.js",
      "SEO Optimization",
      "Responsive Design",
      "Bootstrap",
    ],
    github: "https://github.com/tlecocq99/ClearChoice",
    live: "https://clearchoicepools.org/",
    featured: false,
  },
  {
    title: "Hummingbird Sips",
    description:
      "E-commerce platform for specialty beverages with shopping cart functionality, product catalog, and payment integration. Shows full-stack development skills.",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Express", "Vite"],
    github: "https://github.com/tlecocq99/HummingbirdMobileSips",
    live: "https://example.com",
    featured: false,
  },
];

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work that showcases my technical skills and
            problem-solving approach
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub
                        size={18}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                        size={18}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
