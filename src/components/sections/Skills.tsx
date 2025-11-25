import { motion } from 'framer-motion';
import { Code2, Globe, BarChart3, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 60 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'Data & Visualization',
    icon: BarChart3,
    skills: [
      { name: 'R Programming', level: 75 },
      { name: 'Tableau', level: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Teamwork', level: 90 },
      { name: 'Problem Solving', level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical and professional competencies I've developed
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-border shadow-md hover:shadow-lg transition-smooth"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="card-gradient p-8 rounded-xl border border-border shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications & Achievements</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Certifications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    English Empower - Cambridge University
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    AI - Data Scientist, TBOCWWB
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Introduction to Artificial Intelligence - Simplilearn SkillUp
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Additional Information</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Attended training on CRT
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Languages: Telugu, English
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Interests: Browsing new technologies, Public speaking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
