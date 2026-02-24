import { motion } from 'framer-motion';
import { User, Target, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[hsl(280,85%,55%)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate learner and aspiring developer with a drive for innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="card-gradient p-6 rounded-xl border border-border shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                  <p className="text-muted-foreground">
                    I'm a B.Tech student at Mallareddy Institute of Engineering and Technology, 
                    currently in my third year with a GPA of 7.82. I'm passionate about software 
                    development and continuously expanding my technical skillset.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">My Goal</h3>
                  <p className="text-muted-foreground">
                    To obtain a challenging position in a reputable organization where I can 
                    utilize my technical skills, problem-solving abilities, and academic knowledge 
                    to contribute to team success while continuing to learn and grow professionally.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What Drives Me</h3>
                  <p className="text-muted-foreground">
                    I'm driven by curiosity and a desire to create meaningful solutions. Whether 
                    it's developing web applications, exploring AI algorithms, or learning new 
                    technologies, I approach every challenge with enthusiasm and dedication.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-6" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Vishnu Kumar Puli" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
