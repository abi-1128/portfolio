import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '0' },
    { label: 'Projects Completed', value: '5' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-light rounded-3xl blur-2xl opacity-20" />
          <div className="relative glass-card p-8 rounded-3xl">
            <h2 className="heading-lg mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am a highly motivated Btech in Computer Science and Engineering undergraduate in GMRIT with a strong academic background and interest in Full-stack Development.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              My skills encompass a solid foundation in programming.
              I aspire to contribute meaningfully to challenging projects while growing professionally.

            </p>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-primary-500 mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I don’t just build applications; I create practical and user-friendly solutions that solve real-world problems. As a Computer Science undergraduate with hands-on experience in React.js and full-stack development,
               I focus on writing clean, maintainable code while continuously improving my skills.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {['Responsive Web Design', 'React.js Development', 'Performance Optimization', 'Problem Solving', 'Logical Thinking', 'User-Friendly UI Design'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
