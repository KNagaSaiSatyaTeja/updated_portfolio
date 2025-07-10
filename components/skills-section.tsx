"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Code,
  Database,
  Lightbulb,
  Users,
  Clock,
  Puzzle,
  Github,
  GitBranch,
  Terminal,
  Zap,
  Heart,
  MessageCircle,
  Headphones,
  BookOpen,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const frontendSkills = [
    { name: "React", level: 90, icon: <Code className="h-4 w-4" /> },
    { name: "Next.js", level: 80, icon: <Code className="h-4 w-4" /> },
    { name: "TypeScript", level: 70, icon: <Code className="h-4 w-4" /> },
    { name: "CSS/Tailwind", level: 95, icon: <Code className="h-4 w-4" /> },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85, icon: <Database className="h-4 w-4" /> },
    { name: "Express", level: 85, icon: <Database className="h-4 w-4" /> },
    { name: "MongoDB", level: 90, icon: <Database className="h-4 w-4" /> },
    { name: "SQL", level: 90, icon: <Database className="h-4 w-4" /> },
  ];

  const Programming = [
    {
      name: "JavaScript",
      level: 90,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Programming Language",
    },
    {
      name: "TypeScript",
      level: 70,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Superset of JavaScript",
    },
    {
      name: "Python",
      level: 70,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "General-purpose programming language",
    },
    {
      name: "C++",
      level: 60,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "General-purpose programming language",
    },
    {
      name: "Java",
      level: 60,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "General-purpose programming language",
    },
    {
      name: "HTML",
      level: 90,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Markup Language",
    },
    {
      name: "CSS",
      level: 90,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Style Sheet Language",
    },
    {
      name: "C",
      level: 80,
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "General-purpose programming language",
    },
  ];
  const tools = [
    {
      name: "Git",
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      description: "Version Control",
    },
    {
      name: "GitHub",
      icon: <Github className="h-10 w-10 text-primary" />,
      description: "Repository Management",
    },
    {
      name: "VS Code",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Code Editor",
    },
    {
      name: "Terminal",
      icon: <Terminal className="h-10 w-10 text-primary" />,
      description: "Command Line",
    },
    {
      name: "NPM",
      icon: <Zap className="h-10 w-10 text-primary" />,
      description: "Package Manager",
    },
  ];

  const softSkills = [
    {
      name: "Communication",
      icon: <MessageCircle className="h-10 w-10 text-primary" />,
      description: "Clear and effective verbal and written communication",
    },
    {
      name: "Teamwork",
      icon: <Users className="h-10 w-10 text-primary" />,
      description:
        "Collaborative approach to problem-solving and project execution",
    },
    {
      name: "Problem Solving",
      icon: <Puzzle className="h-10 w-10 text-primary" />,
      description:
        "Analytical thinking and creative solutions to complex problems",
    },
    {
      name: "Adaptability",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      description:
        "Quick to learn and adapt to new technologies and environments",
    },
    {
      name: "Time Management",
      icon: <Clock className="h-10 w-10 text-primary" />,
      description: "Efficient prioritization and organization of tasks",
    },
    {
      name: "Empathy",
      icon: <Heart className="h-10 w-10 text-primary" />,
      description: "Understanding user needs and team dynamics",
    },
    {
      name: "Active Listening",
      icon: <Headphones className="h-10 w-10 text-primary" />,
      description: "Attentive to feedback and requirements",
    },
    {
      name: "Continuous Learning",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      description: "Commitment to ongoing professional development",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="py-20  bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            My Skills
          </h2>
        </motion.div>

        <Tabs defaultValue="technical" className="w-full ">
          <TabsList className="grid w-full grid-cols-4 h-auto mb-8">
            <TabsTrigger
              value="technical"
              className="flex items-center gap-2 text-wrap overflow-hidden"
            >
              <Code className="h-4 w-4 hidden sm:block" />
              <span className="text-[11px] sm:text-sm">Technical</span>
            </TabsTrigger>
            <TabsTrigger
              value="programming"
              className="flex items-center gap-2"
            >
              <Code className="h-4 w-4 hidden sm:block" />
              <span className="text-[11px] sm:text-sm">Programming</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Terminal className="h-4 w-4 hidden sm:block" />
              <span className="text-[11px] sm:text-sm">Tools</span>
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex items-center gap-2">
              <Heart className="h-4 w-4 hidden sm:block" />
              <span className="text-[11px] sm:text-sm">Soft Skills</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle>Frontend Development</CardTitle>
                      <CardDescription>
                        My expertise in frontend technologies
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <TooltipProvider>
                      {frontendSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={fadeInUp}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium flex items-center gap-2">
                              {skill.icon}
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="relative">
                                <Progress value={0} className="h-2" />
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1 + 0.2,
                                    ease: "easeOut",
                                  }}
                                  className="absolute top-0 left-0 h-2 rounded-full bg-primary"
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {skill.level}% proficiency in {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </motion.div>
                      ))}
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle>Backend Development</CardTitle>
                      <CardDescription>
                        My expertise in backend technologies
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <TooltipProvider>
                      {backendSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={fadeInUp}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium flex items-center gap-2">
                              {skill.icon}
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="relative">
                                <Progress value={0} className="h-2" />
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1 + 0.2,
                                    ease: "easeOut",
                                  }}
                                  className="absolute top-0 left-0 h-2 rounded-full bg-primary"
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {skill.level}% proficiency in {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </motion.div>
                      ))}
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="programming" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* First Column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle>High-Level Languages</CardTitle>
                      <CardDescription>
                        Modern programming languages
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <TooltipProvider>
                      {Programming.slice(0, 4).map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={fadeInUp}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium flex items-center gap-2">
                              {skill.icon}
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="relative">
                                <Progress value={0} className="h-2" />
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1 + 0.2,
                                    ease: "easeOut",
                                  }}
                                  className="absolute top-0 left-0 h-2 rounded-full bg-primary"
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {skill.level}% proficiency in {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </motion.div>
                      ))}
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Second Column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle>Other Languages</CardTitle>
                      <CardDescription>
                        Additional programming languages and markup
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <TooltipProvider>
                      {Programming.slice(4).map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          variants={fadeInUp}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium flex items-center gap-2">
                              {skill.icon}
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="relative">
                                <Progress value={0} className="h-2" />
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1 + 0.2,
                                    ease: "easeOut",
                                  }}
                                  className="absolute top-0 left-0 h-2 rounded-full bg-primary"
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {skill.level}% proficiency in {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </motion.div>
                      ))}
                    </TooltipProvider>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="tools">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-md overflow-hidden group">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {tool.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="soft">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-md overflow-hidden group">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
