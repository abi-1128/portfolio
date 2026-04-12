import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/eDNA.png';
import project2 from '../assets/project2.jpg';
import SMS from '../assets/SMS.jpg';

const projects = [
  {
    title: 'Smart Aquatic Genomic Analysis and Research Platform',
    description: 'Identifying Taxonomy and Assessing Marine Biodiversity with eDNA .',
    image: project1,
    tags: ['React', 'FastAPI', 'DNABert'],
    github: 'https://github.com/abi-1128/DeepSeaDNA.git',
    live: '#',
  },
  {
    title: 'Online Notepad System',
    description: 'A Role-Based Interactive Notepad System by creating with Code.',
    image: project2,
    tags: ['React', 'Tailwind', 'localStorage'],
    github: 'https://github.com/abi-1128/ONS.git',
    live: '#',
  },
  {
    title: 'Student Management System',
    description: 'A Student Platform where there are managing and accessing details about their academics in respective to their college.',
    image: SMS,
    tags: ['Django', 'Bootstrap', 'MySqli'],
    github: 'https://github.com/abi-1128/StudentManagementSystem.git',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            A selection of my recent works ranging from complex enterprise systems to creative experimental projects.
          </p>
        </div>
        <button className="text-primary-500 font-bold hover:underline flex items-center gap-2">
          View All Projects <ExternalLink size={16} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl overflow-hidden glass-card"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary-500 transition-colors">
                  <Github size={24} className="text-white" />
                </a>
                <a href={project.live} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary-500 transition-colors">
                  <ExternalLink size={24} className="text-white" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 rounded-md bg-primary-500/10 text-primary-500 tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
