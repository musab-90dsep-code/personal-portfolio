'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight, FolderGit2, X, ChevronLeft, ChevronRight, Code } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "LedgerGhor: Cloud-Native ERP Solution",
    description: "A comprehensive Enterprise Resource Planning (ERP) platform designed to centralize business operations, including financial accounting, inventory management, and real-time reporting.",
    fullDetails: "LedgerGhor is a robust ERP system built to streamline enterprise-level workflows. It features a sophisticated general ledger system, multi-branch inventory tracking, and automated financial reporting. Engineered with a Next.js frontend and a Django backend, the platform ensures high data integrity and performance, utilizing Redis for real-time concurrency management and PostgreSQL for complex relational data.",
    tech: ["Next.js", "Django", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    category: "Fullstack",
    images: [
      "/erp1.png",
      "/erp2.png",
      "/erp3.png"
    ],
    color: "from-[#00f2ff]/30",
    size: "col-span-1 md:col-span-2 row-span-2",
    liveLink: "https://www.ledgerghor.shop/",
    codeLink: "#"
  },
  {
    title: "EduCore: Multi-Tenant School Ecosystem",
    description: "A modern, multi-tenant academic ERP designed to unify school administrators, teachers, students, and parent portals under a single platform.",
    fullDetails: "EduCore is a next-generation SaaS application engineered for school administration and digital education. Built on a robust multi-tenant architecture, it supports automated digital examination boards, fee collections via integrated gateways, dynamic user privilege groups, and streamlined student admission workflows. Features custom-tailored dashboards and teacher grading panels with highly responsive, real-time feedback loops.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "TypeScript"],
    category: "Fullstack",
    images: [
      "/educore1.png"
    ],
    color: "from-[#4f46e5]/30",
    size: "col-span-1 row-span-1",
    liveLink: "https://demo-scool.vercel.app/",
    codeLink: "#"
  },
  {
    title: "Dokan: Localized Rod & Cement ERP",
    description: "A fully localized Bengali ERP platform tailored for heavy-industry retail, featuring real-time stock alerts, credit sales pipelines, and transactional ledgers.",
    fullDetails: "Dokan is a custom-built, enterprise-grade ERP solution designed for steel and cement merchants in Bangladesh. Styled with a premium gold and dark-gray aesthetic, it streamlines daily merchant workflows by managing credit sales (Dues), automated billing, raw material processing, and real-time inventory threshold alerts. The system is fully localized in Bengali (Bangla) to provide retail staff with maximum operational accessibility.",
    tech: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    category: "Fullstack",
    images: [
      "/dokan1.png"
    ],
    color: "from-[#f97316]/30",
    size: "col-span-1 row-span-1",
    liveLink: "https://dokan-nu.vercel.app/",
    codeLink: "#"
  },
  {
    title: "MusabKhan: 3D Personal Portfolio",
    description: "A premium, award-winning personal portfolio featuring interactive animations, smooth page transitions, and stunning dark mode aesthetics.",
    fullDetails: "MusabKhan Portfolio is an interactive, high-performance personal developer portfolio designed to showcase digital excellence. It combines cutting-edge frontend animations using Motion (Framer Motion) and custom WebGL shaders to create immersive 3D space themes. Optimized for extreme responsiveness and blazing-fast performance, it serves as a central hub for all my professional projects and contact channels.",
    tech: ["Next.js", "React", "Motion", "Tailwind CSS", "TypeScript"],
    category: "Frontend",
    images: [
      "/portfolio_v2.png"
    ],
    color: "from-[#00f2ff]/30",
    size: "col-span-1 md:col-span-3 row-span-1",
    liveLink: "https://musabkhan.vercel.app/",
    codeLink: "https://github.com/musab-90dsep-code/personal-portfolio"
  },
  {
    title: "Markazul Fikri Wad Dawah",
    description: "A modern educational management platform for Qawmi Madrasas, featuring digital admissions and institutional management.",
    fullDetails: "Developed a comprehensive portal for Markazul Fikri Wad Dawah to modernize institutional workflows. The system includes a digital notice board, automated admission processes, teacher directories, and a multimedia gallery. Engineered with React and Tailwind CSS for a responsive, high-performance user experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Render"],
    category: "Fullstack",
    images: [
      "/markazul1.png",
      "/markazul2.png",
      "/markazul3.png"
    ],
    color: "from-[#059669]/30",
    size: "col-span-1 row-span-1",
    liveLink: "https://www.markazulfikri.shop/",
    codeLink: "https://github.com/musab-90dsep-code/frontend"
  },
  {
    title: "Talimatin Institute",
    description: "An online Quran Academy platform offering Tajweed, Hifz, and Islamic basics with a focus on remote learning.",
    fullDetails: "Built a modern, accessible landing page and course management interface for Talimatin Institute. The platform features responsive course listings, enrollment workflows, and a multi-language support (English/Bengali) interface. Optimized for fast performance and high conversion for potential students.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    category: "Frontend",
    images: [
      "/talimat1.png",
      "/talimat2.png",
      "/talimat3.png"
    ],
    color: "from-[#065f46]/40",
    size: "col-span-1 row-span-1",
    liveLink: "https://talimatinstitute.vercel.app/",
    codeLink: "https://github.com/musab-90dsep-code/Talimat"
  },
  {
    title: "AI Canvas",
    description: "Generative AI workspace for creative professionals to collaborate in real-time, featuring custom LLM integrations.",
    fullDetails: "An innovative digital workspace where teams can brainstorm with integrated AI models. Supports multimodal inputs (text, image, audio) and live multiplayer cursors. Engineered with Next.js App Router for optimal SEO and loading speeds.",
    tech: ["Python", "OpenAI", "Next.js"],
    category: "AI",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    ],
    color: "from-[#10b981]/30",
    size: "col-span-1 row-span-1",
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "TaskFlow Pro",
    description: "Enterprise-grade project management tool with drag-and-drop Kanban boards.",
    fullDetails: "A comprehensive tool for teams to manage tasks, sprints, and resources. Features include drag-and-drop Kanban boards, Gantt charts, and real-time collaboration using WebSockets.",
    tech: ["React", "Firebase", "Tailwind"],
    category: "Frontend",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"],
    color: "from-blue-500/30",
    size: "col-span-1 row-span-1",
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "HealthTrack Analytics",
    description: "Medical dashboard for monitoring patient vitals and health trends in real-time.",
    fullDetails: "A medical dashboard providing real-time data visualization of patient vitals. Built with security and compliance in mind, featuring role-based access control and HIPAA-compliant data handling.",
    tech: ["Next.js", "Python", "MongoDB"],
    category: "Fullstack",
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"],
    color: "from-green-500/30",
    size: "col-span-1 row-span-1",
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "CryptoBot Automator",
    description: "Automated algorithmic trading bot executing ML strategies on Binance.",
    fullDetails: "An algorithmic trading bot that uses machine learning to predict short-term price movements and execute trades automatically via Binance API. Includes a React-based monitoring interface.",
    tech: ["Python", "TensorFlow", "Docker"],
    category: "AI",
    images: ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"],
    color: "from-purple-500/30",
    size: "col-span-1 row-span-1",
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "CyberSec Scanner",
    description: "Vulnerability scanning tool identifying XSS and SQLi in web applications.",
    fullDetails: "A command-line and web-based tool that scans websites for common vulnerabilities like XSS, SQLi, and CSRF, providing detailed remediation reports and automated CI/CD integration.",
    tech: ["Go", "React", "Docker"],
    category: "Backend",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"],
    color: "from-red-500/30",
    size: "col-span-1 row-span-1",
    liveLink: "#",
    codeLink: "#"
  }
];

const featuredProjects = projects.slice(0, 4);
const categories = ["All", "Fullstack", "Frontend", "Backend", "Web3", "AI"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const openGallery = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const filteredProjects = projects.filter(p => activeFilter === "All" ? true : p.category === activeFilter);

  // Helper component to render a project card consistently
  const renderProjectCard = (project: typeof projects[0], index: number, isFeaturedGrid: boolean) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={() => openGallery(project)}
      className={`group relative rounded-3xl overflow-hidden bg-[#0a0c10]/60 backdrop-blur-md border border-white/10 hover:border-[#00f2ff]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] cursor-pointer ${isFeaturedGrid ? project.size : 'col-span-1 h-[300px]'}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent mix-blend-overlay opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/40 to-transparent" />
      </div>

      <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => i < 3 && (
              <span key={t} className="px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider font-semibold bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/20 rounded-full backdrop-blur-md shadow-sm">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={project.codeLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 md:p-3 bg-[#0a0c10]/50 hover:bg-[#00f2ff]/20 backdrop-blur-md rounded-full border border-white/10 hover:border-[#00f2ff]/50 transition-all duration-300 group-hover:scale-110" title="Source Code">
              <Code size={16} className="text-white group-hover:text-[#00f2ff]" />
            </a>
            <a href={project.liveLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 md:p-3 bg-[#0a0c10]/50 hover:bg-[#22c55e]/20 backdrop-blur-md rounded-full border border-white/10 hover:border-[#22c55e]/50 transition-all duration-300 group-hover:scale-110" title="Live Demo">
              <ExternalLink size={16} className="text-white group-hover:text-[#22c55e]" />
            </a>
          </div>
        </div>

        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00f2ff] transition-colors duration-300 drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs md:text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-32 bg-transparent relative mt-10">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f2ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-[#00f2ff] text-xs font-bold uppercase tracking-widest mb-6">
              <FolderGit2 size={14} /> Selected Works
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#22c55e]">Deployments</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              A curated showcase of engineering excellence, where scalable architecture meets pixel-perfect design.
            </p>
          </div>

          <button
            onClick={() => setShowAllProjects(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-[#00f2ff]/30 transition-all group"
          >
            <ArrowUpRight size={20} className="group-hover:text-[#00f2ff] transition-colors" />
            View All Work
          </button>
        </motion.div>

        {/* Featured Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {featuredProjects.map((project, index) => renderProjectCard(project, index, true))}
        </div>
      </div>

      {/* All Projects Archive Overlay */}
      <AnimatePresence>
        {showAllProjects && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-[90] bg-[#0a0c10] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white">
                  Project <span className="text-[#00f2ff]">Archive</span>
                </h2>
                <button
                  onClick={() => setShowAllProjects(false)}
                  className="p-3 bg-white/5 hover:bg-red-500/20 border border-white/10 text-white rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-12">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 rounded-full font-medium transition-all text-sm border ${activeFilter === cat
                      ? 'bg-[#00f2ff] text-[#0a0c10] border-[#00f2ff]'
                      : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Filtered Grid */}
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={project.title}
                    >
                      {renderProjectCard(project, index, false)}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {filteredProjects.length === 0 && (
                  <div className="col-span-full py-20 text-center text-gray-500">
                    No projects found in this category.
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Details Modal (Shared for both Featured and Archive) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0c10]/95 backdrop-blur-xl p-4 md:p-10"
            onClick={closeGallery}
          >
            <button onClick={closeGallery} className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-red-500/20 text-white rounded-full transition-colors z-50">
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0a0c10] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,242,255,0.15)] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Image Gallery */}
              <div className="relative w-full md:w-[60%] h-[40vh] md:h-auto bg-black/50 border-b md:border-b-0 md:border-r border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className="object-cover md:object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-[#00f2ff]/50 border border-white/10 rounded-full text-white backdrop-blur-md transition-all">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 hover:bg-[#00f2ff]/50 border border-white/10 rounded-full text-white backdrop-blur-md transition-all">
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white/80 text-sm border border-white/10">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-[40%] p-6 md:p-10 flex flex-col overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">{selectedProject.title}</h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 text-xs uppercase tracking-wider font-semibold bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/20 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-[#22c55e] uppercase tracking-widest text-sm font-bold mb-3 flex items-center gap-2">
                    <FolderGit2 size={16} /> About Project
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {selectedProject.fullDetails || selectedProject.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-white/10">
                  <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#00f2ff] to-[#22c55e] text-[#0a0c10] font-bold rounded-xl transition-transform hover:scale-105 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                  <a href={selectedProject.codeLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-[#0a0c10]/50 border border-white/20 hover:border-[#00f2ff]/50 hover:bg-[#00f2ff]/10 text-white font-bold rounded-xl transition-all">
                    <Code size={20} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
