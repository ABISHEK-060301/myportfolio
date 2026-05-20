import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaChevronRight,
  FaGraduationCap,
  FaShoppingCart,
  FaStar,
  FaTimes,
  FaUsers,
  FaWallet
} from "react-icons/fa";
import { FiGrid, FiList } from "react-icons/fi";
import { TbHexagon } from "react-icons/tb";

import "./projects.css";

// Import Stack Logos
import awsLogo from "../../assets/stack_logo/aws.png";
import jsLogo from "../../assets/stack_logo/js.png";
import mongodbLogo from "../../assets/stack_logo/mongodb.png";
import mysqlLogo from "../../assets/stack_logo/mysql.png";
import nextLogo from "../../assets/stack_logo/next.png";
import nodeLogo from "../../assets/stack_logo/node.png";
import reactLogo from "../../assets/stack_logo/react.png";
import reduxLogo from "../../assets/stack_logo/redux.png";
import tsLogo from "../../assets/stack_logo/typescript.png";

// Top Header Floating Logos Mapping
const headerLogos = [
  { img: reactLogo, name: "React" },
  { img: tsLogo, name: "TypeScript" },
  { img: nodeLogo, name: "Node.js" },
  { img: mongodbLogo, name: "MongoDB" },
  { img: mysqlLogo, name: "MySQL" },
  { img: awsLogo, name: "AWS" }
];

const projectsData = [
  {
    id: "01",
    title: "Learning Management System",
    client: "India",
    description: "An LMS platform for security courses with assessments, topology simulations, and admin management.",
    longDescription: "A comprehensive Learning Management System tailored for cybersecurity training. The platform hosts high-fidelity virtual labs, interactive course players, and customizable assessments. It empowers administrators with rich performance metrics and custom course builder capabilities, keeping students engaged through gamification elements.",
    features: [
      "Interactive media course player with bookmarking",
      "Network topology lab simulations using Docker",
      "Robust course builder and grading suite",
      "Real-time analytics dashboard for student tracking",
      "Live peer discussions and virtual class sessions"
    ],
    technologies: ["React", "Redux", "TypeScript", "Node.js", "MongoDB", "Material UI", "WebRTC"],
    color: "#9d4edd",
    glowColor: "rgba(157, 78, 221, 0.4)",
    iconBg: "rgba(73, 16, 139, 0.3)",
    icon: FaGraduationCap,
    bgLogo: reduxLogo
  },
  {
    id: "02",
    title: "Crypto Loans",
    client: "UAE",
    description: "A crypto lending & borrowing platform with multi-wallet integration, real-time assets, and secure transactions.",
    longDescription: "A decentralized borrowing and lending protocol that enables secure financial interactions without intermediates. Users can collateralize digital assets, compute dynamic loan-to-value indicators, and secure interest streams in real-time. Designed with ironclad cryptographic security frameworks.",
    features: [
      "Multi-signature digital wallet integration",
      "Dynamic collateral calculations and LTV ratios",
      "Automated liquidity pooling and distribution",
      "Real-time interest accrued tracking",
      "Ironclad ledger with cryptographic audit logs"
    ],
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "#38b000",
    glowColor: "rgba(56, 176, 0, 0.4)",
    iconBg: "rgba(20, 83, 45, 0.3)",
    icon: FaWallet,
    bgLogo: nextLogo
  },
  {
    id: "03",
    title: "Custom Electronics E-commerce Platform",
    client: "UAE",
    description: "Scalable electronics e-commerce platform with product search, cart, order tracking, and secure checkout.",
    longDescription: "A robust electronic shopping environment designed to scale effortlessly. Built with faceted search tools, dynamic sorting mechanics, high-performance checkout flows, and a central administration console. Integrates fully with modern fulfillment and stock warehouses.",
    features: [
      "Faceted categorization and product filtering",
      "Persistent cart syncing across sessions",
      "High-speed secure payment processing",
      "Fulfillment dispatch tracking systems",
      "Admin inventory and operations dashboard"
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "React", "Redux", "AWS", "Bootstrap"],
    color: "#ff9100",
    glowColor: "rgba(255, 145, 0, 0.4)",
    iconBg: "rgba(124, 45, 18, 0.3)",
    icon: FaShoppingCart,
    bgLogo: nodeLogo
  },
  {
    id: "04",
    title: "HR Application",
    client: "India",
    description: "Internal HR application for timesheets, exercises, reviews, and leave management.",
    longDescription: "An all-in-one workforce operations console built to consolidate administrative workflows. Teams can log custom timesheets, compile recursive self-appraisals, request vacations, and explore organizational directories within a single high-performance dashboard.",
    features: [
      "Dynamic timesheet entry with approval triggers",
      "Custom multi-angle performance appraisal builder",
      "Leave quota management with live status feeds",
      "Centralized document drawer with secure sharing",
      "Interactive organization hierarchy chart"
    ],
    technologies: ["React", "Redux", "Node.js", "MySQL", "AWS", "JS"],
    color: "#00b4d8",
    glowColor: "rgba(0, 180, 216, 0.4)",
    iconBg: "rgba(30, 58, 138, 0.3)",
    icon: FaUsers,
    bgLogo: mysqlLogo
  },
  {
    id: "05",
    title: "Brands Review Application",
    client: "USA",
    description: "Social review platform for brands to collect, manage, and publish customer reviews with subscription plans.",
    longDescription: "A high-scale social engagement engine helping verified organizations build customer trust. Consolidates review loops, provides advanced moderation workflows, triggers automated campaigns, and outputs rich insight feeds regarding user sentiment metrics.",
    features: [
      "Verification loops with email tracking",
      "Moderation control towers with filter parameters",
      "Automated marketing email and review request grids",
      "Stripe payment subscription model sets",
      "Sentiment graph overlays for core ratings"
    ],
    technologies: ["React", "Node.js", "MySQL", "JavaScript", "Redux"],
    color: "#f72585",
    glowColor: "rgba(247, 37, 133, 0.4)",
    iconBg: "rgba(131, 24, 67, 0.3)",
    icon: FaStar,
    bgLogo: reactLogo
  }
];

const Projects = () => {
  const [activeLayout, setActiveLayout] = useState("grid"); // "grid", "list", "hex"
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container py-2 px-4 md:px-8 max-w-7xl mx-auto mt-2">
      {/* Header Panel */}
      <div className={`glass-panel flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden ${activeLayout === 'hex' ? 'mb-2' : 'mb-4'}`}>
        {/* Abstract Background Light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide azonix text-white uppercase">
              My Projects
            </h1>
          </div>
          <p className="text-neutral-400 max-w-lg text-sm md:text-base font-light">
            Some of the impactful solutions I've built for clients across different industries.
          </p>
        </div>

        {/* Dynamic Header Interaction (Floating Tech Stack Logos / Switcher) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 z-10">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            {headerLogos.map((logo, idx) => (
              <div
                key={`hl-${idx}`}
                className="floating-logo"
                style={{ animationDelay: `${idx * 0.4}s` }}
                title={logo.name}
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="w-6 h-6 object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Interactive Layout Switcher */}
          <div className="view-switcher">
            <button
              onClick={() => setActiveLayout("grid")}
              className={`view-btn ${activeLayout === "grid" ? "active" : ""}`}
              title="Grid View"
            >
              <FiGrid />
              <span className="hidden md:inline">Grid</span>
            </button>
            <button
              onClick={() => setActiveLayout("list")}
              className={`view-btn ${activeLayout === "list" ? "active" : ""}`}
              title="Timeline List View"
            >
              <FiList />
              <span className="hidden md:inline">List</span>
            </button>
            <button
              onClick={() => setActiveLayout("hex")}
              className={`view-btn ${activeLayout === "hex" ? "active" : ""}`}
              title="Hexagonal Flow"
            >
              <TbHexagon />
              <span className="hidden md:inline">Honeycomb</span>
            </button>
          </div>
        </div>
      </div>

      {/* Elegant Neon Divider Line */}
      <div className={`w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 via-blue-500 via-green-500 to-transparent opacity-40 blur-[0.5px] ${activeLayout === 'hex' ? 'mb-2' : 'mb-4'}`}></div>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {activeLayout === "grid" && (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="project-grid"
          >
            {projectsData.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.id}
                  className="grid-card"
                  style={{
                    "--card-theme-color": project.color,
                    "--card-glow-color": project.glowColor,
                    "--card-icon-bg": project.iconBg
                  }}
                >
                  {/* Glowing Border Trail Overlay */}
                  <svg className="border-trail-svg">
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      rx="19"
                      className="border-trail-rect"
                      pathLength="100"
                    />
                  </svg>

                  {/* Decorative Subtle Background Tech Logo */}
                  <img
                    src={project.bgLogo}
                    alt="tech background"
                    className="card-bg-logo"
                  />

                  <div className="flex items-center justify-between mb-4">
                    <div className="card-icon-container">
                      <IconComp />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                      Client: {project.client}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white font-sans group-hover:text-white transition duration-300">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag bg-white/5 text-neutral-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div
                    onClick={() => setSelectedProject(project)}
                    className="detail-link"
                  >
                    <span>View Details</span>
                    <FaArrowRight />
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {activeLayout === "list" && (
          <motion.div
            key="list-view"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ duration: 0.4 }}
            className="timeline-wrapper"
          >
            <div className="timeline-line"></div>
            {projectsData.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.id}
                  className="timeline-item"
                  style={{
                    "--card-theme-color": project.color,
                    "--card-glow-color": project.glowColor
                  }}
                >
                  <div className="timeline-dot"></div>
                  <div
                    className="list-card"
                    style={{
                      "--card-theme-color": project.color,
                      "--card-glow-color": project.glowColor
                    }}
                  >
                    {/* Glowing Border Trail Overlay */}
                    <svg className="border-trail-svg">
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        rx="19"
                        className="border-trail-rect"
                        pathLength="100"
                      />
                    </svg>

                    {/* Decorative Subtle Background Tech Logo */}
                    <img
                      src={project.bgLogo}
                      alt="tech background"
                      className="card-bg-logo list-card-bg-logo"
                    />
                    {/* Left: Icon and Header */}
                    <div className="flex items-center gap-5 min-w-[280px]">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition duration-300"
                        style={{
                          background: project.iconBg,
                          color: project.color,
                          boxShadow: `0 0 15px ${project.glowColor}`
                        }}
                      >
                        <IconComp />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-400 mt-1 font-mono">
                          Client: {project.client}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Description */}
                    <div className="flex-1">
                      <p className="text-neutral-400 text-sm font-light max-w-2xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Right: Technologies and Action */}
                    <div className="flex items-center gap-6 justify-end">
                      <div className="hidden lg:flex flex-wrap gap-2 max-w-[240px] justify-end">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: `${project.color}15`,
                              color: project.color,
                              border: `1px solid ${project.color}30`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        onClick={() => setSelectedProject(project)}
                        className="circle-arrow-btn"
                        title="View Details"
                      >
                        <FaChevronRight />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom VIEW ALL PROJECTS trigger button */}
            <div className="flex justify-center mt-12">
              <button
                onClick={() => {
                  setActiveLayout("hex");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bebas tracking-widest text-lg border border-white/20 hover:border-white text-white hover:text-black hover:bg-white px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-lg"
              >
                <span>VIEW FEATURED HEXAGONS</span>
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        )}

        {activeLayout === "hex" && (
          <motion.div
            key="hex-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="hexagon-flow-container"
          >
            <div className="hex-grid-container">
              {projectsData.map((project, idx) => {
                const IconComp = project.icon;
                return (
                  <div
                    key={project.id}
                    className={`hexagon-wrapper hex-wrapper-${idx + 1}`}
                    style={{
                      "--card-theme-color": project.color,
                      "--card-glow-color": project.glowColor
                    }}
                  >
                    {/* Decorative Subtle Background Tech Logo inside Honeycomb */}
                    <img
                      src={project.bgLogo}
                      alt="tech background"
                      className="hex-bg-logo"
                    />

                    {/* SVG Hexagon Path with Filter Glow */}
                    <svg className="hex-svg" viewBox="0 0 290 330">
                      <defs>
                        <filter id={`glow-${project.id}`} x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="6" result="blur" />
                          <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <polygon
                        className="hex-polygon-bg"
                        points="145,5 285,85 285,245 145,325 5,245 5,85"
                      />
                      <polygon
                        className="hex-polygon-border"
                        points="145,5 285,85 285,245 145,325 5,245 5,85"
                      />
                      <polygon
                        className="hex-polygon-trail"
                        points="145,5 285,85 285,245 145,325 5,245 5,85"
                        pathLength="100"
                        style={{ filter: `url(#glow-${project.id})` }}
                      />
                    </svg>

                    {/* Central Overlay HTML Content */}
                    <div className="hex-content">
                      <div className="hex-icon-box">
                        <IconComp />
                      </div>
                      <h4 className="text-md font-extrabold text-white mt-1 leading-tight tracking-wide uppercase font-sans">
                        {project.title.split(" ").slice(0, 3).join(" ")}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-2 line-clamp-3 font-light leading-relaxed px-1">
                        {project.description}
                      </p>
                      <p className="text-[10px] text-neutral-500 mt-3 font-medium tracking-wide">
                        Tech: {project.technologies.slice(0, 3).join(", ")}
                      </p>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-4 text-[10px] uppercase font-bold tracking-wider hover:underline transition cursor-pointer"
                        style={{ color: project.color }}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Glassmorphic Projects Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative bg-[#0d0d0d] border border-white/10 rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl z-10 overflow-hidden"
              style={{
                boxShadow: `0 0 40px -10px ${selectedProject.glowColor}`
              }}
            >
              {/* Colored Side Bar Accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-2"
                style={{ background: selectedProject.color }}
              ></div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition cursor-pointer"
              >
                <FaTimes size={16} />
              </button>

              {/* Modal Contents */}
              <div className="pl-4">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: selectedProject.iconBg,
                      color: selectedProject.color
                    }}
                  >
                    {React.createElement(selectedProject.icon)}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white font-sans leading-none">
                      {selectedProject.title}
                    </h2>
                    <span className="text-xs font-mono text-neutral-500 block mt-2">
                      Client Engagement: {selectedProject.client}
                    </span>
                  </div>
                </div>

                <hr className="border-white/5 my-4" />

                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-2 font-mono">
                  Project Brief
                </h4>
                <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-3 font-mono">
                  Key Deliverables
                </h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-neutral-400 text-sm font-light"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: selectedProject.color }}
                      ></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-3 font-mono">
                  Technical Infrastructure
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: `${selectedProject.color}15`,
                        color: selectedProject.color,
                        border: `1px solid ${selectedProject.color}25`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
