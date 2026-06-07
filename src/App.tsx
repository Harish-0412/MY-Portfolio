import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Bot, ExternalLink, Code2, Brain, Cpu, Rocket, Sparkles, Layers, GraduationCap, Trophy, Terminal, Smartphone, Database, BarChart3, Palette, Wrench, Send, Briefcase, Mail, GitBranch } from 'lucide-react';
import Iridescence from "@/components/ui/Iridescence";
import PillNav from "@/components/ui/PillNav";
import ProfileCard from "@/components/ui/ProfileCard";
import { Button } from "@/components/ui/button";
import logo from "@/assets/react.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import IntroPreloader from "@/components/ui/IntroPreloader";
import PromptingIsAllYouNeed from "@/components/ui/PromptingIsAllYouNeed";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden selection:bg-white/10 selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroPreloader key="preloader" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.div
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Background Iridescence */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
              <Iridescence
                color={[0.4, 0.5, 0.7]}
                mouseReact
                amplitude={0.1}
                speed={1}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-center w-full">
              <PillNav
                logo={logo}
                logoAlt="Haribot Logo"
                items={navItems}
                activeHref="#hero"
                baseColor="rgba(0, 0, 0, 0.6)"
                pillColor="#ffffff"
                pillTextColor="#000000"
                hoveredPillTextColor="#ffffff"
              />
            </div>

            {/* Main Section container */}
            <main className="max-w-7xl mx-auto px-6 pt-32 pb-12 flex flex-col gap-32">

              {/* HERO SECTION */}
              <section id="hero" className="scroll-mt-32 flex flex-col items-center text-center gap-12">
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic drop-shadow-2xl">
                    Welcome to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white text-4xl md:text-6xl">My Portfolio</span>
                  </h1>
                  <p className="font-mono text-base text-white/70 uppercase tracking-widest max-w-2xl mx-auto">
                    Building AI-Powered Products Through Software Engineering, Machine Learning, and Research-Driven Innovation.
                  </p>
                </div>

                <Card className="w-full h-[500px] md:h-[700px] bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden flex items-center justify-center rounded-[2rem] shadow-2xl">
                  {/* Centered Spline Viewport */}
                  <div className="w-full h-full relative spline-outer-container flex items-center justify-center">
                    <SplineScene
                      scene="/scene.splinecode"
                      className="w-full h-full object-cover scale-[1.08]"
                    />
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                      <p className="font-mono text-[10px] text-white/60 leading-none mb-2">SYSTEM STATUS</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-mono text-xs text-white">NEXBOT CORE ACTIVE</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* STATS SECTION (First Impression) */}
              <section className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                {[
                  { label: "Research Internship", value: "01+", icon: <GraduationCap className="w-4 h-4" /> },
                  { label: "Hackathons", value: "05+", icon: <Rocket className="w-4 h-4" /> },
                  { label: "National Top 10", value: "02", icon: <Trophy className="w-4 h-4" /> },
                  { label: "Podium Finishes", value: "03", icon: <Sparkles className="w-4 h-4" /> },
                  { label: "Projects Built", value: "10+", icon: <Code2 className="w-4 h-4" /> },
                  { label: "Domains Expertise", value: "04+", icon: <Layers className="w-4 h-4" /> },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 flex flex-col items-center text-center gap-2"
                  >
                    <div className="p-2 rounded-lg bg-white/20 text-white/80">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-black italic text-white">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/60 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </section>

              {/* PERSONAL DETAILS SECTION */}
              <section id="about" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white">
                      About <br /> Me
                    </h2>
                    <div className="h-1 w-24 bg-white" />
                  </div>

                  <div className="space-y-10 text-lg text-slate-300">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/10">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-white italic">What I Do</h3>
                      </div>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        Build intelligent software products by combining <span className="text-white font-semibold italic">Full-Stack Engineering</span>, <span className="text-white font-semibold italic">Machine Learning</span>, and scalable system design.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/10">
                          <Cpu className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-white italic">Engineering Philosophy</h3>
                      </div>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        Design systems that are <span className="text-white font-semibold italic">scalable</span>, <span className="text-white font-semibold italic">maintainable</span>, <span className="text-white font-semibold italic">performant</span>, and built with users in mind.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/10">
                          <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-white italic">Current Focus</h3>
                      </div>
                      <p className="text-lg text-slate-300 leading-relaxed">
                        Developing AI-powered applications, privacy-preserving learning systems, and next-generation recommendation platforms.
                      </p>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex items-center gap-4 flex-wrap pt-4">
                      <Button
                        variant="outline"
                        onClick={() => window.open('mailto:harish04211mw@gmail.com', '_blank')}
                        className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer bg-white/5 border-white/10"
                      >
                        <img
                          src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                          alt="email icon"
                          className="h-4 w-4"
                        />
                        <span className="ml-2 text-xs font-bold uppercase tracking-tighter">Email</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.open('https://github.com/Harish-0412', '_blank')}
                        className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer bg-white/5 border-white/10"
                      >
                        <img
                          src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                          alt="github icon"
                          className="h-4 w-4"
                        />
                        <span className="ml-2 text-xs font-bold uppercase tracking-tighter">GitHub</span>
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.open('https://www.linkedin.com/in/harish0412/', '_blank')}
                        className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer bg-white/5 border-white/10"
                      >
                        <img
                          src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
                          alt="linkedin icon"
                          className="h-4 w-4"
                        />
                        <span className="ml-2 text-xs font-bold uppercase tracking-tighter">LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <ProfileCard
                    name="Harish K"
                    title="Software Engineer & AI Developer"
                    handle="harish_dev"
                    status="Building something cool"
                    contactText="Get in Touch"
                    avatarUrl="/profile.png"
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={true}
                    behindGlowEnabled
                    innerGradient="linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)"
                    behindGlowColor="rgba(255, 255, 255, 0.1)"
                  />
                </div>
              </section>

              {/* SKILLS SECTION */}
              <section id="skills" className="scroll-mt-32 space-y-16">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white text-center lg:text-left">Technical Expertise</h2>
                  <div className="h-1 w-24 bg-white mx-auto lg:mx-0" />
                  <p className="text-white/70 max-w-3xl text-lg font-medium leading-relaxed italic">
                    Experienced in Full-Stack Development, Artificial Intelligence, Mobile Application Development, and Data Analytics with hands-on expertise in building scalable software systems, machine learning solutions, and user-centric digital products.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Software Engineering",
                      icon: <Terminal className="w-6 h-6" />,
                      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "Node.js", "Express.js", "React.js", "REST APIs"]
                    },
                    {
                      title: "AI & Machine Learning",
                      icon: <Brain className="w-6 h-6" />,
                      skills: ["Deep Learning", "Computer Vision", "NLP", "Transformer Architectures", "RAG", "Model Training", "Evaluation"]
                    },
                    {
                      title: "Mobile Development",
                      icon: <Smartphone className="w-6 h-6" />,
                      skills: ["Flutter", "Dart", "Kotlin", "Cross-Platform Dev", "Android Development"]
                    },
                    {
                      title: "Database Systems",
                      icon: <Database className="w-6 h-6" />,
                      skills: ["PostgreSQL", "MySQL", "Database Design", "Query Optimization"]
                    },
                    {
                      title: "Analytics & Visualization",
                      icon: <BarChart3 className="w-6 h-6" />,
                      skills: ["Power BI", "Tableau", "Data Analysis", "Business Intelligence"]
                    },
                    {
                      title: "Design & Creative",
                      icon: <Palette className="w-6 h-6" />,
                      skills: ["Figma", "Blender", "UI/UX Prototyping", "3D Asset Design"]
                    },
                    {
                      title: "Development Tools",
                      icon: <Wrench className="w-6 h-6" />,
                      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Postman"]
                    }
                  ].map((domain, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all space-y-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                          {domain.icon}
                        </div>
                        <h3 className="text-xl font-black uppercase italic tracking-tight text-white">{domain.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {domain.skills.map((skill, si) => (
                          <span key={si} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* EXPERIENCE SECTION */}
              <section id="experience" className="scroll-mt-32 space-y-16">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white text-center lg:text-left">Experience</h2>
                  <div className="h-1 w-24 bg-white mx-auto lg:mx-0" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column: Text and Information */}
                  <div className="space-y-12">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative pl-8 md:pl-12 border-l border-white/10 py-4"
                    >
                      <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                          <div className="space-y-1">
                            <p className="font-mono text-sm text-white/60 uppercase tracking-widest">Research Intern</p>
                            <h3 className="text-3xl font-black uppercase italic text-white tracking-tighter">National Institute of Technology Tiruchirappalli</h3>
                            <p className="text-xl font-bold text-white/80">Deep Learning Research Intern</p>
                          </div>
                          <p className="font-mono text-sm text-white/60 uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap">
                            Duration: 1 Month
                          </p>
                        </div>

                        <p className="text-lg text-white/70 leading-relaxed">
                          Worked on advanced Deep Learning systems involving Transformer architectures and Retrieval-Augmented Generation (RAG) frameworks. Participated in research activities focused on improving information retrieval, contextual understanding, and intelligent knowledge generation using modern AI methodologies.
                        </p>

                        <div className="space-y-4">
                          <p className="font-mono text-[10px] text-white/60 uppercase tracking-[0.3em]">Key Research Areas</p>
                          <div className="flex flex-wrap gap-3">
                            {["Transformer Models", "Large Language Models", "Retrieval-Augmented Generation (RAG)", "Deep Learning Research", "NLP Applications", "Experimental Evaluation"].map((area, i) => (
                              <span key={i} className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-tighter text-white/90">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column: PromptingIsAllYouNeed component */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-[4/3] min-h-[350px] md:min-h-[400px] rounded-[2rem] border border-white/10 bg-black overflow-hidden shadow-2xl group"
                  >
                    <PromptingIsAllYouNeed />
                  </motion.div>
                </div>
              </section>

              {/* ACHIEVEMENTS SECTION */}
              <section id="achievements" className="scroll-mt-32 space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white">Competitive Achievements</h2>
                  <div className="h-1 w-24 bg-white mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "SiteFix Competition", rank: "3rd Place", desc: "Developed innovative technical solutions and secured a podium finish among competing teams." },
                    { title: "NIT Technical Paper Presentation", rank: "2nd Place", desc: "Presented research-oriented technical concepts and achieved second place in a national-level academic competition." },
                    { title: "Design Thinking Project Expo", rank: "3rd Place", desc: "Recognized for innovative problem-solving and product ideation." },
                    { title: "NIT National Hackathon", rank: "Top 10 Finalist", desc: "Selected among the top-performing teams from a highly competitive participant pool." },
                    { title: "Amrita Vishwa Vidyapeetham Hackathon", rank: "Top 10 Finalist", desc: "Built and presented a complete technical solution under strict competition timelines." },
                    { title: "Additional Hackathons", rank: "5+ Participations", desc: "Worked on AI, software engineering, and innovation challenges in multidisciplinary teams." },
                  ].map((ach, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all space-y-4"
                    >
                      <div className="flex items-start justify-between">
                        <Trophy className="w-6 h-6 text-white/30 group-hover:text-white transition-colors" />
                        <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-black uppercase italic">
                          {ach.rank}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-black uppercase italic tracking-tight text-white">{ach.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{ach.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* CERTIFICATIONS SECTION */}
              <section className="scroll-mt-32 space-y-16">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white">Certifications</h2>
                  <div className="h-1 w-24 bg-white" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    {
                      provider: "Coursera",
                      title: "Machine Learning Specialization",
                      instructor: "Andrew Ng",
                      institution: "Stanford University",
                      topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "ML Foundations"]
                    },
                    {
                      provider: "Coursera",
                      title: "Advanced Deep Learning",
                      instructor: "Andrew Ng",
                      institution: "Stanford University",
                      topics: ["Neural Networks", "CNNs", "Sequence Models", "Transformer Architectures"]
                    },
                    {
                      provider: "IBM Professional Certificate",
                      title: "JavaScript Backend Developer",
                      topics: ["Backend Development", "Node.js", "Express.js", "REST APIs", "Server-Side Programming"]
                    },
                    {
                      provider: "Coursera - Google",
                      title: "Google Prompting Essentials",
                      topics: ["Prompt Engineering", "AI Tools", "Software Versioning", "Multimodal Prompts", "AI Personalization"]
                    },
                    {
                      provider: "Coursera - IBM",
                      title: "IBM RAG and Agentic AI Professional Certificate",
                      instructor: "IBM",
                      institution: "Coursera",
                      topics: ["RAG", "Agentic AI", "Generative AI", "AI Tools", "Software Versioning", "Multimodal Prompts", "AI Personalization"]
                    }
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col gap-6"
                    >
                      <div className="space-y-1">
                        <p className="font-mono text-xs text-white/60 uppercase tracking-widest">{cert.provider}</p>
                        <h3 className="text-2xl font-black uppercase italic text-white tracking-tighter">{cert.title}</h3>
                        {cert.instructor && (
                          <p className="text-sm text-white/80 font-bold uppercase italic">Instructor: {cert.instructor} // {cert.institution}</p>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.topics.map((topic, ti) => (
                          <span key={ti} className="px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/50">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* PROJECTS SECTION */}
              <section id="projects" className="scroll-mt-32 space-y-16">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-white">Featured Projects</h2>
                  <div className="h-1 w-24 bg-white mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Secure-Edge-AI-Telemedicine-using-IoT-Diagnostics-and-Federated-Learning-for-Rural-Healthcare",
                      desc: "TeleMed is an offline-first rural telemedicine platform built with React, Express, TypeScript, and PostgreSQL. It integrates IoT vital monitoring, AI-assisted screening, and low-bandwidth teleconsultation to deliver secure digital medical records, remote care, and early disease detection in low-connectivity environments.",
                      tag: "TeleMed // Rural Healthcare",
                      link: null
                    },
                    {
                      title: "AI-Powered-Investment-Decision-Support-Platform",
                      desc: "The AI-Powered Investment Decision Support Platform is a scalable fintech application that intelligently analyzes stock market data, tracks user portfolios, computes financial indicators, predicts trends, and provides personalized buy/sell investment recommendations using analytics, automation, and AI-driven decision support systems.",
                      tag: "FinTech // Investment AI",
                      link: "https://nvest-five.vercel.app"
                    },
                    {
                      title: "Startup-Assisstant",
                      desc: "A comprehensive AI-powered platform combining intelligent funding advisory for Indian startups with advanced document ingestion and RAG (Retrieval-Augmented Generation) capabilities.",
                      tag: "Startup // RAG Advisory",
                      link: "https://ai-verse-dun.vercel.app/"
                    },
                    {
                      title: "RAG-Enhanced-Video-Scene-Understanding",
                      desc: "VideoSceneRAG is a multimodal AI system that leverages computer vision, speech recognition, and large language models to understand video content at a semantic level. It enables users to ask questions about video content using natural language, get timestamped answers pinpointed to specific video scenes, and retrieve clips based on conceptual understanding.",
                      tag: "Multimodal AI // Video RAG",
                      link: null
                    },
                    {
                      title: "Agentic-Workflow-Orchestration-for-Urban-Relocation-A-Hybrid-Cloud-Edge-Intelligence-Framework",
                      desc: "NammaWay AI is a hyper-personalized ecosystem designed to bridge the gap between people and the services they use daily—whether it's finding the perfect place to stay, exploring a new city, or planning campus life. It respects your budget, explains its choices, and prioritizes your unique lifestyle.",
                      tag: "Urban Mobility // Agentic AI",
                      link: null
                    }
                  ].map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`${i >= 3 ? 'lg:col-span-1' : ''}`}
                    >
                      <Card
                        onClick={() => project.link && window.open(project.link, '_blank')}
                        className={`group relative aspect-[4/3] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden rounded-2xl hover:border-white/30 transition-all shadow-xl ${project.link ? 'cursor-pointer' : ''}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity z-10" />

                        {/* Project Image Placeholder - Professional Gradients */}
                        <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${i % 3 === 0 ? 'from-blue-600/20 to-purple-600/20' :
                          i % 3 === 1 ? 'from-emerald-600/20 to-cyan-600/20' :
                            'from-orange-600/20 to-rose-600/20'
                          } flex items-center justify-center`}>
                          <Bot className="w-16 h-16 text-white/10 group-hover:scale-125 transition-transform duration-700 ease-out" />
                        </div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-end gap-3 translate-y-6 group-hover:translate-y-0 transition-all duration-500 z-20">
                          <div className="space-y-1">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">{project.tag}</p>
                            <h3 className="text-xl font-black uppercase italic text-white tracking-tight leading-none group-hover:text-white transition-colors">
                              {project.title}
                            </h3>
                          </div>

                          <p className="text-[11px] text-white/60 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 leading-relaxed">
                            {project.desc}
                          </p>

                          <div className="flex items-center gap-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                            {project.link && (
                              <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-white">
                                <span>Live Demo</span>
                                <ExternalLink size={12} />
                              </div>
                            )}
                            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-white/60">
                              <span>Case Study</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md px-6 py-12 text-center text-xs font-mono text-white/60 mt-32">
              <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg">
                      <Bot className="w-5 h-5 text-black" />
                    </div>
                    <span className="font-mono text-xl font-bold tracking-tight text-white">HARISH K</span>
                  </div>
                  <p className="text-left max-w-xs leading-relaxed uppercase text-white/60">
                    Building clean, interactive web experiences with strong visual detail and thoughtful engineering.
                  </p>
                </div>

                <div className="flex flex-col md:items-end gap-6">
                  <div className="flex gap-8">
                    <div className="space-y-2 text-left">
                      <p className="text-[10px] text-white/60 uppercase tracking-widest">Navigation</p>
                      <ul className="space-y-1 uppercase font-bold text-[11px] text-white/80">
                        <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                        <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                        <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-left">
                      <p className="text-[10px] text-white/60 uppercase tracking-widest">Social</p>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => window.open('https://github.com/Harish-0412', '_blank')}
                          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer bg-white/5 border-white/10 w-8 h-8 p-0"
                        >
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
                            alt="github icon"
                            className="h-3 w-3"
                          />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => window.open('https://www.linkedin.com/in/harish0412/', '_blank')}
                          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer bg-white/5 border-white/10 w-8 h-8 p-0"
                        >
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
                            alt="linkedin icon"
                            className="h-3 w-3"
                          />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => window.open('mailto:harish04211mw@gmail.com', '_blank')}
                          className="rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer bg-white/5 border-white/10 w-8 h-8 p-0"
                        >
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
                            alt="email icon"
                            className="h-3 w-3"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <span className="text-[10px] tracking-widest uppercase text-white/60">© {new Date().getFullYear()} HARISH K PORTFOLIO. ALL RIGHTS RESERVED.</span>
                    <div className="flex gap-6 text-[10px] text-white/60 uppercase tracking-widest">
                      <a href="#" className="hover:text-white transition-colors">Privacy Code</a>
                      <a href="#" className="hover:text-white transition-colors">Restoration System</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
