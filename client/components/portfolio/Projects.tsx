import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and project tracking features.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with interactive maps, forecasts, and location-based weather data visualization.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "OpenWeather API", "Mapbox"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with modern animations, dark mode, and optimized performance.",
      image: "/placeholder.svg",
      technologies: ["React", "Framer Motion", "Tailwind", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      title: "Social Media App",
      description:
        "Full-stack social media application with real-time messaging, post sharing, and user authentication.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Express", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Data visualization dashboard with interactive charts, real-time updates, and custom reporting features.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my skills and passion for
            creating meaningful digital experiences.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.title} variants={item}>
              <Card className="group h-full hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-white/90 hover:bg-white"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-white text-white hover:bg-white hover:text-black"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <Badge variant="secondary">Featured</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex space-x-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Other Projects
          </h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div key={project.title} variants={item}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex space-x-2 w-full">
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
