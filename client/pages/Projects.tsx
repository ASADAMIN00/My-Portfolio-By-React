import { motion } from "framer-motion";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const allProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Features include product catalog, cart functionality, order tracking, and detailed analytics.",
      image: "/placeholder.svg",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Tailwind",
        "Express",
        "Redis",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full-Stack",
      year: "2024",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, project tracking, and advanced reporting. Includes Kanban boards, time tracking, and notification systems.",
      image: "/placeholder.svg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Socket.io",
        "PostgreSQL",
        "Tailwind",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full-Stack",
      year: "2024",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful and interactive weather dashboard featuring detailed forecasts, interactive maps, location-based weather data, and historical weather patterns visualization with customizable widgets.",
      image: "/placeholder.svg",
      technologies: ["React", "D3.js", "OpenWeather API", "Mapbox", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Frontend",
      year: "2023",
    },
    {
      title: "Social Media App",
      description:
        "Full-featured social media application with real-time messaging, post sharing, story features, user authentication, and advanced privacy controls. Includes mobile-responsive design and offline capabilities.",
      image: "/placeholder.svg",
      technologies: [
        "React Native",
        "Express",
        "MongoDB",
        "Socket.io",
        "Firebase",
        "Redux",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Mobile",
      year: "2023",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Comprehensive data visualization dashboard with interactive charts, real-time updates, custom reporting features, and advanced filtering. Supports multiple data sources and export capabilities.",
      image: "/placeholder.svg",
      technologies: [
        "Vue.js",
        "Python",
        "FastAPI",
        "Chart.js",
        "PostgreSQL",
        "Docker",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "Full-Stack",
      year: "2023",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool with multiple templates, custom prompts, content optimization, and team collaboration features. Integrates with popular content management systems.",
      image: "/placeholder.svg",
      technologies: ["React", "OpenAI API", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      category: "AI/ML",
      year: "2024",
    },
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Mobile", "AI/ML"];

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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                All{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                A comprehensive collection of my work, showcasing various
                technologies and solutions across different domains and
                industries.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allProjects.map((project, index) => (
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
                              <ExternalLink className="w-4 h-4 mr-2" />
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
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="outline"
                          className="bg-black/50 text-white border-white/50"
                        >
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
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
                            Demo
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-6">
                Interested in working together?
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 px-8"
                onClick={() => navigate("/#contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
