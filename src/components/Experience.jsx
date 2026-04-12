import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'UnderGraduate at GMRIT',
    role: 'Bachelor of Technology in Computer Science and Engineering',
    period: '2024 - Present',
    description: 'Pursuing B.Tech in CSE.',
  },
  {
    company: 'BRVS Technologies',
    role: 'Frontend Developer Intern',
    period: '2024-2025',
    description: 'Designed a ReactJs project of titled "Online Notepad".',
  },
  {
    company: 'Krify Software Technologies Pvt Ltd',
    role: 'Python Full-Stack Developer Intern',
    period: '2023 - 2024',
    description: 'Designed a Django project which is related to Student Activities.',
  },
  {
    company: 'GMR Polytechnic',
    role: 'Basics Of Programming Languages',
    period: '2021 - 2023',
    description: 'Learnt basics of Programming Languages of C, C++, Java, Python',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gray-50/50 dark:bg-gray-950/50">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">Academic Journey</h2>
        <p className="text-gray-600 dark:text-gray-400">My path in the tech world, from early experiments to leading engineering teams.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row gap-8 mb-12 relative ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className={`p-8 rounded-3xl glass-card transition-all hover:shadow-primary-500/10 hover:border-primary-500/30 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                <span className="text-primary-500 font-bold mb-2 block">{exp.period}</span>
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
            
            <div className="hidden md:flex flex-col items-center relative">
              <div className="w-1 h-full bg-gray-200 dark:bg-gray-800 absolute" />
              <div className="w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-950 z-10 sticky top-1/2" />
            </div>
            
            <div className="md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
