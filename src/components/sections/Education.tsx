import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    institution: 'Mallareddy Institute of Engineering and Technology',
    period: '2022 - 2026',
    grade: 'GPA: 7.82 (till III-I)',
    description: 'Pursuing B.Tech with focus on software development and data science',
  },
  {
    degree: 'Intermediate (PUE)',
    institution: 'Government Junior College',
    period: '2020 - 2022',
    grade: 'Grade: 69.5%',
    description: 'Completed intermediate education with focus on science stream',
  },
  {
    degree: 'Secondary School',
    institution: 'Government High School',
    period: '2019 - 2020',
    grade: 'GPA: 9.5',
    description: 'Completed high school with excellent academic performance',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Educational <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic path and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } pl-12 md:pl-0 md:w-[calc(50%+2rem)]`}
              >
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2 z-10" />
                
                <div className="card-gradient p-6 rounded-xl border border-border shadow-md hover:shadow-lg transition-smooth">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-3">
                    {edu.grade}
                  </div>
                  
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
