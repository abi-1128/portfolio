import { Github, Linkedin,  Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-extrabold tracking-tighter mb-2">
            <span className="gradient-text">AB.</span>DEV
          </div>
          <p className="text-gray-500 text-sm">© 2026 Abhishek Baratam. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6">
          {[
            { Icon: Github, href: "https://github.com/abi-1128/" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/abhishek1911" },
            { Icon: Instagram, href: "https://www.instagram.com/___abi.1" }
          ].map(({ Icon, href }, i) => (
            <a 
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="text-sm font-medium">
          Built with <span className="text-red-500">♥</span> using React & Framer Motion
        </div>
      </div>
    </footer>
  );
}
