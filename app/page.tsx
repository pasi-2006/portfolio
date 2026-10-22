"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Menu, X, Sun, Moon, ExternalLink, ArrowUp, Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

import { 
  FaJava, 
  FaJs, 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaDatabase 
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

export default function Home() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "MySQL", icon: <FaDatabase className="text-blue-500 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500 text-4xl" /> },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using Next.js and Tailwind CSS with smooth animations.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/pasi-2006",
      live: "#",
    },
    {
      title: "FitFoot Shoe Store",
      description: "E-commerce platform for selling athletic footwear with a modern design.",
      tags: ["Java", "MySQL", "Hibernate"],
      github: "https://github.com/pasi-2006",
      live: "https://fitfootshoestore.netlify.app/",
    },
    {
      title: "AI Chat Application",
      description: "AI powered interactive chat assistant built for modern web users.",
      tags: ["React", "Node.js", "API"],
      github: "https://github.com/pasi-2006",
      live: "#",
    },
  ];

  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State for clearing input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Reset inputs
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 h-1 w-full bg-cyan-500 z-[100]" />

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Background Icons Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[8%] text-cyan-500 text-5xl md:text-6xl"
        >
          ⚛️
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] text-blue-500 text-5xl md:text-6xl"
        >
          💻
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] left-[5%] text-cyan-400 text-4xl md:text-5xl"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] right-[6%] text-blue-400 text-4xl md:text-5xl"
        >
          🗄️
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[75%] left-[10%] text-emerald-400 text-5xl md:text-6xl"
        >
          📱
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute top-[80%] right-[12%] text-cyan-500 text-5xl md:text-6xl"
        >
          ⚙️
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[90%] left-[30%] text-amber-500 text-4xl"
        >
          ☕
        </motion.div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors ${
          darkMode
            ? "bg-slate-950/80 border-slate-800"
            : "bg-white/80 border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-cyan-500 font-bold text-xl">Pasindu.</h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-700 hover:border-cyan-500 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#about" className="hover:text-cyan-500 transition">
                About
              </a>
              <a href="#skills" className="hover:text-cyan-500 transition">
                Skills
              </a>
              <a href="#education" className="hover:text-cyan-500 transition">
                Education
              </a>
              <a href="#projects" className="hover:text-cyan-500 transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-cyan-500 transition">
                Contact
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            className={`md:hidden px-6 py-4 space-y-3 border-t ${
              darkMode
                ? "bg-slate-950 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-500"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-500"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-500"
            >
              Education
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-cyan-500"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero / Landing Section */}
      <section className="min-h-screen flex items-center pt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-500 text-lg font-medium">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold mt-2">
              S.Pasindu <span className="text-cyan-500">Nayanapriya</span>
            </h1>

            <TypeAnimation
              sequence={[
                "Software Engineering Undergraduate",
                2000,
                "React Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-2xl text-cyan-400 font-semibold mt-4"
            />

            <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
              Passionate about building modern web applications, learning
              emerging technologies, and creating impactful digital
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/pasi-2006"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20"
              >
                GitHub Profile
              </a>

              <a
                href="/My cv.pdf"
                download
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-6 py-3 rounded-xl transition font-medium"
              >
                Download CV
              </a>

              <a
                href="#projects"
                className="border border-slate-700 hover:border-cyan-500 px-6 py-3 rounded-xl transition font-medium"
              >
                Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
          >
            <div className="relative cursor-pointer">
              <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-30 rounded-full" />

              <Image
                src="/profile.jpeg"
                alt="S.Pasindu Nayanapriya"
                width={350}
                height={350}
                className="rounded-full border-4 border-cyan-500 object-cover relative shadow-2xl transition-transform duration-300"
              />

              {/* Original Icons */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className={`absolute -top-4 -left-4 border border-cyan-500 p-3 rounded-full ${
                  darkMode ? "bg-slate-900" : "bg-white shadow-md"
                }`}
              >
                ⚛️
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: -15 }}
                className={`absolute -bottom-4 -right-4 border border-cyan-500 p-3 rounded-full ${
                  darkMode ? "bg-slate-900" : "bg-white shadow-md"
                }`}
              >
                🚀
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className={`absolute top-1/2 -left-10 border border-cyan-500 p-3 rounded-full ${
                  darkMode ? "bg-slate-900" : "bg-white shadow-md"
                }`}
              >
                💻
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                className={`absolute top-1/4 -right-10 border border-cyan-500 p-3 rounded-full ${
                  darkMode ? "bg-slate-900" : "bg-white shadow-md"
                }`}
              >
                🗄️
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                className={`absolute -bottom-6 left-1/4 border border-cyan-500 p-3 rounded-full ${
                  darkMode ? "bg-slate-900" : "bg-white shadow-md"
                }`}
              >
                ⚙️
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Pro-Look About Section (Modified Layout) */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        {/* Top Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
            ABOUT ME
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Transforming ideas into digital experiences
          </h2>
        </div>

        {/* Profile Details Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-12">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-cyan-500 text-lg font-medium">Hello, I'm</p>
              <h3 className="text-4xl md:text-5xl font-bold">
                S.Pasindu <span className="text-cyan-500">Nayanapriya</span>
              </h3>
            </div>

            <p className="text-base md:text-lg leading-relaxed opacity-80 max-w-xl">
              I am an ambitious Software Engineering undergraduate passionate about building modern web applications, clean architecture, and practical user interfaces. Currently pursuing a BSc (Hons) in Software Engineering while studying BIT at UCSC, turning complex requirements into reliable full-stack solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-cyan-500/20 text-sm"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className={`border px-6 py-3 rounded-xl transition text-sm font-medium ${
                  darkMode
                    ? "border-slate-800 hover:border-cyan-500 bg-slate-900/40"
                    : "border-slate-200 hover:border-cyan-500 bg-white"
                }`}
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
              <div className="relative rounded-full p-2 border-2 border-cyan-500/40 bg-slate-900/50">
                <Image
                  src="/profile.jpeg"
                  alt="S.Pasindu Nayanapriya"
                  width={280}
                  height={280}
                  className="rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div
            className={`p-6 rounded-2xl border transition-all ${
              darkMode
                ? "bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40"
                : "bg-white border-slate-200 shadow-md"
            }`}
          >
            <p className="text-xs font-bold tracking-widest text-cyan-500 uppercase mb-2">
              TOTAL PROJECTS
            </p>
            <h4 className="text-4xl font-extrabold mb-1">03+</h4>
            <p className="text-xs opacity-60">Innovative web & software solutions crafted</p>
          </div>

          <div
            className={`p-6 rounded-2xl border transition-all ${
              darkMode
                ? "bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40"
                : "bg-white border-slate-200 shadow-md"
            }`}
          >
            <p className="text-xs font-bold tracking-widest text-cyan-500 uppercase mb-2">
              ACADEMIC PROGRAMS
            </p>
            <h4 className="text-4xl font-extrabold mb-1">02</h4>
            <p className="text-xs opacity-60">BSc Software Eng. & BIT (UCSC)</p>
          </div>

          <div
            className={`p-6 rounded-2xl border transition-all ${
              darkMode
                ? "bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40"
                : "bg-white border-slate-200 shadow-md"
            }`}
          >
            <p className="text-xs font-bold tracking-widest text-cyan-500 uppercase mb-2">
              YEARS OF LEARNING
            </p>
            <h4 className="text-4xl font-extrabold mb-1">02+</h4>
            <p className="text-xs opacity-60">Continuous development journey</p>
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-cyan-500">
          GitHub Stats
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=pasi-2006&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="w-full rounded-xl shadow-lg border border-slate-800"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=pasi-2006&layout=compact&theme=tokyonight"
            alt="Top Languages"
            className="w-full rounded-xl shadow-lg border border-slate-800"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-cyan-500">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 text-center font-semibold rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col items-center justify-center gap-3 ${
                darkMode
                  ? "bg-slate-900 border-slate-800 hover:border-cyan-500"
                  : "bg-white border-slate-200 hover:border-cyan-500 shadow-sm"
              }`}
            >
              {skill.icon}
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center opacity-60 mt-8">
          Constantly learning and exploring modern technologies.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-cyan-500">Education</h2>

        <div className="space-y-6">
          <div
            className={`p-6 rounded-xl border ${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <h3 className="text-xl font-bold">
              BSc (Hons) Software Engineering
            </h3>
            <p className="text-cyan-500 font-medium mt-1">
              Birmingham City University
            </p>
            <p className="opacity-60 text-sm mt-1">2024 - 2028</p>
          </div>

          <div
            className={`p-6 rounded-xl border ${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <h3 className="text-xl font-bold">
              Bachelor of Information Technology (BIT)
            </h3>
            <p className="text-cyan-500 font-medium mt-1">
              University of Colombo School of Computing (UCSC)
            </p>
            <p className="opacity-60 text-sm mt-1">In Progress</p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-cyan-500">Journey</h2>

        <div className="border-l-2 border-cyan-500 pl-8 space-y-10">
          <div>
            <h3 className="text-xl font-bold">2023</h3>
            <p className="opacity-70 mt-1">
              Completed Diploma in Human Resource Management
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2024</h3>
            <p className="opacity-70 mt-1">
              Started BSc (Hons) Software Engineering
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">2025</h3>
            <p className="opacity-70 mt-1">Started BIT Program at UCSC</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-cyan-500">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border flex flex-col justify-between transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1 ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="opacity-70 mt-3 text-sm">{proj.description}</p>

                <div className="flex gap-2 mt-5 flex-wrap">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800/50">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold opacity-80 hover:text-cyan-400 transition"
                >
                  <FaGithub size={16} /> Code
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold opacity-80 hover:text-cyan-400 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        {/* Top Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
            CONTACT
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's Work Together
          </h2>
          <p className="opacity-60 max-w-xl mx-auto text-sm md:text-base">
            Have a project idea or a collaboration in mind? Send a message and I'll get back to you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Info Card */}
          <div
            className={`md:col-span-5 p-8 rounded-3xl border flex flex-col justify-between space-y-8 ${
              darkMode
                ? "bg-slate-900/60 border-slate-800"
                : "bg-white border-slate-200 shadow-xl"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Let's work together</h3>
                <p className="text-sm opacity-60 leading-relaxed">
                  Open to freelance projects, internships, and full-time opportunities.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email Box */}
                <a
                  href="mailto:deshpriyathusitha059@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode
                      ? "bg-slate-950/50 border-slate-800/80 hover:border-cyan-500/50"
                      : "bg-slate-50 border-slate-200 hover:border-cyan-500/50"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail size={18} />
                  </div>
                  <span className="text-xs md:text-sm font-medium truncate">
                    deshpriyathusitha059@gmail.com
                  </span>
                </a>

                {/* Location Box */}
                <div
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${
                    darkMode
                      ? "bg-slate-950/50 border-slate-800/80"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm font-medium">Sri Lanka</span>
                </div>

                {/* WhatsApp Box */}
                <a
                  href="https://wa.me/94763595905?text=Hi%20Pasindu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode
                      ? "bg-slate-950/50 border-slate-800/80 hover:border-emerald-500/50 text-emerald-400"
                      : "bg-slate-50 border-slate-200 hover:border-emerald-500/50 text-emerald-600"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <FaWhatsapp size={18} />
                  </div>
                  <span className="text-sm font-medium">Chat on WhatsApp</span>
                </a>

                {/* Facebook Box */}
                <a
                  href="https://www.facebook.com/share/19gwYXner1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    darkMode
                      ? "bg-slate-950/50 border-slate-800/80 hover:border-blue-500/50 text-blue-400"
                      : "bg-slate-50 border-slate-200 hover:border-blue-500/50 text-blue-600"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <FaFacebook size={18} />
                  </div>
                  <span className="text-sm font-medium">Connect on Facebook</span>
                </a>
              </div>
            </div>

            {/* Available Badge */}
            <div
              className={`p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 mt-4`}
            >
              <p className="text-xs font-bold tracking-wider text-emerald-400 uppercase mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR WORK
              </p>
              <p className="text-xs opacity-70 leading-relaxed">
                Currently accepting selected high-impact projects and internships.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div
            className={`md:col-span-7 p-8 rounded-3xl border ${
              darkMode
                ? "bg-slate-900/60 border-slate-800"
                : "bg-white border-slate-200 shadow-xl"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={`w-full p-4 rounded-2xl border outline-none focus:border-cyan-500 text-sm transition ${
                    darkMode
                      ? "bg-slate-950/60 border-slate-800 text-white placeholder:text-slate-600"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                  className={`w-full p-4 rounded-2xl border outline-none focus:border-cyan-500 text-sm transition ${
                    darkMode
                      ? "bg-slate-950/60 border-slate-800 text-white placeholder:text-slate-600"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  className={`w-full p-4 rounded-2xl border outline-none focus:border-cyan-500 text-sm transition ${
                    darkMode
                      ? "bg-slate-950/60 border-slate-800 text-white placeholder:text-slate-600"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className={`w-full p-4 rounded-2xl border outline-none focus:border-cyan-500 text-sm transition ${
                    darkMode
                      ? "bg-slate-950/60 border-slate-800 text-white placeholder:text-slate-600"
                      : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-4 rounded-2xl transition w-full shadow-lg shadow-cyan-500/10 text-sm"
              >
                Send Message
              </button>

              {formSubmitted && (
                <p className="text-emerald-400 text-sm text-center font-medium">
                  ✓ Message sent successfully! I will get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Modern Card-Style Footer */}
      <footer className="max-w-6xl mx-auto px-6 pb-12 pt-10 relative z-10">
        <div
          className={`rounded-3xl p-8 md:p-12 border transition-all ${
            darkMode
              ? "bg-slate-900/80 border-slate-800 text-white"
              : "bg-white/80 border-slate-200 text-slate-900 shadow-xl"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/60">
            {/* Left Column - Branding & Tagline */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-widest text-cyan-500 uppercase">
                Pasindu.dev
              </h2>
              <p className="text-xl font-semibold leading-snug">
                Professional digital experiences for modern applications.
              </p>
              <p className="text-sm opacity-60 leading-relaxed">
                Available for freelance projects, collaborations, and full-stack software developments.
              </p>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="md:pl-10 space-y-3">
              <h3 className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#about" className="hover:text-cyan-500 transition">About</a></li>
                <li><a href="#skills" className="hover:text-cyan-500 transition">Skills</a></li>
                <li><a href="#education" className="hover:text-cyan-500 transition">Education</a></li>
                <li><a href="#projects" className="hover:text-cyan-500 transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-cyan-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* Right Column - Connect Social Icons */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-widest text-cyan-500 uppercase">
                Connect
              </h3>
              <div className="flex gap-3">
                <a
                  href="mailto:deshpriyathusitha059@gmail.com"
                  className="p-3 rounded-full border border-slate-700 hover:border-cyan-500 hover:text-cyan-500 transition"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://wa.me/94763595905?text=Hi%20Pasindu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-700 hover:border-green-500 hover:text-green-500 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://github.com/pasi-2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-700 hover:border-cyan-500 hover:text-cyan-500 transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.facebook.com/share/19gwYXner1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-500 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs opacity-50 gap-2">
            <p>© 2026 PASINDU NAYANAPRIYA. ALL RIGHTS RESERVED.</p>
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="https://wa.me/94763595905?text=Hi%20Pasindu"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </main>
  );
}