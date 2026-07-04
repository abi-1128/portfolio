import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Instagram } from 'lucide-react';
import Scene3D from './Scene3D';
import profileImg from '../assets/Abhi.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Scene3D />
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-500 text-sm font-semibold mb-6 inline-block"
          >
            Seeking for new opportunities
          </motion.span>
          
          <h1 className="heading-xl mb-6">
            Building the next <br />
            <motion.span 
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: '100% 50%' }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              className="gradient-text bg-[length:200%_auto]"
            >
              Digital Experience
            </motion.span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
            I am a Web Developer  enthusiast specializing in building modern, responsive web applications with React.js, with experience in full-stack development and a strong focus on delivering interactive and user-centric solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </motion.a>
            <div className="flex items-center gap-4 ml-4">
              {[
                { Icon: Github, href: 'https://github.com/abi-1128/' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek1911' },
                { Icon: Instagram, href: 'https://www.instagram.com/___abi.1' }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#0ea5e9' }}
                  className="text-gray-500 dark:text-gray-400 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative mt-12 lg:mt-0 max-w-2xl mx-auto lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full aspect-square relative"
          >
            <div className="absolute inset-0 bg-primary-500/20 blur-[100px]" />
            <img 
              src={profileImg} 
              alt="Profile" 
              className="relative z-10 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
