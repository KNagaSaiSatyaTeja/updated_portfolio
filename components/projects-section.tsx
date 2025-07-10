"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Code, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, TypeScript.",
      image: "/image.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
      githubUrl:
        "https://github.com/KNagaSaiSatyaTeja/MERN-Full_Stack-E_Commerces",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "AI-DRIVEN AUTOMATED SCHEDULER",
      description:
        "A collaborative task management application with real-time updates using WebSockets.",
      image: "/scheduler.png?height=400&width=600",
      tags: [
        "React",
        "Node.js",
        "Express",
        "Python",
        "Flask",
        "CSP",
        "Genetic Algorithm",
        "MongoDB",
      ],
      githubUrl:
        "https://github.com/KNagaSaiSatyaTeja/AI-DRIVEN-AUTOMATED-SCHEDULER",
      liveUrl: "https://example.com",
    },

    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS.",
      image: "/protfolio.png",
      tags: ["Next.js", "TypeScript", "ShadCN", "Framer Motion"],
      githubUrl: "https://github.com/KNagaSaiSatyaTeja/updated_portfolio",
      liveUrl: "https://example.com",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <Folder className="h-6 w-6 text-primary" />
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            My Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5 text-white" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                    {/* <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button> */}
                  </div>
                </div>
                <CardContent className="flex-grow p-6">
                  <h3 className="mb-2 text-xl font-bold flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    {project.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="transition-all hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button asChild size="sm" variant="outline" className="group">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                      Code
                    </a>
                  </Button>
                  {/* <Button asChild size="sm" className="group">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
                      Live Demo
                    </a>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
