"use client";

import { useEffect, useRef, useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

type Project = {
  title: string;
  summary: string;
  description: string;
  image: string;
  video: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Oslo-Vikings",
    summary:
      "Dynamic American football club platform with live roster management powered by Google Sheets integration.",
    description:
      "Modern, responsive website for the Oslo Vikings American Football team built with Next.js 14 and TypeScript. It features complete team management system powered by Google Sheets API integration. The entire team roster (including staff) and player cards are dynamically populated from a connected Google Sheet, enabling real-time content management. Also includes news system, game scheduling, and Norwegian Viking-themed design with accessibility compliance.",
    image: "/images/vikingsPreview.png",
    video: "/previewGif/vikingsPreview.webm",
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
    summary:
      "Futuristic crypto brand concept with immersive visuals and responsive layouts tailored to blockchain audiences.",
    description:
      "Cryptocurrency website concept for an up-and-coming crypto coin. Demonstrates modern web design principles, responsive layouts, and engaging user interfaces for the blockchain/crypto industry.",
    image: "/images/oilxPreview.png",
    video: "/previewGif/oilxPreview.webm",
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
    summary:
      "Lead-generating pool service site with SEO-first architecture and easy-to-manage content structure.",
    description:
      "Professional business website with SEO optimization, responsive design, and contact forms. Demonstrates client-focused development and modern web standards.",
    image: "/images/clearchoicePreview.png",
    video: "/previewGif/clearchoicePreview.webm",
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
    summary:
      "Specialty beverage storefront featuring product catalog, cart, and checkout flows for a boutique brand.",
    description:
      "Website for a mobile bartending service specializing in craft cocktails for events. Features product packages with prices. Built with React and Vite.",
    image: "/images/hummingbirdPreview.png",
    video: "/previewGif/hummingbirdPreview.webm",
    technologies: ["React", "Express", "Vite"],
    github: "https://github.com/tlecocq99/HummingbirdMobileSips",
    live: "https://tlecocq99.github.io/HummingbirdMobileSips/",
    featured: false,
  },
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
  };

  const handleCloseProject = (open: boolean) => {
    if (!open) {
      setActiveProject(null);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!activeProject) {
      setShouldPlay(false);
      if (video) {
        video.pause();
        try {
          video.currentTime = 0;
        } catch (error) {
          // Ignore errors when resetting before metadata is ready
        }
      }
      return;
    }

    setShouldPlay(false);

    if (!video) {
      const timeout = setTimeout(() => setShouldPlay(true), 500);
      return () => clearTimeout(timeout);
    }

    const handleLoadedData = () => {
      try {
        video.currentTime = 0;
      } catch (error) {
        // Ignore errors when metadata isn’t ready yet
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.load();

    const timeout = setTimeout(() => setShouldPlay(true), 500);

    return () => {
      clearTimeout(timeout);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [activeProject]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          /* autoplay might be blocked; keep silent */
        });
      }
    } else {
      video.pause();
      try {
        video.currentTime = 0;
      } catch (error) {
        // Ignore errors when resetting before metadata is ready
      }
    }
  }, [shouldPlay, activeProject]);

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
              <button
                type="button"
                onClick={() => handleOpenProject(project)}
                className="group aspect-video relative w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Open preview for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Project
                </span>
              </button>
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
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  type="button"
                  onClick={() => handleOpenProject(project)}
                  className="group aspect-video relative w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Open preview for ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Project
                  </span>
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!activeProject} onOpenChange={handleCloseProject}>
        <DialogContent className="max-w-4xl md:max-w-5xl">
          {activeProject && (
            <div className="space-y-6">
              <DialogHeader className="space-y-3">
                <DialogTitle>{activeProject.title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {activeProject.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <video
                    key={activeProject.video}
                    ref={videoRef}
                    muted
                    playsInline
                    loop
                    preload="auto"
                    controls={false}
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    className="h-full w-full object-cover"
                  >
                    <source src={activeProject.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 text-center">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiGithub size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
