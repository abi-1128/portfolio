import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling' },
  { name: 'Git', level: 88, category: 'Version-Control' },
  { name: 'SpringBoot', level: 75, category: 'Backend' },
  { name: 'Django', level: 80, category: 'Backend' },
  { name: 'MySQL', level: 78, category: 'Backend' },
  { name: 'RestAPI', level: 78, category: 'API-Handling' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50/50 dark:bg-gray-950/50">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Core Expertise</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I leverage a modern stack to build performant, accessible, and beautiful web applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-2xl hover:border-primary-500/50 transition-colors group"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-widest text-primary-500 font-bold">{skill.category}</span>
              <span className="text-sm font-semibold">{skill.level}%</span>
            </div>
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary-500 to-accent-light"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
