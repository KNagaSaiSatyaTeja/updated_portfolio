"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Coffee, Heart, User } from "lucide-react";

export function AboutSection() {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-12"
        >
          <User className="h-6 w-6 text-primary" />
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center justify-center"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80 border-4 border-primary/20 p-2">
              <div className="h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/me.jpg?height=320&width=320"
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-2xl font-bold flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Who I Am
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    I'm a passionate web developer with a strong focus on
                    creating intuitive and performant user experiences. With
                    expertise in modern frontend technologies like React,
                    Next.js, and TypeScript, I build applications that are both
                    beautiful and functional.
                  </p>
                  <p className="text-muted-foreground">
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    enjoying outdoor activities to maintain a healthy work-life
                    balance.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    CSE(AI & ML)
                    <br />
                    BTech
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
