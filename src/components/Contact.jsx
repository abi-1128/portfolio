import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">Let's connect and <br /><span className="gradient-text">innovate</span> together.</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg">
            I am currently an <span className="text-primary-500 font-semibold">Undergraduate Student at GMRIT</span>. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Current Institution</div>
                <div className="text-lg font-semibold">GMR Institute of Technology</div>
                <div className="text-sm text-gray-500 italic">Undergraduate Student, Rajam</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email</div>
                <div className="text-lg font-semibold">abhishekbaratam@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary-500/10 rounded-2xl text-primary-500">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Phone</div>
                <div className="text-lg font-semibold">+91 8688205299</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-3xl"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea 
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary-500 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30"
            >
              Send Message <Send size={20} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
