import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  GitBranch,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      title: "Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 90 },
        { name: "Adobe Creative", level: 80 },
        { name: "Prototyping", level: 85 },
      ],
    },
    {
      title: "DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Monitoring", level: 70 },
      ],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "iOS/Android", level: 75 },
        { name: "App Store", level: 80 },
      ],
    },
    {
      title: "Tools",
      icon: GitBranch,
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Testing", level: 85 },
        { name: "Agile", level: 90 },
      ],
    },
  ];

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
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and methodologies I use to
            create exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <Progress
                          value={skill.level}
                          className="h-2"
                          style={
                            {
                              "--progress-foreground": `linear-gradient(to right, ${category.color.split(" ")[1]}, ${category.color.split(" ")[3]})`,
                            } as any
                          }
                        />
                      </motion.div>
                    </div>
                  ))}
                </CardContent>
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always learning and staying up-to-date with the latest
            technologies and best practices in the industry. Continuous growth
            is key to delivering exceptional results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
