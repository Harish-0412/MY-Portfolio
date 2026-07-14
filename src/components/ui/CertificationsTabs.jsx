import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const certificates = [
  {
    id: 'aws',
    provider: 'Amazon Web Services',
    title: 'AWS Certified AI Practitioner',
    skills: ['Generative AI Concepts', 'AWS AI/ML Services', 'Security and Compliance', 'Machine Learning Foundations'],
    file: 'AWS Certified AI Practitioner certificate.pdf'
  },
  {
    id: 'github',
    provider: 'Microsoft',
    title: 'GitHub Foundations',
    skills: ['Version Control', 'GitHub Actions', 'Collaboration', 'Repository Management'],
    file: 'GitHub Foundations.pdf'
  },
  {
    id: 'ml',
    provider: 'DeepLearning.AI & Stanford',
    title: 'Machine Learning Specialization',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Recommender Systems'],
    file: 'Machine Learning Spl.pdf'
  },
  {
    id: 'prompt',
    provider: 'Google',
    title: 'Google Prompt Engineering',
    skills: ['Prompt Engineering', 'Generative AI', 'LLM optimization', 'Zero-shot/Few-shot learning'],
    file: 'Google Prompt Engineering.pdf'
  },
  {
    id: 'mcp',
    provider: 'IBM',
    title: 'Build AI Agents using MCP',
    skills: ['Agentic AI', 'MCP Architecture', 'AI Workflows', 'Tool Integration'],
    file: 'Build AI Agents using MCP.pdf'
  }
];

export default function CertificationsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[600px]">
      {/* Left side: Tabs */}
      <div className="space-y-4 flex flex-col justify-center">
        {certificates.map((cert, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={cert.id}
              onClick={() => setActiveIndex(index)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                isActive ? 'bg-white/10 border-white/30 shadow-lg' : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-1">{cert.provider}</p>
                  <h3 className={`text-xl font-black uppercase italic tracking-tight transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
                    {cert.title}
                  </h3>
                </div>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 space-y-3">
                      {cert.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-white/80" />
                          <span className="text-sm font-medium text-white/80">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Right side: Certificate Viewer */}
      <div 
        className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center min-h-[500px] lg:min-h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full p-4"
          >
            <iframe
              src={`${baseUrl}Certificates/${certificates[activeIndex].file}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full rounded-2xl bg-white/5"
              style={{ border: 'none' }}
              title={certificates[activeIndex].title}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
