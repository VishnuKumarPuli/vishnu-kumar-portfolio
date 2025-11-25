import { motion } from 'framer-motion';
import { Code, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A comprehensive web-based portal designed to streamline doctor-patient interactions, appointment scheduling, and medical record management.',
    tech: ['Python', 'Django', 'MySQL'],
    features: [
      'Patient appointment booking',
      'Medical records management',
      'Doctor-patient communication portal',
      'Admin dashboard for hospital management',
    ],
  },
  {
    title: 'Heart Disease Prediction Using Bio-Inspired Algorithms',
    description: 'An intelligent system that leverages bio-inspired algorithms (GA, BAT, BEE) to predict heart disease risk with high accuracy.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    features: [
      'Implementation of GA, BAT, and BEE algorithms',
      'Data preprocessing and feature engineering',
      'Predictive model training and evaluation',
      'Data visualization and analysis',
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in web development and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-gradient p-6 rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Code className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
